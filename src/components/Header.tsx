import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Building2, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Departments", path: "/departments" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Leadership", path: "/leadership" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-elevated" : ""}`}>
      {/* Top Bar */}
      <div className="gradient-navy py-2.5 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="container relative flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                <Building2 className="h-3.5 w-3.5 text-accent" />
              </div>
              <span className="hidden sm:inline font-medium">CIN: U41001BR2025PTC078380</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="h-3.5 w-3.5" />
              <span className="text-xs">Patna, Bihar</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="mailto:Rajdevsushilainfrastructure@gmail.com" 
              className="hidden sm:flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="text-xs">Rajdevsushilainfrastructure@gmail.com</span>
            </a>
            <a 
              href="tel:+916204846740" 
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors font-medium"
            >
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center pulse-glow">
                <Phone className="h-3.5 w-3.5 text-accent" />
              </div>
              <span>+91 62048 46740</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-primary border-b-4 border-accent transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 bg-gradient-to-br from-accent to-saffron-light rounded-lg flex items-center justify-center shadow-glow-accent group-hover:scale-105 transition-transform duration-300">
                <Building2 className="h-8 w-8 text-primary" />
                <div className="absolute -inset-1 bg-accent/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-primary-foreground">
                <h1 className="text-xl md:text-2xl font-bold leading-tight tracking-tight">
                  RAJDEV SUSHILA
                </h1>
                <p className="text-xs md:text-sm font-medium text-accent tracking-widest">
                  INFRASTRUCTURE PVT. LTD.
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg overflow-hidden group ${
                    isActive(link.path)
                      ? "bg-accent text-primary shadow-glow-accent"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                >
                  {!isActive(link.path) && (
                    <span className="absolute inset-0 bg-primary-foreground/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-lg" />
                  )}
                  <span className="relative">{link.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
            <nav className="py-4 border-t border-primary-foreground/20 mt-4">
              <div className="flex flex-col gap-2 stagger-fade-in">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                      isActive(link.path)
                        ? "bg-accent text-primary shadow-glow-accent"
                        : "text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent hover:pl-6"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;