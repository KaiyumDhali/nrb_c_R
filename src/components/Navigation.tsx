import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFetch } from "@/hooks/useFetch";
import { getCompanies, CompanyData } from "@/api";
const Navigation = () => {
   const { data: companies, loading: companiesLoading, error: companiesError } = useFetch<CompanyData>(getCompanies);
  const [isOpen, setIsOpen] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Show WhatsApp button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 100); // appears after 100px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-brand-red/10 shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
{/* Left: Logo */}
{/* Left: Logo */}
<Link to="/" className="flex items-center h-12">
  {companies && companies.length > 0 && companies[0].left_logo ? (
    <img
      src={`http://localhost:8000/storage/${companies[0].left_logo}`}
      alt="Company Logo"
      className="h-12 w-auto object-contain"
    />
  ) : (
    <div className="h-12 w-12 bg-gray-200 rounded-md flex items-center justify-center">
      {/* Optional placeholder */}
    </div>
  )}
</Link>





            {/* Center: Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-primary ${
                    isActive(item.path)
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right: Get Started Button */}
            <div className="hidden md:flex">
              <Button
                className="text-white"
                variant="default"
                size="sm"
                style={{ backgroundColor: "#530402" }}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        isActive(item.path) ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button variant="default" className="mt-4 bg-gradient-to-r from-primary to-accent">
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* WhatsApp Floating Bubble with blink animation */}
<AnimatePresence>
  {showWhatsApp && (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
    >
      {/* WhatsApp Bubble only */}
      <motion.a
        href="https://wa.me/+8801511500080"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full p-4 shadow-lg flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 0px rgba(34,197,94,0.6)",
            "0 0 20px rgba(34,197,94,0.9)",
            "0 0 0px rgba(34,197,94,0.6)"
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};

export default Navigation;
