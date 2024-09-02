"use client";
import { usePathname } from 'next/navigation';
import SocialButtons from './SocialButtons';
import SearchButton from "./SearchButton";
import HorizontalLineWithBackground from "./HorizontalLineWithBackground";
import Link from "next/link";

const buttons = [
  { name: "Munícipio", path: "/municipio" },
  { name: "Autarquia360", path: "/autarquia360" },
  { name: "Atividade Municipal", path: "/atividademunicipal" },
  { name: "Serviços Online", path: "/servicosonline" },
  { name: "Contactos", path: "/contactos" }
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  
  return (
    <nav className="nav">
      <SearchButton />
      <HorizontalLineWithBackground />
      <SocialButtons />
    </nav>
  );
};

export default Nav;