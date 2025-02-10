import NavBar from "./components/nav/navbar";
import Conforto from "./sections/Conforto";
import TallyEmbedSection from "./sections/ContactForm";
import EstoresSection from "./sections/Estores";
import TiposEstoresSection from "./sections/EstoresTipos";
import Footer from "./sections/Footer";
import { Hero } from "./sections/Hero";
import PortadasSection from "./sections/Portadas";
import Products from "./sections/Products";
import { Servicos } from "./sections/Serviços";

import Sobre from "./sections/Sobre";
import Vantagens from "./sections/Vantagens";
import PartnersSection from "./sections/partners";

export default function Home() {
  return (
          <div >
          <NavBar />
          <Hero />
          <PartnersSection />
          <Sobre />
          <Servicos />
          <Conforto />
          <Vantagens />
          <Products />
          <PortadasSection />
          <EstoresSection />
          <TiposEstoresSection />
          <TallyEmbedSection />
          
          <Footer />
          </div>
  );
}
