import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Cloud, Database, Globe, Cog, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useFetch } from "@/hooks/useFetch";
import { getServices, ServiceData } from "@/api";

const Services = () => {
  
const { data: services, loading: servicesLoading, error: servicesError } = useFetch<ServiceData>(getServices);

  const processes = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your requirements, goals, and create a detailed project roadmap."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team designs the user experience and technical architecture for your solution."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your application using best practices with rigorous testing throughout."
    },
    {
      step: "04",
      title: "Deployment & Launch",
      description: "We deploy your solution and ensure everything runs perfectly in production."
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "Ongoing support and continuous improvements to keep your solution optimal."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              🛠️ Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              COMPREHENSIVE SOFTWARE SOLUTIONS
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              From concept to deployment, we provide end-to-end software development services
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services?.map((service) => (
    <Card key={service.id} className="hover:shadow-lg transition-shadow group">
      <CardHeader>
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: "#FBEAEA" }}>
          <Globe className="h-6 w-6 text-red-500" /> 
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className="text-base">
          {service.description}
        </CardDescription>

        <div className="space-y-2">
          {service.features?.map((feature) => (
            <div key={feature.id} className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                {feature.feature}
              </span>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  ))}
</div>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures quality results and client satisfaction
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processes.map((process, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center" >
                      <span className="text-primary-foreground font-bold">{process.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We work with the latest and most reliable technologies to build robust solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL", "MongoDB", "TypeScript", "Vue.js", "Laravel", "Flutter", "Kubernetes"].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3 hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="font-bold text-sm">{tech.slice(0, 2)}</span>
                </div>
                <p className="text-sm font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-accent-foreground/90">
              Let's discuss your requirements and create a solution that drives your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;