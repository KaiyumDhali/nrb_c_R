import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, ArrowRight, Code, Zap, Shield, Users, Star, ChevronRight,BarChart3, Package,Building,Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useFetch } from "@/hooks/useFetch";
import { getCompanies, CompanyData, getSliders, SliderData, getClients, ClientData, getGalleries, GalleryData } from "@/api";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare
} from "lucide-react";

const Home = () => {

const { data: companies, loading: companiesLoading, error: companiesError } = useFetch<CompanyData>(getCompanies);
const { data: sliders, loading: slidersLoading, error: slidersError } = useFetch<SliderData>(getSliders);
const { data: clients, loading: clientsLoading, error: clientsError } = useFetch<ClientData>(getClients);
const [selectedImage, setSelectedImage] = useState<string | null>(null);
const { data: galleries, loading: galleriesLoading, error: galleriesError } = useFetch<GalleryData>(getGalleries);


 const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "nrbsoftwareit@gmail.com",
      subDetails: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+880 1511500080",
      subDetails: "Sun - Thu from 10am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "House #43/A (3rd floor), Road #24, Gulshan-1, Dhaka-1212",
      subDetails: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Sun - Thu from 10am to 6pm",
      subDetails: "10:00 AM - 6:00 PM EST"
    }
  ];



  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built to meet your specific business requirements.",
      features: ["React & Vue.js", "Cloud Integration", "API Development"]
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized applications that deliver exceptional speed and user experience."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee for your peace of mind."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced developers and designers dedicated to your project's success."
    }
  ];

  const testimonials = [
  {
    name: "Abdul Karim",
    company: "Dhaka Tech Solutions",
    rating: 5,
    text: "NRB Software transformed our business processes with their innovative solutions. Highly recommended!"
  },
  {
    name: "Nasrin Akter",
    company: "Chattogram Startups",
    rating: 5,
    text: "Professional, efficient, and delivered exactly what we needed. Great communication throughout."
  },
  {
    name: "Rafiq Hasan",
    company: "Bangla Enterprises",
    rating: 5,
    text: "Outstanding quality and support. They exceeded our expectations in every way."
  }

  ];

  const softwareProducts = [
    {
      icon: BarChart3,
      title: "Business Analytics Suite",
      description: "Comprehensive analytics platform for data-driven decision making.",
      features: ["Real-time Dashboards", "Custom Reports", "Data Visualization"]
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamline business processes with intelligent automation tools.",
      features: ["Process Designer", "Integration Hub", "Performance Monitoring"]
    },
    {
      icon: Package,
      title: "Enterprise CRM",
      description: "Complete customer relationship management solution.",
      features: ["Contact Management", "Sales Pipeline", "Marketing Automation"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}

     <section
  className="text-primary-foreground min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      sliders && sliders.length > 0
        ? `url(http://localhost:8000/storage/${sliders[0].slider_image})`
        : "none",
  }}
