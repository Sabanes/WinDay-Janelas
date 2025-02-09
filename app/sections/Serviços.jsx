import { HoverEffect } from "../components/ui/HoverCard";


export function Servicos() {
  return (
    (<div id="Servicos" className="md:w-[90dvw] mx-auto max-w-7xl px-3 pt-40">
      <h3 className="text-6xl md:text-8xl max-w-7xl text-right">Os Nossos <span className=" text-[#344CB7]">Serviços</span></h3>
      <HoverEffect items={projects} />
    </div>)
  );
}



export const projects = [
  {
    title: "Medição e consultoria",
    description:
      "Realizamos medições precisas e consultoria especializada sem qualquer custo, ajudando-o a encontrar a melhor solução para o seu espaço.",
    link: "https://stripe.com",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/u0x72ut1l7tfbbcklqwq"
  },
  {
    title: "Fabricação de Janelas",
    description:
      "Oferecemos janelas sob medida com design personalizado, qualidade superior e eficiência energética, garantindo um ajuste perfeito para o seu espaço.",
    link: "https://netflix.com",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/dm247tkcpqi8k2ckm9oc"
  },
  {
    title: "Instalação",
    description:
      "Realizamos instalação profissional das suas janelas, com garantia de qualidade e precisão, assegurando um serviço seguro e duradouro.",
    link: "https://google.com",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/yfjoln5hdpxmfb9vgtqx"
  },
  {
    title: "Manutenção",
    description:
      "Oferecemos serviço de manutenção e reparação para garantir o bom funcionamento e a durabilidade das suas janelas, com atenção aos detalhes e eficiência.",
    link: "https://gogle.com",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/p3rimef7b1rjulwdjgap"
  },
];
