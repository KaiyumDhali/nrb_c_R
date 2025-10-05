import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Shield,
  Headphones,
  Award,
  Zap,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useFetch } from "@/hooks/useFetch";
import { getProducts, ProductData } from "@/api";

// Dialog imports
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Products = () => {
  const { data: products = [], loading, error } = useFetch<ProductData[]>(getProducts);

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const map = new Map<number, string>();
    products.forEach((p) => {
      if (p.category) map.set(p.category.id, p.category.name);
    });
    return [{ id: "all", name: "All" }, ...Array.from(map.entries()).map(([id, name]) => ({ id: id.toString(), name }))];
  }, [products]);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              🚀 Our Products
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              PROFESSIONAL SOFTWARE SOLUTIONS
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Cutting-edge products designed to accelerate your business growth
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <FeatureItem icon={<Shield className="h-8 w-8 text-primary" />} title="Enterprise Security" subtitle="Bank-level encryption" />
            <FeatureItem icon={<Headphones className="h-8 w-8 text-primary" />} title="24/7 Support" subtitle="Expert assistance" />
            <FeatureItem icon={<Award className="h-8 w-8 text-primary" />} title="Award Winning" subtitle="Industry recognized" />
            <FeatureItem icon={<Zap className="h-8 w-8 text-primary" />} title="Lightning Fast" subtitle="Optimized performance" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Product Suite</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of professional software solutions
            </p>
          </div>

          {loading && <p className="text-center text-gray-500">Loading products...</p>}
          {error && <p className="text-center text-red-500">Failed to load products.</p>}

          {!loading && !error && (
            <Tabs defaultValue="all" className="w-full">
              {/* Dynamic Tabs */}
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
                {categories.map((cat) => (
                  <TabsTrigger key={cat.id} value={cat.id}>
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tabs Content */}
              {categories.map((cat) => (
                <TabsContent key={cat.id} value={cat.id} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {(cat.id === "all"
                      ? products
                      : products.filter((p) => p.category?.id.toString() === cat.id)
                    ).map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* Feature Item */
const FeatureItem = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
  </div>
);

/* Product Card */
const ProductCard = ({ product }: { product: ProductData }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageArray = product.images ? product.images.split(",") : [];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % imageArray.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + imageArray.length) % imageArray.length);

  return (
    <Card className="group hover:shadow-large transition-smooth bg-background border-0 transition-all duration-300 overflow-hidden h-full flex flex-col relative shadow-soft pt-12">
      {/* Circular Image */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src={`http://localhost:8000/storage/${imageArray[currentImage]}`}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image Slider Buttons */}
        {imageArray.length > 1 && (
          <div className="flex justify-between w-24 mx-auto mt-2">
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="bg-background/70 p-1 rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="bg-background/70 p-1 rounded-full">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col mt-12">
        <CardHeader className="pb-4 text-center">
          <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between space-y-4">
          <CardDescription className="text-sm text-center">{product.description}</CardDescription>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-sm uppercase mb-2">Key Features</h4>
            <div className="space-y-2">
              {product.features.slice(0, 5).map((f) => (
                <div key={f.id} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{f.feature}</span>
                </div>
              ))}

              {product.features.length > 5 && (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-primary text-sm mt-2 hover:underline">
                      + View all features
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle>{product.name} - Full Features</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3 max-h-[400px] overflow-y-auto">
                      {product.features.map((f) => (
                        <div key={f.id} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{f.feature}</span>
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="flex-1"><Link to="/contact">Get Started </Link></Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Products;
