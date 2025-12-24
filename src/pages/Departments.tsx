import { Building2, CheckCircle, ArrowRight, Landmark, Users, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const Departments = () => {
  const departments = [
    {
      abbreviation: "PWD",
      name: "Public Works Department",
      description: "Responsible for construction and maintenance of government buildings, public infrastructure, roads, and bridges across Bihar.",
      icon: Building2,
      color: "from-blue-600 to-blue-800",
    },
    {
      abbreviation: "RWD",
      name: "Rural Works Department",
      description: "Focuses on rural infrastructure development including village roads, rural buildings, and community infrastructure.",
      icon: Users,
      color: "from-green-600 to-green-800",
    },
    {
      abbreviation: "BCD",
      name: "Building Construction Department",
      description: "Handles construction of government offices, institutional buildings, and major construction projects in the state.",
      icon: Landmark,
      color: "from-purple-600 to-purple-800",
    },
    {
      abbreviation: "WRD",
      name: "Water Resources Department",
      description: "Manages water-related infrastructure including canals, irrigation systems, embankments, and flood control structures.",
      icon: Building2,
      color: "from-cyan-600 to-cyan-800",
    },
    {
      abbreviation: "RCD",
      name: "Road Construction Department",
      description: "Specializes in construction and maintenance of state highways, major district roads, and other road infrastructure.",
      icon: FileCheck,
      color: "from-orange-600 to-orange-800",
    },
  ];

  const projectCategories = [
    "Government Office Buildings",
    "Public Housing Projects",
    "Educational Institutions",
    "Healthcare Facilities",
    "Roads & Highways",
    "Bridges & Culverts",
    "Water Resources Infrastructure",
    "Drainage Systems",
    "Flood Control Structures",
    "Rural Infrastructure",
    "Community Buildings",
    "Departmental Facilities",
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
              <Landmark className="h-4 w-4" />
              Government Partners
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Departments &{" "}
              <span className="text-gradient-gold">Clients</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Government departments with which RAJDEV SUSHILA INFRASTRUCTURE 
              PRIVATE LIMITED has executed or is qualified to execute construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* Departments List */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="container relative">
          <SectionTitle 
            title="Government Departments" 
            subtitle="Our work is aligned with the infrastructure development initiatives of Bihar state government departments"
          />
          
          <div className="max-w-5xl mx-auto space-y-6 stagger-fade-in">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="flex flex-col md:flex-row items-start gap-6 relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${dept.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-xl">
                      {dept.abbreviation}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-serif text-2xl font-semibold text-foreground">
                        {dept.name}
                      </h3>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                        Registered
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container relative">
          <SectionTitle 
            title="Project Categories" 
            subtitle="Types of infrastructure projects executed under government contracts"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto stagger-fade-in">
            {projectCategories.map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 card-hover group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-saffron-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Relationship */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-elevated">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 blur-3xl" />
              
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-saffron-light rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-glow-accent float">
                  <Building2 className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Working with Government Departments
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  RAJDEV SUSHILA INFRASTRUCTURE PRIVATE LIMITED works in close 
                  coordination with government departments, adhering to tender requirements, 
                  project specifications, and quality standards mandated by the contracting 
                  authority. All projects are executed as per the terms and conditions of 
                  the awarded contracts.
                </p>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated">
                  <Link to="/contact">
                    Contact for Enquiries
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Departments;