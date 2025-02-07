import Conforto from "./sections/Conforto";
import { Hero } from "./sections/Hero";
import { Servicos } from "./sections/Serviços";

import Sobre from "./sections/Sobre";
import Vantagens from "./sections/Vantagens";

export default function Home() {
  return (
          <>
          <Hero />
          <Sobre />
          <Servicos />
          <Conforto />
          <Vantagens />

          </>
  );
}
