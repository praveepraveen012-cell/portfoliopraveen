import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, TrendingUp, Award } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description: "HTML, CSS, JavaScript & WordPress",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Photoshop & Illustrator",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "SEO, Google Ads & Meta Ads",
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "WordPress & UI/UX Certified",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">

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
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4"
            >
              Crafting Digital Experiences
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              A passionate web developer, UI/UX designer, and digital marketer with a strong foundation in creating seamless user experiences across diverse platforms.
            </motion.p>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bio section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a web developer and designer with over 1 year of experience, I bring enthusiasm and a fresh perspective to every project. My experience includes building responsive, high-quality websites using modern technologies including HTML, CSS, and JavaScript.
                </p>
                <p>
                  I've completed my Bachelor of Commerce from RVS College of Arts and Science, and I'm certified in web development and UI/UX Design from Grexotix. I've successfully delivered multiple projects across various industries, creating intuitive user experiences and implementing seamless payment integrations.
                </p>
                <p>
                  Beyond development, I'm skilled in graphic design using Adobe Photoshop, Illustrator, and Figma, as well as digital marketing including SEO, Google Ads, Meta Ads, and LinkedIn advertising. I'm always eager to learn new technologies and deliver efficient solutions in collaborative environments.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
