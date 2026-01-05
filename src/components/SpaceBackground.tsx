import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

const SpaceBackground = () => {
  const { scrollYProgress } = useScroll();

  // Generate random stars with parallax layers
  const starLayers = useMemo(() => ({
    slow: Array.from({ length: 40 }, (_, i) => ({
      id: `slow-${i}`,
      size: Math.random() * 1.5 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    })),
    medium: Array.from({ length: 35 }, (_, i) => ({
      id: `medium-${i}`,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    })),
    fast: Array.from({ length: 25 }, (_, i) => ({
      id: `fast-${i}`,
      size: Math.random() * 3 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 2,
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

  // Parallax transforms
  const slowY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const mediumY = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const fastY = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

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
            animate={{
              opacity: [0.2, 0.5, 0.2],
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
            animate={{
              opacity: [0.3, 0.8, 0.3],
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
