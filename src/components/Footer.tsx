import { Link } from "react-router-dom";
import { Building2, MapPin, Phone, Mail, ArrowRight, FileText, Landmark } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      
      <div className="container py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-saffron-light rounded-xl flex items-center justify-center shadow-glow-accent">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">RAJDEV SUSHILA</h3>
                <p className="text-sm text-accent tracking-widest">INFRASTRUCTURE PVT. LTD.</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              Government Contractor executing public infrastructure development projects 
              in association with state departments across Bihar.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <FileText className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground/80">CIN: U41001BR2025PTC078380</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About Company", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Departments", path: "/departments" },
                { name: "Why Choose Us", path: "/why-choose-us" },
                { name: "Leadership", path: "/leadership" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-all duration-300"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Contact Information
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <span className="text-primary-foreground/70 leading-relaxed">
                  C/o Sarita Devi, Masnadpur, Near Shiv Mandir,
                  Shahjahanpur, Patna, Bihar – 801305
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <a href="tel:+916204846740" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  +91 62048 46740
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <a href="mailto:Rajdevsushilainfrastructure@gmail.com" className="text-primary-foreground/70 hover:text-accent transition-colors break-all">
                 Rajdevsushilainfrastructure@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Verification */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Verification Details
            </h4>
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/10">
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold">Registered Company</span>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="text-primary-foreground/70">
                  <span className="text-accent font-medium">CIN:</span><br />
                  <span className="text-xs">U41001BR2025PTC078380</span>
                </li>
                <li className="text-primary-foreground/70">
                  <span className="text-accent font-medium">Registered With:</span><br />
                  <span className="text-xs">RoC, Patna</span>
                </li>
                <li className="text-primary-foreground/70">
                  <span className="text-accent font-medium">Incorporated:</span><br />
                  <span className="text-xs">26 August 2025</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 relative">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-primary-foreground/60">
              © {currentYear} Rajdev Sushila Infrastructure Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="px-4 py-1.5 bg-accent/10 rounded-full text-accent text-xs font-semibold">
                Government Contractor
              </span>
              <span className="px-4 py-1.5 bg-primary-foreground/5 rounded-full text-primary-foreground/60 text-xs">
                Public Works Specialist
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;