>
  <div className="container mx-auto px-4 text-center">
    <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-brand-red/20 animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-brand-black/20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-brand-red/30 animate-pulse" style={{ animationDelay: '4s' }} />
    <div className="max-w-4xl mx-auto">
      {/* <Badge variant="secondary" className="mb-6">
        🚀 Leading Software Solutions
      </Badge> */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
       {sliders?.length > 0 ? sliders[0].title : "Loading..."}
        {/* <span className="block text-accent-foreground">NRB SOFTWARE</span> */}
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
       {sliders?.length > 0 ? sliders[0].description : "Loading..."}
      </p>
         {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft">
              <Code className="w-5 h-5 text-brand-red" />
              <span className="text-sm font-medium text-foreground " >Custom Development</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft">
              <Cpu className="w-5 h-5 text-brand-red" />
              <span className="text-sm font-medium text-foreground">Software Products</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft">
              <Users className="w-5 h-5 text-brand-red" />
              <span className="text-sm font-medium text-foreground">Multi-Industry</span>
            </div>
          </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center ">
        <Button size="lg" variant="secondary" asChild>
          <Link to="/contact">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
         <Link to="/portfolio">
        <Button size="lg"  variant="secondary" asChild>
         
            View Our Work
      
        </Button>
            </Link>
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose NRB Software?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#FBEAEA" }}>
                    <feature.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
<section className="py-20 bg-brand-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Software Products
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Ready-to-deploy software solutions designed to accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {softwareProducts.map((product, index) => (
            <Card key={index} className="transition-spring border-0 shadow-medium bg-gradient-card">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-black/10 flex items-center justify-center"style={{ backgroundColor: "#E5E5E5" }}>
                  <product.icon className="w-10 h-10 text-brand-black" />
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">{product.title}</CardTitle>
                <CardDescription className="text-brand-gray text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <Package className="w-4 h-4 text-brand-black mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" className="w-full text-white" style={{ backgroundColor: "#2E2E2E" }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button style={{ backgroundColor: "#530402" }} className="text-white" size="lg"  variant="secondary"  asChild>
          <Link to="/contact">
            Explore All Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        </div>
      </div>
    </section>


    <section className="py-16 bg-background">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Trusted by Industry Leaders
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        We're proud to work with innovative companies across various industries
      </p>
    </div>

    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {clients.map((client, index) => (
          <CarouselItem
  key={index}
  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
>
  <Card className=" flex flex-col items-center justify-between p-4 hover:shadow-medium transition-all duration-300 bg-card border-border group">
    {/* Logo part */}
    <div className="flex items-center justify-center h-20 w-full">
      <img
        src={`http://localhost:8000/storage/${client.image}`}
        alt={client.company_name}
        className="max-h-16 max-w-[80%] object-contain"
      />
    </div>
  </Card>
</CarouselItem>

        ))}
      </CarouselContent>
    </Carousel>
  </div>
</section>


    {/* Gallery Section */}
<section className="py-20 bg-brand-light">
  <div className="container mx-auto px-6">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Our Gallery
        </h2>
        <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
          Take a glimpse into our world - from our modern workspace to team collaboration 
          and the innovative projects we're passionate about.
        </p>
      </div>

      {/* Gallery Grid */}
      {galleriesLoading && <p className="text-center">Loading gallery...</p>}
      {galleriesError && <p className="text-center text-red-500">Failed to load gallery</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleries?.map((image) => (
          <Dialog key={image.id}>
            <DialogTrigger asChild>
              <Card className="group cursor-pointer overflow-hidden border-0 shadow-soft hover:shadow-large transition-smooth bg-background">
                <div className="relative overflow-hidden">
                  <img
                    src={`http://localhost:8000/storage/${image.image}`}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-medium text-brand-light px-2 py-1 bg-brand-black/50 rounded-full">
                        {image.category ?? "Gallery"}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-brand-red transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed">
                    {image.description}
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 border-0">
              <div className="relative">
                <img
                  src={`http://localhost:8000/storage/${image.image}`}
                  alt={image.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black/90 to-transparent p-8 rounded-b-lg">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    {image.title}
                  </h3>
                  <p className="text-primary-foreground/90 text-lg">
                    {image.description}
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
<section className="py-20 bg-brand-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Ready to start your project? We'd love to hear about your ideas and discuss how we can help bring them to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="border-0 shadow-medium bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <MessageSquare className="w-7 h-7 text-brand-red" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground font-medium">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder=" First Name" 
                      className="border-brand-red/20 focus:border-brand-red transition-smooth"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground font-medium">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Last Name" 
                      className="border-brand-red/20 focus:border-brand-red transition-smooth"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="example@gmail.com"
                    className="border-brand-red/20 focus:border-brand-red transition-smooth"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium">Company (Optional)</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Name"
                    className="border-brand-red/20 focus:border-brand-red transition-smooth"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="project" className="text-foreground font-medium">Project Type</Label>
                  <select 
                    id="project" 
                    className="w-full h-10 px-3 rounded-md border border-brand-red/20 bg-background text-foreground focus:border-brand-red transition-smooth"
                  >
                    <option value="">Select a project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="backend">Backend System</option>
                    <option value="software-product">Software Product</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Tell us about your project</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your project requirements, goals, and any specific technologies you have in mind..."
                    rows={5}
                    className="border-brand-red/20 focus:border-brand-red transition-smooth resize-none"
                  />
                </div>
                
                <Button variant="default" size="lg" className="w-full group">
                  Send Message
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
                <p className="text-lg text-brand-gray leading-relaxed mb-8">
                  We're here to answer your questions and discuss your project needs.
                  Choose the method that works best for you.
                </p>
              </div>
{!companiesLoading && !companiesError && companies && companies.length > 0 &&
  companies.map((company, index) => (
    <Card key={index} className="border-0 shadow-soft bg-gradient-card hover:shadow-medium transition-smooth">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-brand-red" /> {/* Replace with proper icon if needed */}
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Email</h4>
            <p className="text-foreground font-medium">{company.email}</p>
          </div>
        </div>
      </CardContent>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-brand-red" /> {/* Replace with proper icon if needed */}
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Call US</h4>
            <p className="text-foreground font-medium">{company.phone_number}</p>
          </div>
        </div>
      </CardContent>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-brand-red" /> {/* Replace with proper icon if needed */}
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">VISIT US</h4>
            <p className="text-brand-gray text-sm">{company.company_address}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ))
}

          
              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Quick Actions</h4>
                <div className="flex flex-col gap-3">
                  <Button variant="default" className="justify-start" size="lg">
                    <Phone className="w-5 h-5 mr-3" />
                    Schedule a Call
                  </Button>
                  <Button variant="default" className="justify-start" size="lg">
                    <Mail className="w-5 h-5 mr-3" />
                    Email Us Directly
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-accent-foreground/90">
              Let's discuss your project and create something amazing together
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Start Your Project
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;