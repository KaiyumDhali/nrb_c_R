import {useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Lightbulb, Heart, Rocket, Code, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useFetch } from "@/hooks/useFetch";
import { getAbouts, AboutData} from "@/api";

const About = () => {

const { data: abouts, loading: aboutsLoading, error: aboutsError } = useFetch<AboutData>(getAbouts);

    const stats = [
    { icon: Users, value: "50+", label: "Happy Clients", color: "text-brand-red" },
    { icon: Code, value: "200+", label: "Projects Delivered", color: "text-brand-black" },
    { icon: Award, value: "6+", label: "Years Experience", color: "text-brand-red" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction", color: "text-brand-black" }
  ];
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every line of code and every client interaction."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about technology and creating solutions that make a difference."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners in their digital transformation journey."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and creative approaches to solve complex challenges."
    }
  ];

  const team = [
    {
      name: "Mohammad Kamrul Hasan",
      role: "Manager IT",
      description: "Visionary leader with 10+ years in software development and business strategy."
    },
    {
      name: "Din Mohammad Reza",
      role: "Software Engineer",
      description: "Full-stack expert with expertise in modern frameworks and cloud solutions."
    },
    {
      name: "MD Kaiyum Dhali",
      role: "Software Engineer",
      description: "Full-stack expert with expertise in modern frameworks and cloud solutions."
    },
    {
      name: "Emma Davis",
      role: "UX/UI Designer",
      description: "Creative designer focused on user-centered design and exceptional experiences."
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
              📖 Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ABOUT NRB SOFTWARE
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Empowering businesses through innovative technology solutions since 2019
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
           {abouts.map((about) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
             <p className="text-lg text-muted-foreground mb-6">
                 {about.mission}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We're not just developers - we're partners in your success, committed to understanding your unique 
                challenges and delivering solutions that exceed expectations.
              </p>
              <Button className="" style={{ backgroundColor: "#530402" }} asChild>
                <Link to="/contact">Let's Work Together</Link>
              </Button>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-muted to-background">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FBEAEA" }}>
                    <Rocket className="h-6 w-6 text-primary-foreground text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Founded in 2019</h3>
                    <p className="text-muted-foreground">6+ years of excellence</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects Delivered</span>
                    <span className="font-semibold">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Happy Clients</span>
                    <span className="font-semibold">200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Members</span>
                    <span className="font-semibold">50+</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
             ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape our approach to every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#FBEAEA" }}>
                    <value.icon className="h-6 w-6 text-primary-foreground text-red-500" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Talented professionals dedicated to bringing your vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
         {/* CTA Section */}
          <div className="text-center container bg-gradient-to-r from-primary to-accent rounded-2xl p-12 shadow-large">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into powerful software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-primary-foreground text-brand-black hover:bg-primary-foreground/90">
                Schedule Consultation
              </Button>
              <Button variant="brand-outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-brand-black">
                View Portfolio
              </Button>
            </div>
          </div>
          </section>
      {/* Why Choose Us */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose NRB Software?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-accent-foreground/80">
                      500+ successful projects delivered across various industries with 98% client satisfaction rate.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-accent-foreground/80">
                      Skilled professionals with expertise in cutting-edge technologies and industry best practices.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Client-Focused Approach</h3>
                    <p className="text-accent-foreground/80">
                      We prioritize your business goals and work as an extension of your team to achieve success.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation & Quality</h3>
                    <p className="text-accent-foreground/80">
                      We leverage the latest technologies and maintain high standards in code quality and security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;