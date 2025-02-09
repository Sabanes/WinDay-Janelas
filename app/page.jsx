import Conforto from "./sections/Conforto";
import Contactos from "./sections/Contactos";
import Footer from "./sections/Footer";
import { Hero } from "./sections/Hero";
import Products from "./sections/Products";
import { Servicos } from "./sections/Serviços";

import Sobre from "./sections/Sobre";
import Vantagens from "./sections/Vantagens";

export default function Home() {
  return (
          <div >
          <Hero />
          <Sobre />
          <Servicos />
          <Conforto />
          <Vantagens />
          <Products />
          <Contactos />
          <Footer />
          </div>
  );
}
