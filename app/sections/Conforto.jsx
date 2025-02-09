'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Conforto = () => {
  const headingRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize blur filter
    gsap.set([headingRef.current, quoteRef.current], {
      filter: 'blur(8px)',
      opacity: 0,
      y: 20
    });

    // Animate heading
    gsap.to(headingRef.current, {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate quote with delay
    gsap.to(quoteRef.current, {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: quoteRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='md:h-[60rem] h-[50rem] px-2 w-[100dvw] flex flex-col justify-center items-center'>
      <h4 
        ref={headingRef} 
        className='text-4xl md:text-8xl text-center'
      >
        "O Seu <span className='text-[#344CB7]'>Conforto</span> É A Nossa Prioridade"
      </h4>
      <p 
        ref={quoteRef}
        className='text-sm text-neutral-500'
      >
        Fundador de Winday, Mykola Spaskiy
      </p>
    </div>
  );
};

export default Conforto;