import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import praveenPhoto from "@/assets/praveen-photo.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-left order-2 md:order-1"
              style={{ willChange: "transform, opacity" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                  Available for Projects
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary">
                  Praveen
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-xl md:text-2xl text-slate-300 mb-8"
              >
                Web Developer, UI/UX Designer & Digital Marketer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl"
              >
                Creating seamless user experiences with beautiful designs. Specializing in web development, UI/UX design, and digital marketing strategies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
                >
                  Let's Work Together
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="border-slate-600 text-white hover:bg-white/5 text-lg px-8 py-6"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Right content - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative order-1 md:order-2"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-orange-400/30 rounded-3xl blur-2xl" />
                
                {/* Image container */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src={praveenPhoto}
                    alt="Praveen - Web Developer, UI/UX Designer & Digital Marketer"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-darker/60 via-transparent to-transparent" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-2xl rotate-12 opacity-80" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400 rounded-2xl -rotate-12 opacity-80" />
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-slate-400"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
