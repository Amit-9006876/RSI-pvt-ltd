import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Crown, Award, Target, ArrowRight, Building2, CheckCircle2, Star, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import directorPhoto from "@/assets/director-photo.jpeg";

const Building3D = lazy(() => import("@/components/Building3D"));

const Leadership = () => {
  const achievements = [
    { icon: Building2, label: "Government Projects", value: "Multiple" },
    { icon: Award, label: "Departments Served", value: "5+" },
    { icon: Shield, label: "Quality Certified", value: "100%" },
    { icon: Star, label: "Client Satisfaction", value: "Excellent" },
  ];

  const leadershipQualities = [
    "Strategic Vision for Infrastructure Development",
    "Commitment to Quality & Compliance",
    "Strong Government Relations",
    "Experienced Project Management",
    "Focus on Timely Delivery",
    "Transparent Operations",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="overflow-hidden">
      {/* Page Header with 3D Model */}
      <section className="gradient-navy py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="badge-govt mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Crown className="h-4 w-4" />
                Company Leadership
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
                Visionary{" "}
                <span className="text-gradient-gold">Leadership</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Under the dynamic leadership of Shri Pritam Singh, 
                RAJDEV SUSHILA INFRASTRUCTURE PRIVATE LIMITED continues to 
                set benchmarks in government infrastructure development.
              </p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 font-semibold shadow-glow-accent">
                  <Link to="/contact">
                    Connect With Leadership
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="h-[400px] lg:h-[500px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                </div>
              }>
                <Building3D />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Owner Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        
        <div className="container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <SectionTitle 
              title="Meet Our Founder" 
              subtitle="The visionary behind RAJDEV SUSHILA INFRASTRUCTURE's success in government projects"
            />
            
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="bg-card border border-border rounded-3xl overflow-hidden shadow-elevated relative"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
                
                <div className="grid lg:grid-cols-5 relative">
                  {/* Photo Section */}
                  <div className="lg:col-span-2 relative">
                    <div className="aspect-[3/4] lg:aspect-auto lg:h-full relative overflow-hidden">
                      <motion.img
                        src={directorPhoto}
                        alt="Pritam Singh - Founder & Director, RAJDEV SUSHILA INFRASTRUCTURE PRIVATE LIMITED"
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.2 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent lg:bg-gradient-to-r" />
                      
                      {/* Floating Badge */}
                      <motion.div 
                        className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-3 bg-accent/90 backdrop-blur-sm text-primary px-5 py-3 rounded-xl shadow-glow-accent">
                          <Crown className="h-5 w-5" />
                          <span className="font-semibold">Founder & Director</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                    <motion.div variants={itemVariants}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-1 w-12 bg-accent rounded-full" />
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Leadership</span>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
                        Pritam Singh
                      </h2>
                      <p className="text-muted-foreground text-lg mb-8">
                        Founder & Director, RAJDEV SUSHILA INFRASTRUCTURE PRIVATE LIMITED
                      </p>
                      
                      <div className="border-t border-border pt-8 mb-8">
                        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                          With unwavering dedication to excellence, Shri Pritam Singh has established 
                          RAJDEV SUSHILA INFRASTRUCTURE as a trusted name in government infrastructure 
                          development. His vision encompasses quality execution, strict compliance with 
                          departmental norms, and a commitment to Bihar's public infrastructure growth.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          Under his leadership, the company has successfully executed multiple government 
                          projects across various departments including PWD, RWD, BCD, WRD, and RCD, 
                          consistently delivering projects with quality and integrity.
                        </p>
                      </div>
                      
                      {/* Achievement Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {achievements.map((item, index) => (
                          <motion.div
                            key={index}
                            className="text-center p-4 rounded-xl bg-secondary/50 border border-border/50"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--secondary))" }}
                          >
                            <item.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                            <div className="text-sm font-semibold text-foreground">{item.value}</div>
                            <div className="text-xs text-muted-foreground">{item.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Qualities */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <SectionTitle 
              title="Leadership Excellence" 
              subtitle="Core qualities that drive our success in government infrastructure"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {leadershipQualities.map((quality, index) => (
                <motion.div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 card-hover group relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative flex items-start gap-4">
                    <motion.div 
                      className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-accent to-saffron-light rounded-lg flex items-center justify-center shadow-glow-accent"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {quality}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Directors Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30" />
        
        <div className="container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <SectionTitle 
              title="Registered Directors" 
              subtitle="Official directors as registered with Registrar of Companies, Patna"
            />
            
            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                { name: "Sarita Devi", role: "Director" },
                { name: "Pritam Singh", role: "Director" },
              ].map((director, index) => (
                <motion.div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 text-center card-hover group relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                  
                  <motion.div 
                    className="relative w-24 h-24 bg-gradient-to-br from-primary to-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Users className="h-12 w-12 text-accent" />
                  </motion.div>
                  
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {director.name}
                  </h3>
                  <span className="inline-block px-5 py-2 bg-gradient-to-r from-accent to-saffron-light text-primary text-sm font-semibold rounded-full mb-4">
                    {director.role}
                  </span>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground">
                      RAJDEV SUSHILA INFRASTRUCTURE PRIVATE LIMITED
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <div className="container relative text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-accent to-saffron-light rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-glow-accent"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Target className="h-12 w-12 text-primary" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Our{" "}
              <span className="text-gradient-gold">Vision</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-10">
              To be Bihar's most trusted partner in infrastructure development by delivering 
              quality government construction projects with integrity, compliance, and 
              unwavering commitment to public service.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 font-semibold shadow-glow-accent text-lg px-10 py-6">
                <Link to="/contact">
                  Connect With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Leadership;
