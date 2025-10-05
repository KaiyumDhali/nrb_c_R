import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "nrbsoftwareit@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+880 1511500080",
      description: "Sun - Thu from 10am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "House #43/A (3rd floor), Road #24, Gulshan-1, Dhaka-1212",
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Sun - Thu: 10AM - 6PM",
      description: "Weekend support available"
    }
  ];

  const services = [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "Database Design",
    "Maintenance & Support",
    "Other"
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              📞 Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CONTACT US
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Ready to transform your business? Let's discuss your project and make it happen
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4"style={{ backgroundColor: "#FBEAEA" }}>
                    <info.icon className="h-6 w-6 text-primary-foreground text-red-500" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-2">{info.details}</p>
                  <CardDescription>{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Start Your Project</h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
                </p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="info@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Service Needed</Label>
                        <Select onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Project Budget</Label>
                        <Select onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range, index) => (
                              <SelectItem key={index} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, requirements, timeline, and any specific features you need..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button  type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FBEAEA" }}>
                      <MessageSquare className="h-5 w-5 text-primary-foreground text-red-500" />
                    </div>
                    <div>
                      <CardTitle>Quick Response</CardTitle>
                      <CardDescription>We respond to all inquiries within 24 hours</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our team is committed to providing prompt responses to all project inquiries. 
                    You'll receive a detailed proposal outlining timeline, costs, and approach.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Free Consultation</CardTitle>
                  <CardDescription>30-minute strategy session at no cost</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Project scope and requirements analysis</li>
                    <li>• Technology recommendations</li>
                    <li>• Timeline and milestone planning</li>
                    <li>• Budget and resource estimation</li>
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                  <CardDescription>Visit our modern office space</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Located in the heart of the tech district, our office is easily accessible 
                    and equipped with modern amenities for client meetings.
                  </p>
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Quick answers to common questions about our services and process
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does a typical project take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Project timelines vary based on complexity. Simple websites take 2-4 weeks, 
                    while complex applications can take 3-6 months. We provide detailed timelines during consultation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide ongoing support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer comprehensive maintenance and support packages including updates, 
                    bug fixes, security patches, and 24/7 monitoring services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What technologies do you specialize in?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work with modern technologies including React, Node.js, Python, AWS, Docker, 
                    and many others. We choose the best technology stack for each project's requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;