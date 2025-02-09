"use client";

import { useEffect } from 'react';

const TallyEmbedSection = () => {
  useEffect(() => {
    const scriptUrl = "https://tally.so/widgets/embed.js";
    const scriptExists = document.querySelector(`script[src="${scriptUrl}"]`);

    if (!scriptExists) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.onload = () => {
        if (typeof Tally !== "undefined") {
          Tally.loadEmbeds();
        }
      };
      script.onerror = () => {
        console.error("Failed to load Tally script.");
      };
      document.body.appendChild(script);
    } else {
      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
      }
    }
  }, []);

  return (
    <section id='Contacto' className="mx-auto w-[100vw] bg-[var(--main)] py-10">
      <div className="w-full max-w-7xl mx-auto px-3">
      <iframe data-tally-src="https://tally.so/embed/w5eP5Q?alignLeft=1&hideTitle=0&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="461" frameBorder="0" marginHeight="0" marginWidth="0" title="Fale Conosco"></iframe>
      </div>
    </section>
  );
};

export default TallyEmbedSection;

