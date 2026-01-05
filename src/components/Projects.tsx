import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { ExternalLink, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Parallax scroll setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const projects = [
    {
      title: "Zignus Group",
      description:
        "Corporate website for Zignus Group showcasing their business solutions and services with a professional, modern design.",
      tags: ["WordPress", "HTML/CSS", "JavaScript", "Responsive Design"],
      icon: ExternalLink,
      link: "https://zignusgroup.com/",
    },
    {
      title: "SignifyQ",
      description:
        "Business website for SignifyQ featuring clean design and intuitive navigation for their service offerings.",
      tags: ["WordPress", "HTML/CSS", "SEO"],
      icon: ExternalLink,
      link: "https://signifyq.com/",
    },
    {
      title: "Kriya Boutique",
      description:
        "E-commerce fashion boutique website with elegant design and smooth shopping experience for customers.",
      tags: ["WordPress", "WooCommerce", "Payment Integration", "Responsive Design"],
      icon: ShoppingCart,
      link: "https://kriyaboutique.in/",
    },
    {
      title: "Trendsetter Tuni",
      description:
        "Fashion retail website with modern aesthetics and user-friendly product browsing capabilities.",
      tags: ["WordPress", "HTML/CSS", "JavaScript"],
      icon: ExternalLink,
      link: "http://trendsettertuni.com/",
    },
    {
      title: "Sivapal Fashions",
      description:
        "Online fashion store with comprehensive product catalog and seamless shopping experience.",
      tags: ["WordPress", "WooCommerce", "Responsive Design"],
      icon: ShoppingCart,
      link: "https://sivapalfashions.com/",
    },
    {
      title: "Aayuvera",
      description:
        "Wellness and ayurvedic products website with clean design focused on health and natural solutions.",
      tags: ["WordPress", "E-commerce", "SEO"],
      icon: ExternalLink,
      link: "https://aayuvera.com/",
    },
    {
      title: "Jewel Jingles",
      description:
        "Jewelry e-commerce website featuring elegant design and smooth product browsing for customers.",
      tags: ["WordPress", "WooCommerce", "Payment Integration", "Responsive Design"],
      icon: ShoppingCart,
      link: "https://jeweljingles.com/",
    },
    {
      title: "Conscious Life",
      description:
        "Wellness and lifestyle website promoting mindful living with clean, calming design aesthetics.",
      tags: ["WordPress", "HTML/CSS", "Responsive Design"],
      icon: ExternalLink,
      link: "https://vetriveanthan.com/",
    },
    {
      title: "Rise with Nandhini",
      description:
        "Personal branding website featuring coaching and mentorship services with inspiring design.",
      tags: ["WordPress", "HTML/CSS", "SEO"],
      icon: ExternalLink,
      link: "https://risewithnandhini.com",
    },
    {
      title: "The Silent Pillar",
      description:
        "Professional services website with elegant design showcasing expertise and client testimonials.",
      tags: ["WordPress", "Responsive Design", "SEO"],
      icon: ExternalLink,
      link: "https://www.thesilentpillar.com",
    },
    {
      title: "Evosun",
      description:
        "Corporate business website with modern design highlighting innovative solutions and services.",
      tags: ["WordPress", "HTML/CSS", "JavaScript"],
      icon: ExternalLink,
      link: "https://evoosun.com",
    },
    {
      title: "Micro Vision",
      description:
        "Gulf-based company website featuring professional design and comprehensive service information.",
      tags: ["WordPress", "Responsive Design", "SEO"],
      icon: ExternalLink,
      link: "http://microvisiongulf.com",
    },
  ];

  // Generate random stars with parallax layers (memoized to prevent regeneration)
  const starLayers = useMemo(() => ({
    // Slow layer (distant stars)
    slow: Array.from({ length: 20 }, (_, i) => ({
      id: `slow-${i}`,
      size: Math.random() * 1.5 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    })),
    // Medium layer
    medium: Array.from({ length: 20 }, (_, i) => ({
      id: `medium-${i}`,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    })),
    // Fast layer (close stars)
    fast: Array.from({ length: 15 }, (_, i) => ({
      id: `fast-${i}`,
      size: Math.random() * 3 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 2,
    })),
  }), []);

  // Generate shooting stars
  const shootingStars = useMemo(() => 
    Array.from({ length: 5 }, (_, i) => ({
      id: `shooting-${i}`,
      startX: Math.random() * 50,
      startY: Math.random() * 40,
      angle: Math.random() * 20 + 20, // 20-40 degrees
      length: Math.random() * 80 + 60, // 60-140px trail
      duration: Math.random() * 1 + 0.8, // 0.8-1.8s
      delay: i * 4 + Math.random() * 3, // Staggered with randomness
    })),
  []);

  // Parallax transforms for different layers
  const slowY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const mediumY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const fastY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Space background with parallax stars */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
        
        {/* Slow parallax layer (distant stars) */}
        <motion.div className="absolute inset-0" style={{ y: slowY }}>
          {starLayers.slow.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white/60"
              style={{
                width: star.size,
                height: star.size,
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Medium parallax layer */}
        <motion.div className="absolute inset-0" style={{ y: mediumY }}>
          {starLayers.medium.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white/80"
              style={{
                width: star.size,
                height: star.size,
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
              animate={{
                opacity: [0.3, 0.9, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Fast parallax layer (close stars) */}
        <motion.div className="absolute inset-0" style={{ y: fastY }}>
          {starLayers.fast.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                width: star.size,
                height: star.size,
                left: `${star.x}%`,
                top: `${star.y}%`,
                boxShadow: "0 0 6px 2px rgba(255,255,255,0.3)",
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Larger glowing orbs with parallax */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          style={{ left: "10%", top: "20%", y: orbY1 }}
          animate={{
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl"
          style={{ right: "15%", top: "40%", y: orbY2 }}
          animate={{
            x: [0, -15, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-purple-500/10 blur-2xl"
          style={{ left: "50%", bottom: "20%", y: orbY3 }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Shooting stars */}
        {shootingStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              width: star.length,
              height: 2,
              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.8), white)`,
              borderRadius: 1,
              transform: `rotate(${star.angle}deg)`,
              boxShadow: "0 0 6px 2px rgba(255,255,255,0.4)",
            }}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [0, 200, 400],
              y: [0, 100, 200],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              repeatDelay: 8 + Math.random() * 6,
              ease: "easeIn",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-primary font-semibold text-sm tracking-wider uppercase"
            >
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-foreground mt-2"
            >
              Recent Projects
            </motion.h2>
          </div>

          {/* Projects */}
          <div className="grid gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="group block"
              >
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-medium hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-secondary hover:bg-secondary/80 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              With over 1 year of professional experience in web design and development, I've successfully delivered multiple projects across various industries.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
