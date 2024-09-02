import './styles/globals.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/nav.css';
import './styles/embla.css';
import AutarquiaSvg from "./components/AutarquiaSvg";
import Nav from "./components/Nav"
import MainButtons from "./components/MainButtons";
import Footer from './components/Footer';
import EmblaCarousel from './components/EmblaCarousel';
import DocumentosInstitucionais from './components/DocumentosInstitucionais';
import LinksUteis from './components/LinksUteis';
import Localizacao from './components/Localizacao';
export default function Home() 
{
    return (
    <div className="body">
        
        <MainButtons />
        <AutarquiaSvg />
        <Nav />
        <EmblaCarousel/>
        <DocumentosInstitucionais/>
        <LinksUteis />
        <Localizacao />
        
        <Footer />
        {/* 
        Outros
         conteúdos da página */}
    </div>
    );
};
// Remove-Item -Recurse -Force node_modules, package-lock.json
// npm install