import { Link } from "react-router-dom";
import { ArrowRight, Building, CheckCircle, FileText, ShieldCheck, Users, Award, Clock, Landmark, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import heroImage from "@/assets/hero-construction.jpg";

const Index = () => {
  const departments = [
    { abbr: "PWD", name: "Public Works Department" },
    { abbr: "RWD", name: "Rural Works Department" },
    { abbr: "BCD", name: "Building Construction Department" },
    { abbr: "WRD", name: "Water Resources Department" },
    { abbr: "RCD", name: "Road Construction Department" },
  ];

  const highlights = [
    {
      icon: FileText,
      title: "Government Registered",
      description: "CIN: U41001BR2025PTC078380, Registered with RoC Patna",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Focused",
      description: "Adherence to all departmental norms and quality standards",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Skilled technical workforce for complex infrastructure projects",
    },
    {
      icon: Building,
      title: "Public Infrastructure",
      description: "Specializing exclusively in government construction contracts",
    },
  ];

  const stats = [
    { icon: Landmark, value: "5+", label: "Govt. Departments" },
    { icon: Award, value: "100%", label: "Compliance Rate" },
    { icon: Clock, value: "2025", label: "Incorporated" },
    { icon: MapPin, value: "Bihar", label: "Headquarters" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Government infrastructure construction project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-navy opacity-90" />
          <div className="absolute inset-0 pattern-grid opacity-10" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="badge-govt mb-8 animate-slide-up">
              <Building className="h-4 w-4" />
              Government Contractor | Bihar, India
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-primary-foreground mb-8 leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Trusted Government Contractor for{" "}
              <span className="text-gradient-gold">Public Infrastructure</span>{" "}
              Development
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
              RAJDEV SUSHILA INFRASTRUCTURE PRIVATE LIMITED is committed to delivering 
              quality civil construction works for government departments with accountability, 
              compliance, and timely execution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 font-semibold shadow-glow-accent text-lg px-8 py-6">
                <Link to="/contact">
                  Submit Enquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm text-lg px-8 py-6">
                <Link to="/about">
                  View Company Details
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--accent))"/>
          </svg>
        </div>
      </section>

      {/* CIN Banner */}
      <section className="bg-accent py-5 relative overflow-hidden">
        <div className="absolute inset-0 shimmer" />
        <div className="container relative">
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 text-sm md:text-base font-semibold text-primary">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              <span>CIN: U41001BR2025PTC078380</span>
            </div>
            <span className="hidden md:inline text-primary/40">●</span>
            <div className="flex items-center gap-2">
              <Landmark className="h-5 w-5" />
              <span>Registered with RoC, Patna</span>
            </div>
            <span className="hidden md:inline text-primary/40">●</span>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Incorporated: 26 August 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background relative">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-card rounded-2xl border border-border card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="stat-number mb-2">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container relative">
          <SectionTitle 
            title="Our Credentials" 
            subtitle="A government-registered infrastructure company committed to public sector development"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-fade-in">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border p-8 rounded-2xl card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-saffron-light rounded-xl flex items-center justify-center mb-5 shadow-glow-accent icon-box">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-background relative">
        <div className="container">
          <SectionTitle 
            title="Government Departments" 
            subtitle="We execute civil construction projects in association with state government departments"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-fade-in">
              {departments.map((dept, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 card-hover group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 gradient-navy rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-accent font-bold text-lg">
                        {dept.abbr}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm leading-tight">
                        {dept.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <CheckCircle className="h-3.5 w-3.5 text-accent" />
                        <span className="text-xs text-muted-foreground">Registered</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated">
              <Link to="/departments">
                View All Departments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Professional Enquiries{" "}
              <span className="text-gradient-gold">Welcome</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10">
              For tender-related enquiries, project discussions, or official correspondence, 
              please reach out through our contact page.
            </p>
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 font-semibold shadow-glow-accent text-lg px-10 py-6">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;