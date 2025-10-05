import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Globe, Smartphone, Code, Database } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useFetch } from "@/hooks/useFetch";
import { getCompanies, CompanyData, getSliders, SliderData, getClients, ClientData, getGalleries, GalleryData } from "@/api";
const Portfolio = () => {

const { data: clients, loading: clientsLoading, error: clientsError } = useFetch<ClientData>(getClients);
  const projects = [
   {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Search and Sort to easily find Categories,Sub-Categories, Brand, Colors, Size, Products.Manage Categories, Sub-Categories, Brands, Color.Product fields include Name, SKU, Product Details,Additional Details, List Price, Stock, minimumQuantity Order Amount, Handling Fee and more.Set Products as Active or InactiveAdd products to a single category or multiple categoriesrelated products.Easily Manage and Edit Categories, Sub-Categories,Brand, Colors, Size, Products.Create and Manage Custom Order Status.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Website Design & Development (Dynamic / Static)",
      category: "mobile",
      description: "Dynamic Website – Includes Admin Panel for easy content management Static Website – Lightweight version without Admin Panel Fully Responsive Design – Optimized for Computer, Laptop, Tablet & Mobile Frameworks – Laravel, CodeIgniter Frontend Technologies – HTML, CSS, JavaScript, jQuery, jQuery UI, Ajax Database Support – MySQL, MySQLi",
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
      image: "/images/products/Gemini_Generated_Image_zaxnaazaxnaazaxn.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Billing Master Software",
      category: "Desktop",
      description: "Service Add, Service Assign.Generate Bill (Monthly, Daily, Partial) Bill Update, Bill Collection (Monthly, Daily, Partial).Customer Ledger (Bill Collection).Bank Reconciliation (Cash, Card, Cheque, bKash.)Accounts (Income, Expence, Balanced Sheet.)Report (Invoicing, Bill Summary, Service List,Bank Transection Report, Customer Ledger Report,Income / Expense Report).User Permission, Database Backup, Database Security.",
      technologies: ["Vue.js", "Python", "FastAPI", "Redis"],
      image: "/images/products/Gemini_Generated_Image_cf2tagcf2tagcf2t.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Pharmacy Management Software",
      category: "enterprise",
      description: " 30000+ Medicine List With Generic Name & Price.Company / Generic Name Wise Short List.Purchase, Purchase Edit, Purchase Return. Sales, Wholesale, Retail Sale, Sales Return.Stock Transfer, Damaged Medicine List.Supplier / Customer / Indoor Patient Ledger.Accounts (Income, Expence, Balanced Sheet.)Reports (Purchase, Sales, Inventory, Due List etc.)User Permission, Database Backup, Database Security.",
      technologies: ["Angular", "Java", "Spring Boot", "MySQL"],
      image: "/images/products/Gemini_Generated_Image_9fd1b59fd1b59fd1.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Diagnostics Center Management Software",
      category: "mobile",
      description: "Consultant/Referrer Registration.Patient Registration, Patient Ledger.Counter Wise Patient Registration.Lab Sample Collection, Invoice Wise Test andReporting. Accounts (Income, Expence, Balanced Sheet.)Report (Billing, Sample Collection Report, Test Report,Referrer Commission, Commission Ledger,Income/ Expense Report.).User Permission, Database Backup, Database Security.",
      technologies: ["React Native", "Express.js", "MongoDB", "Socket.io"],
      image: "/images/products/Gemini_Generated_Image_3z5n7t3z5n7t3z5n.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Optics Shop Management Software",
      category: "web",
      description: "Purchase, Purchase Edit, Purchase Return.Sales, Sales Edit, Sales Return, Special Order.Damage Return, Daily Cash Summary, Cash Closing.Multi Show Room Maintenance From Head Office.Supplier Ledger / Customer Ledger / Employee Ledger.Accounts (Income, Expence, Balanced Sheet.)Bank Reconciliation (Cash, Card, Cheque, bKash.)Reports (Power Measure, Stock, Purchase, Sales etc.)User Permission, Database Backup, Database Security.",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      image: "/images/products/Gemini_Generated_Image_ixlr65ixlr65ixlr.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "Dealership Management Software",
      category: "web",
      description: "Purchase, Purchase Edit, Purchase Return.Sales, Sales Edit, Sales Return, Stock Management.Damage Product Return, Other Damage Return.Order Sheet, Daily Cash Summary, Cash Closing.Supplier Ledger / Customer Ledger / Party Ledger.Accounts (Income, Expence, Balanced Sheet.)Bank Reconciliation (Cash, Card, Cheque, bKash.)Reports (Stock, Purchase, Sales, Damage, Profit etc.)User Permission, Database Backup, Database Security.",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 8,
      title: "Filling Station Management Software",
      category: "web",
      description: "Purchase, Purchase Edit, Purchase Return.Sales, Sales Edit, Sales Return, Integreted SMS Alert.Product Wise (Petrol, Diesel, Octane etc) Stock Report.Reading Calculation.Daily Reading Report.Daily Statement.Daily Cash Summary, Cash Closing.Supplier Ledger / Customer Ledger / Employee Ledger.Accounts (Income, Expence, Balance Sheet.)Bank Reconciliation (Cash, Card, Cheque, bKash.)Reports (Stock, Purchase, Sales, Accounts, Profit etc.)Shift Wise Report.Short & Access.SMS Module (SMS on cash and credit sales.)User Permission, Database Backup, Database Security.",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 9,
      title: "Warehouse Management Software",
      category: "web",
      description: "Purchase, Purchase Edit, Purchase Return.Sales, Wholesale, Retail Sale, Sales Return.Inventory Counts, Lot Tracking, Stock Management.Inter-Warehouse & Inter-Company Transfers,Multiple Warehouses & Inventory Locations,Multi Show Room Maintenance From Head Office.Supplier Ledger / Customer Ledger / Employee Ledger.Accounts (Income, Expence, Balanced Sheet.)Bank Reconciliation (Cash, Card, Cheque, bKash.)Barcode Reader, Barcode Generator.Reports (Stock, Purchase, Sales, Accounts, Profit etc.)User Permission, Database Backup, Database Security.",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      image: "/images/products/Gemini_Generated_Image_l4mjbjl4mjbjl4mj.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 10,
      title: "Production Management Software",
      category: "web",
      description: "Production Planning, Production Management and Material Management.Purchase, Purchase Edit, Purchase Return.Sales, Wholesale, Retail Sale, Sales Return.Employ multiple units of measure, Generate automated production orders from sales orders..Perform variance analysis for time, material usage and production.Backflush at multiple levels, Retrieve scrap history.Multi Show Room Maintenance From Head Office.Supplier Ledger / Customer Ledger / Employee Ledger.Accounts (Income, Expence, Balanced Sheet.)Reports (Stock, Purchase, Sales, Accounts, Profit etc.)User Permission, Database Backup, Database Security.",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      image: "/images/products/Gemini_Generated_Image_r76wtcr76wtcr76w.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 11,
      title: "Point Of Sale (POS) Software",
      category: "web",
      description: "Purchase, Purchase Edit, Purchase Return.Sales, Wholesale, Retail Sale, Sales Return.Multi Show Room Maintenance From Head Office.Supplier Ledger / Customer Ledger / Employee Ledger.Accounts (Income, Expence, Balanced Sheet.)Bank Reconciliation (Cash, Card, Cheque, bKash.)Barcode Reader, Barcode Generator.Reports (Stock, Purchase, Sales, Accounts, Profit etc.)User Permission, Database Backup, Database Security.",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 12,
      title: "Super Shop Management Software",
      category: "web",
      description: "Purchase, Purchase Edit, Purchase Return. Sales, Sales Edit, Sales Return, Stock Management. Multi Show Room Maintenance From Head Office. Supplier Ledger / Customer Ledger / Employee Ledger. Accounts (Income, Expence, Balanced Sheet.) Bank Reconciliation (Cash, Card, Cheque, bKash.) Reports (Stock, Purchase, Sales, Accounts, Profit etc.) Barcode Reader, Barcode Generator. User Permission, Database Backup, Database Security.",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      image: "/images/products/Gemini_Generated_Image_y79mrvy79mrvy79m.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 13,
      title: "Restaurant Management Software",
      category: "web",
      description: "  Menu Types / Food Menu / Customer Receipts.Table Reservation, Table Billing.Customer Ledger / Employee Ledger.Accounts (Income, Expence, Balanced Sheet.)Bank Reconciliation (Cash, Card, Cheque, bKash.)Integrated Credit Card Processing.Reports (Stock, Purchase, Sales, Accounts, Profit etc.)Barcode Reader, Barcode Generator.User Permission, Database Backup, Database Security.",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 14,
      title: "Fashion House Management Software",
      category: "web",
      description: " Category, Sub Category, Brand, Color Wise Product.Purchase, Purchase Edit, Purchase Return.Sales, Wholesale, Retail Sale, Sales Return, Stock.Multi Show Room Maintenance From Head Office.Supplier Ledger / Customer Ledger / Employee Ledger.Accounts (Income, Expence, Balanced Sheet.)Bank Reconciliation (Cash, Card, Cheque, bKash.)Barcode Reader, Barcode Generator.User Permission, Database Backup, Database Security.",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      image: "/images/products/Gemini_Generated_Image_v5sc48v5sc48v5sc.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 15,
      title: "Cold Storage Management Software",
      category: "web",
      description: " Inventory (Chamber, Floor, Line, Pocket, position).Loading, Chambering, paloting, Delivery, Loan, Sales.Multi Show Room Maintenance From Head Office.Agent (Broker) Ledger / Party (Customer) Ledger.Accounts (Income, Expence, Balanced Sheet.)Bank Module (Bank, Account, Deposite, Withdraw)Reports (Loading Receipt, Chambering, paloting,Delivery Gatepass, Loan Agreement, Sales Invoice etc.)User Permission, Database Backup, Database Security.",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      image: "/images/products/Gemini_Generated_Image_jeateajeateajeat.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 16,
      title: "School College/Coaching Center Management Software",
      category: "web",
      description: " General Setting (Class, Section,Group, Session Version, Semester, Shift, Subject, Subject Structure Feet Set). SICS Setting (Students, Teachers, Staff, Fees, Fees - Collection, Dues Payment, Collections, Income - Statement, Expense Statement). Integreted SMS Alert With Student In/Out. Message (Welcome Message, Due Message). Admin Panel (User Setting, User Permission User Active/Inactive). User Profile (Username & Password Change).",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 17,
      title: "Online News Portal",
      category: "web",
      description: "Dynamic (Includes Admin Panel) & Static (Excludes Admin panel).Full Responsive (Computer, Notebook, Tab, Mobile).Framework (Laravel, CodeIgniter).Scripting Language (HTML, CSS, Java, Script, JQueryJQuery UI, Ajax).Database (MySQL, MySQLi).",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "50+" },
  ];

  const filterProjects = (category: string) => {
    if (category === "all") return projects;
    return projects.filter((project) => project.category === category);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return Globe;
      case "mobile":
        return Smartphone;
      case "enterprise":
        return Database;
      default:
        return Code;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              💼 Our Work
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">OUR PORTFOLIO</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Showcasing innovative solutions we've built for clients across various industries
            </p>
          </div>
        </div>
      </section>

   

      {/* Portfolio Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our latest work and see how we've helped businesses achieve their goals
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterProjects("web").map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterProjects("mobile").map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
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


      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-md">
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "This team delivered exactly what we needed. Highly professional and responsive!"
                </p>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-sm text-muted-foreground">CEO, TechCorp</p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md">
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Great communication and excellent results. We’ll definitely work again."
                </p>
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-sm text-muted-foreground">Founder, StartupXYZ</p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md">
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Their software solutions transformed our business processes."
                </p>
                <h4 className="font-semibold">Aisha Khan</h4>
                <p className="text-sm text-muted-foreground">Manager, GlobalMart</p>
              </CardContent>
            </Card>
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
              Let's discuss your ideas and create something amazing together
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="/contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <Badge className="absolute top-3 left-3" variant="default">
            Featured
          </Badge>
        )}
        <div className="absolute top-3 right-3">
          <div className="w-8 h-8 bg-background/90 rounded-full flex items-center justify-center">
            <CategoryIcon className="h-4 w-4 text-foreground" />
          </div>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <Badge variant="outline" className="capitalize">
            {project.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className="text-base">{project.description}</CardDescription>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-2 pt-4">
          <Button size="sm" variant="outline" className="flex-1" asChild>
            <a href={project.liveUrl}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
          <Button size="sm" variant="ghost" asChild>
            <a href={project.githubUrl}>
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

function getCategoryIcon(category: string) {
  switch (category) {
    case "web":
      return Globe;
    case "mobile":
      return Smartphone;
    case "enterprise":
      return Database;
    default:
      return Code;
  }
}

export default Portfolio;
