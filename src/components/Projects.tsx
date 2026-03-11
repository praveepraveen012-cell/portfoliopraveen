import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    {
      title: "Reclaim Her",
      description:
        "Empowering women's wellness platform with inspiring design focused on health, self-care, and personal transformation.",
      tags: ["WordPress", "Responsive Design", "SEO", "Wellness"],
      icon: ExternalLink,
      link: "https://reclaimher.in/",
    },
  ];

  const seoProjects = [
    {
      title: "Zignus",
      description:
        "Comprehensive SEO optimization including keyword research, on-page SEO, and technical improvements.",
      tags: ["On-Page SEO", "Keyword Research", "Technical SEO"],
      link: "https://zignusgroup.com/",
    },
    {
      title: "Reclaim Her",
      description:
        "SEO strategy focused on wellness and women's health keywords with content optimization.",
      tags: ["On-Page SEO", "Content Optimization", "Local SEO"],
      link: "https://reclaimher.in/",
    },
    {
      title: "Rise With Nandhini",
      description:
        "Personal branding SEO with focus on coaching and mentorship related search terms.",
      tags: ["On-Page SEO", "Personal Branding", "Keyword Research"],
      link: "https://risewithnandhini.com",
    },
    {
      title: "The Silent Pillar",
      description:
        "Professional services SEO optimization for improved search visibility and organic traffic.",
      tags: ["On-Page SEO", "Technical SEO", "Analytics"],
      link: "https://www.thesilentpillar.com",
    },
    {
      title: "The Radiant Path",
      description:
        "Wellness-focused SEO strategy with spiritual and holistic health keyword targeting.",
      tags: ["On-Page SEO", "Content Strategy", "Keyword Research"],
      link: "#",
    },
    {
      title: "The Conscious Life",
      description:
        "Mindful living and wellness SEO with focus on organic search growth and engagement.",
      tags: ["On-Page SEO", "Content Optimization", "Technical SEO"],
      link: "https://vetriveanthan.com/",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.1, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-primary font-semibold text-sm tracking-wider uppercase"
            >
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.15, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group block"
              >
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 hover:shadow-medium hover:border-primary/50 transition-all duration-300">
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
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 0.7, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              With over 1 year of professional experience in web design, development, and SEO, I've successfully delivered multiple projects across various industries.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
