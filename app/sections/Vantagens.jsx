import React from 'react';
import { Shield, Lightbulb, Palette, Clock, Settings } from 'lucide-react';

const Vantagens = () => {
  const vantagens = [
    {
      icon: <Lightbulb className="w-10 h-8 text-[var(--main)]" />,
      title: "Eficiência energética",
      description: "As janelas com perfil Cortizo ajudam a manter o calor no inverno e o frescor no verão, reduzindo os custos de aquecimento e ar condicionado."
    },
    {
      icon: <Palette className="w-8 h-8 text-[var(--main)]" />,
      title: "Estilo e design",
      description: "Uma ampla variedade de cores e elementos decorativos permite escolher janelas que se integram perfeitamente em qualquer interior."
    },
    {
      icon: <Shield className="w-8 h-8 text-[var(--main)]" />,
      title: "Segurança",
      description: "O perfil Cortizo oferece um alto nível de proteção contra intrusões, tornando as nossas janelas uma escolha segura para a sua casa ou escritório."
    },
    {
      icon: <Clock className="w-8 h-8 text-[var(--main)]" />,
      title: "Durabilidade",
      description: "Graças ao uso de tecnologias e materiais modernos, as nossas janelas mantêm as suas propriedades durante décadas."
    },
    {
      icon: <Settings className="w-8 h-8 text-[var(--main)]" />,
      title: "Abordagem personalizada",
      description: "Oferecemos a fabricação de janelas em qualquer forma e tamanho, tendo em conta os seus desejos e as características do espaço."
    }
  ];

  return (
    <section id='Vantagens' className="py-12 md:w-[90dvw] mx-auto">
      <div className=" mx-auto max-w-7xl px-4">
        <h2 className="text-6xl md:text-8xl text-left max-w-7xl text-gray-900 mb-12">
        Nossas <span className=' text-[var(--main)]'>Vantagens</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-10">
          {vantagens.map((vantagem, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {vantagem.icon}
                <h3 className="text-2xl font-semibold text-gray-900 ml-3">
                  {vantagem.title}
                </h3>
              </div>
              <p className="text-gray-600 text-lg">
                {vantagem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vantagens;