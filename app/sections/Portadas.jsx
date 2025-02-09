import Image from "next/image"

export default function PortadasSection() {
  return (
    <section className="bg-[#fbfbfb] max-w-7xl mx-auto py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-regular text-[#344CB7] mb-8 text-center">Portadas</h2>
        <div className="flex flex-col md:pt-20 lg:flex-row items-center gap-8 ">
          <div className="lg:w-1/2">
            <Image
              src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/hcrba1uihocmlhqm4suc"
              alt="Portadas exteriores"
              width={600}
              height={400}
              loading="lazy"
              className="rounded-lg w-[90dvw] shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <p className="text-gray-600 leading-relaxed">
            Uma forma de garantir privacidade e controlar a luminosidade numa casa é instalar portadas exteriores para portas e janelas. Na BoaVista, fabricamos essas portadas em diversos materiais, formatos, cores e acabamentos. Todos os nossos produtos são feitos com materiais de alta qualidade e passam por rigorosos testes de durabilidade.
            </p>
            <p className="text-gray-600 leading-relaxed">
            As portadas são projetadas para garantir robustez, facilidade de manuseio e limpeza, segurança e um design adaptável a diferentes estilos arquitetônicos. Oferecemos vários modelos, e a escolha depende do espaço disponível e das preferências do cliente. Conte conosco para o aconselhamento técnico adequado.

            </p>
            <div className="mt-6">
              <a
                href="https://tally.so/r/w5eP5Q"
                className="inline-block bg-[#344CB7] text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Peça já Orçamento Grátis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

