import Image from "next/image"

export default function EstoresSection() {
  return (
    <section className=" py-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-regular text-[#344CB7] mb-8 text-center">Estores</h2>
        <div className="flex flex-col md:py-20 lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <Image
            loading="lazy"
              src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/s04yxxpwqwnwwislanx7"
              alt="Estores"
              width={600}
              height={400}
              className="rounded-lg w-[90dvw] shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Somos fabricantes de estores com mais de 10 anos de experiência em instalação e manutenção. Combinamos a
              expertise de nossos técnicos com materiais de alta qualidade, oferecendo estores manuais e elétricos,
              tanto interiores quanto exteriores.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Os estores são essenciais em qualquer construção, proporcionando privacidade e segurança, além de
              escurecer os espaços e manter a temperatura agradável.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Explore nossa gama de estores econômicos, práticos e flexíveis. Oferecemos 5 anos de garantia e
              facilidades de pagamento.
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

