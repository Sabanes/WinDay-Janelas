"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    (<div
      ref={ref}
      className="h-[180rem] py-20 pt-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>)
  );
};

export const Header = () => {
  return (
    (
      <div id="Home" className="max-w-7xl md:min-h-[40rem] min-h-[30rem] relative mx-auto flex flex-col justify-center items-center px-4 z-30">
      <h1 className="text-4xl lg:text-[7rem] md:text-7xl text-center font-bold text-[#2b2b2b]">
        Janelas e Portas <br /> de <span className="text-[var(--main)]">Alta Qualidade</span>
      </h1>
      <p className="max-w-xl text-base md:text-xl mt-3 text-center text-neutral-900">
        As nossas janelas e portas em PVC e alumínio são duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção.
      </p>
      <Button href={"https://tally.so/r/w5eP5Q"} text={"Fale Connsco"} />
      <div className="flex mx-auto flex-col md:flex-row justify-center align-middle gap-10 md:gap-20 mt-10">
        <div className=" w-[350px] md:w-[400px] rounded-lg p-4 mx-auto flex justify-center">
          <img src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/flssjn9ry9wj0evwyenz" alt="Logo 1" className="mx-auto"   />
        </div>
        <div className="mx-auto w-[280px] md:w-[350px] rounded-lg p-4 flex justify-center">
          <img src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/iypvt1sujt0rnhbmqb7s" alt="Logo 2" className="mx-auto"   />
        </div>
        <div className="mx-auto w-[280px] md:w-[350px] rounded-lg p-4 flex justify-center">
          <img src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/xyxzrfb28zmimc60r1wp" alt="Logo 3" className="mx-auto"  />
        </div>
      </div>
    </div>)
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    (<motion.div
      style={{
        x: translate,
      }}
      
      key={product.title}
      className="group/product h-96 md:w-[35rem] w-[28rem] relative flex-shrink-0">
    
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover rounded-lg object-left-top absolute h-full w-full inset-0"
          alt={product.title} />
    


    </motion.div>)
  );
};
