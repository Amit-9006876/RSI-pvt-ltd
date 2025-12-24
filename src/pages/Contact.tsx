import { useState } from "react";
import { Building2, Mail, MapPin, Phone, Send, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import SectionTitle from "@/components/SectionTitle";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  organization: z.string().trim().max(150, "Organization name must be less than 150 characters").optional(),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone number must be less than 20 characters").optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Enquiry Submitted",
        description: "Thank you for your enquiry. We will respond within 2-3 business days.",
      });
      
      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again later or contact us directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Registered Office",
      content: "C/o Sarita Devi, Masnadpur, Near Shiv Mandir, Shahjahanpur, Patna, Bihar – 801305, India",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 62048 46740",
      href: "tel:+916204846740",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Mail,
      title: "Email",
      content: "Rajdevsushilainfrastructure@gmail.com",
      href: "mailto:Rajdevsushilainfrastructure@gmail.com",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Building2,
      title: "CIN",
      content: "U41001BR2025PTC078380",
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
              <Mail className="h-4 w-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              Contact{" "}
              <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              For official enquiries, tender-related communications, or project discussions, 
              please reach out through the contact details provided below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="container relative">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-accent rounded-full" />
                Contact Information
              </h2>
              
              <div className="space-y-5 stagger-fade-in">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-5 card-hover group">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-accent transition-colors break-all"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="mt-8 bg-gradient-to-br from-secondary to-background border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday – Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-accent">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-elevated relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-saffron-light to-accent" />
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-saffron-light rounded-xl flex items-center justify-center shadow-glow-accent">
                    <FileText className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Submit an Enquiry
                    </h2>
                    <p className="text-sm text-muted-foreground">Fill out the form below</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="h-12 bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-foreground font-medium">Organization / Department</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Your organization"
                        className="h-12 bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="h-12 bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="h-12 bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-medium">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject of your enquiry"
                      required
                      className="h-12 bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your enquiry in detail..."
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto bg-gradient-to-r from-accent to-saffron-light text-primary hover:opacity-90 font-semibold h-12 px-8 shadow-glow-accent"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>

                <p className="mt-6 text-xs text-muted-foreground">
                  * Required fields. Your information will be used only for responding 
                  to your enquiry and will not be shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container relative">
          <SectionTitle 
            title="Office Location" 
            subtitle="Shahjahanpur, Patna, Bihar"
          />
          
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-border shadow-elevated">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14395.15372091727!2d85.0876!3d25.6127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57e6d4c5b8d9%3A0x6d5b5b6b5b5b5b5b!2sShahjahanpur%2C%20Patna%2C%20Bihar%20801305!5e0!3m2!1sen!2sin!4v1703340000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;