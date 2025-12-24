import { Building, Droplets, Factory, Home, Landmark, Route, Wrench, ArrowRight, CheckCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const Services = () => {
  const services = [
    {
      icon: Landmark,
      title: "PWD Infrastructure & Civil Works",
      description: "Execution of civil construction and infrastructure development projects under the Public Works Department. This includes construction of public buildings, institutional structures, and departmental facilities as per PWD specifications and quality standards.",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Building,
      title: "Government Building Construction",
      description: "Construction of government office buildings, administrative complexes, educational institutions, healthcare facilities, and other public service infrastructure. All projects are executed in compliance with departmental design specifications and structural requirements.",
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: Home,
      title: "Government Apartments & Housing Projects",
      description: "Development of government housing schemes, quarters for government employees, and public housing projects under various departmental schemes. Construction follows approved layouts and building standards.",
      color: "from-green-600 to-green-800",
    },
    {
      icon: Route,
      title: "Road & Highway Construction (RCD / PWD)",
      description: "Construction and maintenance of roads, highways, and associated infrastructure including culverts, drains, and roadside amenities under the Road Construction Department and Public Works Department.",
      color: "from-orange-600 to-orange-800",
    },
    {
      icon: Droplets,
      title: "Water Resources & Drainage Works (WRD)",
      description: "Execution of water resources projects including canal construction, irrigation infrastructure, embankment works, drainage systems, and flood control structures under the Water Resources Department.",
      color: "from-cyan-600 to-cyan-800",
    },
    {
      icon: Factory,
      title: "Departmental Contract-Based Construction",
      description: "Undertaking various civil construction contracts awarded by government departments through the tender process. This includes renovation works, structural repairs, and new construction projects.",
      color: "from-rose-600 to-rose-800",
    },
    {
      icon: Wrench,
      title: "Turnkey Government Projects",
      description: "End-to-end execution of government infrastructure projects from foundation to completion, including all civil, structural, and finishing works as per contract specifications.",
      color: "from-amber-600 to-amber-800",
    },
  ];

  const workTypes = [
    "Government building construction",
    "Government apartments and housing projects",
    "Roads, bridges, and public infrastructure works",
    "PWD civil and structural works",
    "Water resources and drainage-related projects",
    "Departmental civil construction contracts",
    "Turnkey government projects",
    "All types of government construction work",
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="gradient-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="badge-govt mb-6">
              <Wrench className="h-4 w-4" />
              Work Profile
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Services /{" "}
              <span className="text-gradient-gold">Work Profile</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Our scope of work encompasses various categories of government 
              infrastructure and civil construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* Scope Notice */}
      <section className="bg-accent py-5 relative overflow-hidden">
        <div className="absolute inset-0 shimmer" />
        <div className="container relative text-center">
          <p className="font-semibold text-primary flex items-center justify-center gap-3">
            <FileText className="h-5 w-5" />
            All services are provided exclusively for government departments through tender and contract-based engagements.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="container relative">
          <SectionTitle 
            title="Scope of Work" 
            subtitle="Categories of government infrastructure construction undertaken by the company"
          />
          
          <div className="grid md:grid-cols-2 gap-6 stagger-fade-in">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="flex items-start gap-5 relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Work */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container relative">
          <SectionTitle 
            title="Types of Work Executed" 
            subtitle="Comprehensive range of government construction activities"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-10 shadow-elevated relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-saffron-light to-accent" />
              
              <ul className="grid sm:grid-cols-2 gap-5">
                {workTypes.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-accent to-saffron-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated">
              <Link to="/contact">
                Enquire About Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Disclaimer</p>
                <p className="text-sm text-muted-foreground">
                  RAJDEV SUSHILA INFRASTRUCTURE PRIVATE LIMITED undertakes only government projects. 
                  The company does not accept private or individual residential construction contracts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;