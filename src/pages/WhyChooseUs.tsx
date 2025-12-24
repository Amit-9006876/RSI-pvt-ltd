import { Award, Calendar, CheckCircle, FileCheck, Shield, Users, Wrench, ArrowRight, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const WhyChooseUs = () => {
  const strengths = [
    {
      icon: Award,
      title: "Experience in Government Projects",
      description: "Demonstrated capability in executing public infrastructure projects with government departments. Our team understands the requirements, processes, and standards expected in government construction contracts.",
      color: "from-amber-500 to-amber-700",
    },
    {
      icon: FileCheck,
      title: "Compliance with Departmental Norms",
      description: "Strict adherence to all applicable government regulations, tender conditions, and departmental specifications. We maintain proper documentation and follow prescribed procedures at every stage of project execution.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Users,
      title: "Skilled Technical Workforce",
      description: "Deployment of qualified civil engineers, experienced supervisors, and trained construction workers. Our team is equipped to handle complex infrastructure projects with technical competence.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Shield,
      title: "Quality-Focused Execution",
      description: "Commitment to quality construction using approved materials and methods. Regular quality checks and adherence to specifications ensure that delivered work meets the required standards.",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Calendar,
      title: "Timely Project Completion",
      description: "Emphasis on meeting project timelines and milestone deliverables as per contract terms. Efficient project management ensures that works are completed within the stipulated time frame.",
      color: "from-red-500 to-red-700",
    },
    {
      icon: Wrench,
      title: "Transparent Operations",
      description: "Maintaining transparency in all dealings with contracting authorities. Regular reporting, proper billing procedures, and clear communication throughout the project lifecycle.",
      color: "from-cyan-500 to-cyan-700",
    },
  ];

  const qualityPoints = [
    "Use of approved materials as per specifications",
    "Regular quality testing and inspections",
    "Adherence to structural design requirements",
    "Proper construction methodology",
    "Safety protocols at work sites",
    "Environmental compliance measures",
  ];

  const principles = [
    "Execute projects as per approved specifications",
    "Maintain proper documentation and records",
    "Ensure worker safety at all sites",
    "Follow environmental guidelines",
    "Complete works within stipulated timeline",
    "Maintain transparency in operations",
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
              <Award className="h-4 w-4" />
              Our Strengths
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Why{" "}
              <span className="text-gradient-gold">Choose Us</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Our commitment to quality, compliance, and timely delivery makes us 
              a reliable partner for government infrastructure development.
            </p>
          </div>
        </div>
      </section>

      {/* Strengths Grid */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="container relative">
          <SectionTitle 
            title="Our Strengths" 
            subtitle="Key attributes that define our approach to government construction projects"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-fade-in">
            {strengths.map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-7 w-7 text-white" />
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

      {/* Quality Commitment */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle 
                title="Quality Commitment" 
                subtitle="Ensuring construction excellence in every project"
                centered={false}
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Quality is fundamental to our work. We implement rigorous quality 
                control measures throughout the construction process to ensure that 
                the delivered infrastructure meets all specifications and standards 
                required by the contracting department.
              </p>
              <ul className="space-y-4">
                {qualityPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent transition-colors group">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-saffron-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-10 shadow-elevated relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-saffron-light to-accent" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-navy-light rounded-xl flex items-center justify-center">
                  <Target className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Our Working Principles
                </h3>
              </div>
              
              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-secondary rounded-xl group hover:bg-accent/10 transition-colors"
                  >
                    <span className="w-10 h-10 bg-gradient-to-br from-accent to-saffron-light text-primary rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium text-foreground">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-24 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-saffron-light rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-glow-accent float">
              <Zap className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Building Public Infrastructure with{" "}
              <span className="text-gradient-gold">Accountability</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              RAJDEV SUSHILA INFRASTRUCTURE PRIVATE LIMITED is committed to delivering 
              quality infrastructure for the public good. Our focus on compliance, 
              quality, and timely execution ensures that every project contributes 
              positively to Bihar's development.
            </p>
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 font-semibold shadow-glow-accent text-lg px-10 py-6">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyChooseUs;