import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

const SpaceBackground = () => {
  const { scrollYProgress } = useScroll();

  // Generate random stars with parallax layers and twinkling
  const starLayers = useMemo(() => ({
    slow: Array.from({ length: 40 }, (_, i) => ({
      id: `slow-${i}`,
      size: Math.random() * 1.5 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
      twinkle: Math.random() > 0.6,
      twinkleDuration: Math.random() * 1.5 + 0.5,
    })),
    medium: Array.from({ length: 35 }, (_, i) => ({
      id: `medium-${i}`,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      twinkle: Math.random() > 0.5,
      twinkleDuration: Math.random() * 1.2 + 0.3,
    })),
    fast: Array.from({ length: 25 }, (_, i) => ({
      id: `fast-${i}`,
      size: Math.random() * 3 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 2,
      twinkle: Math.random() > 0.4,
      twinkleDuration: Math.random() * 0.8 + 0.2,
    })),
  }), []);

  // Shooting stars
  const shootingStars = useMemo(() =>
    Array.from({ length: 6 }, (_, i) => ({
      id: `shooting-${i}`,
      startX: Math.random() * 60 + 10,
      startY: Math.random() * 30,
      angle: Math.random() * 25 + 20,
      length: Math.random() * 100 + 80,
      duration: Math.random() * 1.2 + 0.6,
      delay: i * 5 + Math.random() * 4,
    })),
  []);

  // Nebula clouds
  const nebulaClouds = useMemo(() => [
    {
      id: "nebula-1",
      x: 15,
      y: 20,
      width: 500,
      height: 300,
      colors: ["rgba(99, 102, 241, 0.08)", "rgba(139, 92, 246, 0.05)", "transparent"],
      rotation: 15,
      duration: 25,
    },
    {
      id: "nebula-2",
      x: 60,
      y: 45,
      width: 450,
      height: 350,
      colors: ["rgba(6, 182, 212, 0.06)", "rgba(34, 211, 238, 0.04)", "transparent"],
      rotation: -10,
      duration: 30,
    },
    {
      id: "nebula-3",
      x: 25,
      y: 70,
      width: 400,
      height: 280,
      colors: ["rgba(236, 72, 153, 0.05)", "rgba(168, 85, 247, 0.04)", "transparent"],
      rotation: 25,
      duration: 22,
    },
    {
      id: "nebula-4",
      x: 75,
      y: 15,
      width: 350,
      height: 250,
      colors: ["rgba(249, 115, 22, 0.05)", "rgba(251, 146, 60, 0.03)", "transparent"],
      rotation: -20,
      duration: 28,
    },
    {
      id: "nebula-5",
      x: 50,
      y: 85,
      width: 420,
      height: 300,
      colors: ["rgba(34, 197, 94, 0.04)", "rgba(6, 182, 212, 0.03)", "transparent"],
      rotation: 5,
      duration: 35,
    },
  ], []);

  // Distant galaxies
  const galaxies = useMemo(() => [
    {
      id: "galaxy-1",
      x: 12,
      y: 25,
      size: 120,
      rotation: 35,
      spiralArms: 3,
      color: "rgba(147, 112, 219, 0.4)",
      coreColor: "rgba(255, 255, 255, 0.6)",
      duration: 60,
    },
    {
      id: "galaxy-2",
      x: 78,
      y: 18,
      size: 80,
      rotation: -20,
      spiralArms: 2,
      color: "rgba(100, 149, 237, 0.35)",
      coreColor: "rgba(255, 230, 200, 0.5)",
      duration: 75,
    },
    {
      id: "galaxy-3",
      x: 45,
      y: 55,
      size: 100,
      rotation: 60,
      spiralArms: 4,
      color: "rgba(255, 182, 193, 0.3)",
      coreColor: "rgba(255, 255, 240, 0.5)",
      duration: 50,
    },
    {
      id: "galaxy-4",
      x: 88,
      y: 72,
      size: 65,
      rotation: 15,
      spiralArms: 2,
      color: "rgba(64, 224, 208, 0.25)",
      coreColor: "rgba(255, 255, 255, 0.4)",
      duration: 80,
    },
    {
      id: "galaxy-5",
      x: 8,
      y: 78,
      size: 90,
      rotation: -45,
      spiralArms: 3,
      color: "rgba(255, 215, 0, 0.2)",
      coreColor: "rgba(255, 250, 220, 0.5)",
      duration: 65,
    },
    {
      id: "galaxy-6",
      x: 55,
      y: 12,
      size: 55,
      rotation: 80,
      spiralArms: 2,
      color: "rgba(186, 85, 211, 0.3)",
      coreColor: "rgba(255, 255, 255, 0.45)",
      duration: 90,
    },
  ], []);

  // Parallax transforms
  const slowY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const mediumY = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const fastY = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const nebulaY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const galaxyY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-950 to-background" />

      {/* Slow parallax layer */}
      <motion.div className="absolute inset-0 h-[200vh]" style={{ y: slowY }}>
        {starLayers.slow.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white/50"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={star.twinkle ? {
              opacity: [0.1, 0.6, 0.1, 0.8, 0.2],
              scale: [1, 1.3, 1, 1.2, 1],
            } : {
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: star.twinkle ? star.twinkleDuration : star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Medium parallax layer */}
      <motion.div className="absolute inset-0 h-[250vh]" style={{ y: mediumY }}>
        {starLayers.medium.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white/70"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={star.twinkle ? {
              opacity: [0.2, 1, 0.3, 0.9, 0.2],
              scale: [1, 1.4, 1.1, 1.3, 1],
            } : {
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.twinkle ? star.twinkleDuration : star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Fast parallax layer */}
      <motion.div className="absolute inset-0 h-[300vh]" style={{ y: fastY }}>
        {starLayers.fast.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
              boxShadow: star.twinkle 
                ? "0 0 8px 3px rgba(255,255,255,0.5)" 
                : "0 0 6px 2px rgba(255,255,255,0.3)",
            }}
            animate={star.twinkle ? {
              opacity: [0.3, 1, 0.4, 1, 0.3],
              scale: [1, 1.5, 1.1, 1.4, 1],
            } : {
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: star.twinkle ? star.twinkleDuration : star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        style={{ left: "5%", top: "10%", y: orbY1 }}
        animate={{
          x: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"
        style={{ right: "10%", top: "35%", y: orbY2 }}
        animate={{
          x: [0, -20, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-purple-500/10 blur-3xl"
        style={{ left: "40%", top: "60%", y: orbY3 }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Nebula clouds */}
      <motion.div className="absolute inset-0 h-[180vh]" style={{ y: nebulaY }}>
        {nebulaClouds.map((nebula) => (
          <motion.div
            key={nebula.id}
            className="absolute pointer-events-none"
            style={{
              left: `${nebula.x}%`,
              top: `${nebula.y}%`,
              width: nebula.width,
              height: nebula.height,
              background: `radial-gradient(ellipse at center, ${nebula.colors.join(", ")})`,
              transform: `translate(-50%, -50%) rotate(${nebula.rotation}deg)`,
              filter: "blur(40px)",
            }}
            animate={{
              opacity: [0.6, 1, 0.7, 0.9, 0.6],
              scale: [1, 1.1, 1.05, 1.08, 1],
              rotate: [nebula.rotation, nebula.rotation + 3, nebula.rotation - 2, nebula.rotation + 1, nebula.rotation],
            }}
            transition={{
              duration: nebula.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Distant galaxies */}
      <motion.div className="absolute inset-0 h-[160vh]" style={{ y: galaxyY }}>
        {galaxies.map((galaxy) => (
          <motion.div
            key={galaxy.id}
            className="absolute pointer-events-none"
            style={{
              left: `${galaxy.x}%`,
              top: `${galaxy.y}%`,
              width: galaxy.size,
              height: galaxy.size,
              transform: `translate(-50%, -50%)`,
            }}
            animate={{
              rotate: [galaxy.rotation, galaxy.rotation + 360],
            }}
            transition={{
              duration: galaxy.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Galaxy core */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: galaxy.size * 0.15,
                height: galaxy.size * 0.15,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: `radial-gradient(circle, ${galaxy.coreColor}, transparent)`,
                boxShadow: `0 0 ${galaxy.size * 0.2}px ${galaxy.size * 0.08}px ${galaxy.coreColor}`,
              }}
              animate={{
                opacity: [0.6, 1, 0.7, 0.9, 0.6],
                scale: [1, 1.2, 1.1, 1.15, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Spiral arms */}
            {Array.from({ length: galaxy.spiralArms }).map((_, armIndex) => (
              <div
                key={armIndex}
                className="absolute"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: `rotate(${(360 / galaxy.spiralArms) * armIndex}deg)`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "50%",
                    height: "30%",
                    left: "50%",
                    top: "35%",
                    background: `linear-gradient(90deg, ${galaxy.color}, transparent)`,
                    borderRadius: "50% 100% 100% 50%",
                    filter: `blur(${galaxy.size * 0.05}px)`,
                    opacity: 0.8,
                    transform: "rotate(25deg)",
                  }}
                />
              </div>
            ))}
            {/* Outer glow */}
            <div
              className="absolute rounded-full"
              style={{
                width: "100%",
                height: "100%",
                background: `radial-gradient(ellipse at center, ${galaxy.color.replace(")", ", 0.15)")}, transparent 70%)`,
                filter: `blur(${galaxy.size * 0.1}px)`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute pointer-events-none"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            width: star.length,
            height: 2,
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.7), white)`,
            borderRadius: 1,
            transform: `rotate(${star.angle}deg)`,
            boxShadow: "0 0 8px 2px rgba(255,255,255,0.4)",
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, 250, 500],
            y: [0, 125, 250],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 10 + Math.random() * 8,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
};

export default SpaceBackground;
