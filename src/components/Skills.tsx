import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Paintbrush, LineChart } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code,
      title: "Web Development",
      color: "from-blue-500 to-cyan-500",
      skills: ["HTML5", "CSS3", "JavaScript", "WordPress", "Bootstrap", "Responsive Design"],
    },
    {
      icon: Paintbrush,
      title: "Design Tools",
      color: "from-primary to-orange-400",
      skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe XD", "UI/UX Design", "Prototyping"],
    },
    {
      icon: LineChart,
      title: "Digital Marketing",
      color: "from-green-500 to-emerald-500",
      skills: ["SEO", "Google Ads", "Meta Ads", "LinkedIn Ads", "Analytics", "Content Strategy"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
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
              Skills & Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-foreground mt-2"
            >
              What I Bring to the Table
            </motion.h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-3xl p-8 h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                  {/* Icon with gradient */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    {category.title}
                  </h3>

                  {/* Skills list */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.6 + index * 0.2 + skillIndex * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${category.color}`} />
                        <span className="text-muted-foreground">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
