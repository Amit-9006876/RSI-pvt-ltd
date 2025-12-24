import { Building2, Calendar, FileText, MapPin, Shield, Users, Award, CheckCircle, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const About = () => {
  const companyDetails = [
    { label: "Company Name", value: "RAJDEV SUSHILA INFRASTRUCTURE PRIVATE LIMITED", icon: Building2 },
    { label: "CIN", value: "U41001BR2025PTC078380", icon: FileText },
    { label: "Company Type", value: "Private Limited (Non-Government)", icon: Landmark },
    { label: "Incorporated On", value: "26 August 2025", icon: Calendar },
    { label: "Registered With", value: "Registrar of Companies, Patna", icon: MapPin },
  ];

  const commitments = [
    {
      icon: Shield,
      title: "Safety Standards",
      description: "Strict adherence to occupational safety guidelines and site management protocols as per departmental requirements.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: FileText,
      title: "Quality Assurance",
      description: "Compliance with government specifications, quality control measures, and material testing standards.",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Users,
      title: "Workforce Excellence",
      description: "Deployment of skilled civil engineers, supervisors, and trained construction personnel.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Calendar,
      title: "Timely Execution",
      description: "Commitment to project timelines and milestone-based delivery as per contract terms.",
      color: "from-orange-500 to-orange-700",
    },
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
              <Building2 className="h-4 w-4" />
              Government Contractor
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              About{" "}
              <span className="text-gradient-gold">Company</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              RAJDEV SUSHILA INFRASTRUCTURE PRIVATE LIMITED is a government contractor 
              specializing in public infrastructure development in Bihar.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle title="Company Background" centered={false} />
              <div className="prose prose-slate max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  RAJDEV SUSHILA INFRASTRUCTURE PRIVATE LIMITED is a duly registered 
                  private limited company incorporated under the Companies Act. The company 
                  operates as a Government Contractor, exclusively undertaking civil and 
                  infrastructure construction projects on a tender and contract basis for 
                  government departments.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our operations are focused on public sector infrastructure development, 
                  including government buildings, public housing, roads, bridges, and 
                  water resources projects. We work in close coordination with state 
                  government departments to deliver quality infrastructure that serves 
                  the public interest.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The company maintains strict compliance with all governmental regulations, 
                  tender requirements, and quality specifications mandated by the contracting 
                  departments.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-elevated relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center gap-4 mb-8 relative">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-saffron-light rounded-xl flex items-center justify-center shadow-glow-accent">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold">Incorporation Details</h3>
              </div>
              
              <dl className="space-y-5 relative">
                {companyDetails.map((detail, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0 last:pb-0 group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                        <detail.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground mb-1">{detail.label}</dt>
                        <dd className="font-semibold text-foreground">{detail.value}</dd>
                      </div>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Nature of Business */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container relative">
          <SectionTitle 
            title="Nature of Business" 
            subtitle="Government Contractor for public infrastructure projects"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-10 shadow-elevated relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-saffron-light to-accent" />
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RAJDEV SUSHILA INFRASTRUCTURE PRIVATE LIMITED operates exclusively as a 
                Government Contractor, executing ONLY government projects. The company 
                undertakes civil and infrastructure construction work on a tender and 
                contract basis for various government departments.
              </p>
              
              <div className="bg-gradient-to-r from-accent/10 to-saffron-light/10 border border-accent/20 rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Important Notice</p>
                  <p className="text-sm text-muted-foreground">
                    The company does not undertake any private or individual residential projects. 
                    All work is executed through government tender and contract processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionTitle 
            title="Board of Directors" 
            subtitle="Leadership of Rajdev Sushila Infrastructure Private Limited"
          />
          
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto stagger-fade-in">
            {[
              { name: "Sarita Devi", role: "Director" },
              { name: "Gajendra Kumar Singh", role: "Director" },
            ].map((director, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 text-center card-hover group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                    <Users className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {director.name}
                  </h3>
                  <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                    {director.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated">
              <Link to="/leadership">
                View Leadership Details
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container relative">
          <SectionTitle 
            title="Our Commitments" 
            subtitle="Upholding standards in government infrastructure construction"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-fade-in">
            {commitments.map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border p-8 rounded-2xl card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
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

      {/* Registered Address */}
      <section className="py-20 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-saffron-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-accent float">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-primary-foreground mb-2">
              Registered Office Address
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              C/o Sarita Devi, Masnadpur, Near Shiv Mandir,<br />
              Shahjahanpur, Patna, Bihar – 801305, India
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;