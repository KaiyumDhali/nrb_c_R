import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { useFetch } from "@/hooks/useFetch";
import { getCompanies, CompanyData } from "@/api";

const Footer = () => {
  // useFetch দিয়ে Companies ডেটা আনা হচ্ছে
  const { data: companies, loading: companiesLoading, error: companiesError } = useFetch<CompanyData>(getCompanies);

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">NRB SOFTWARE</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Innovative software solutions that drive business growth. We specialize in custom development, 
              web applications, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            {companiesLoading && <p className="text-sm text-muted-foreground">Loading...</p>}
            {companiesError && <p className="text-sm text-red-500">Failed to load company info.</p>}
            
            {!companiesLoading && !companiesError && companies && companies.length > 0 && (
              <ul className="space-y-3">
                {companies.map((company) => (
                  <li key={company.id}>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground text-sm">{company.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground text-sm">{company.phone_number}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground text-sm">{company.company_address}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} NRB Software. All rights reserved. Built with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
