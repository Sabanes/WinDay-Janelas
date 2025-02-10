"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  const containerRef = useRef(null);
  const animatedRef = useRef(false);
  const wordsArray = words.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animate("span", {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
          }, {
            duration: duration ? duration : 1,
            delay: stagger(0.1),
          });
          animatedRef.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [scope, animate, duration, filter]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="text-black opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)} ref={containerRef}>
      <div className="mt-4">
        <div className="text-[#2b2b2b] font-normal text-3xl md:text-6xl md:pl-0 pl-3 max-w-7xl mx-auto leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;