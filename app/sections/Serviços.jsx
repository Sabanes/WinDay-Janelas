import { HoverEffect } from "../components/ui/HoverCard";


export function Servicos() {
  return (
    (<div className="md:w-[90dvw] mx-auto px-3 pt-40">
      <h3 className="text-6xl md:text-8xl text-right">Os Nossos <span className=" text-[#344CB7]">Serviços</span></h3>
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
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/dm247tkcpqi8k2ckm9oc"
  },
  {
    title: "Instalação",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/yfjoln5hdpxmfb9vgtqx"
  },
  {
    title: "Manutenção",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://gogle.com",
    image: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/p3rimef7b1rjulwdjgap"
  },
];
