"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
const Manifesto = () => {
  const manifestoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const manifestoText = new SplitType(".manifesto-title h1", {
      types: ["words", "chars"],
      tagName: "span",
      wordClass: "word",
      charClass: "char",
    });

    const style = document.createElement("style");
    style.textContent = `
       .word {
         display: inline-block;
         margin-right: 0em;
       }
       .char {
         display: inline-block;
       }
     `;
    document.head.appendChild(style);

    gsap.set(manifestoText.chars, { opacity: 0.25 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".manifesto",
        start: "top 25%",
        end: "bottom 75%",
        scrub: true,
        markers: false,
      },
    });

    manifestoText.chars.forEach((char, index) => {
      tl.to(
        char,
        {
          opacity: 1,
          duration: 0.1,
          ease: "none",
        },
        index * 0.1
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      manifestoText.revert();
      style.remove();
    };
  }, []);

  return (
    <section className="manifesto w-dvw max-w-7xl mx-auto" id="manifesto" ref={manifestoRef}>
      <div className="container w-full">
        <div className="manifesto-header opacity-0 ">

          <p>Manifesto</p>
        </div>
        <div className="manifesto-title !w-[90dvw]">
          <h1 className="pb-20">
          Somos especialistas na venda e instalação de janelas de metaloplástico com perfil <span className=" text-[#344CB7]">Cortizo</span>, oferecendo soluções que combinam inovação, estética e eficiência energética para <span className="text-[#344CB7]">casas</span> e <span className="text-[#344CB7]">negócios</span>.   
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;