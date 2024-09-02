import { usePathname } from 'next/navigation';
import SocialButtons from './SocialButtons';
import Link from "next/link";

const buttons = [
  { name: "Munícipio", path: "/municipio" },
  { name: "Autarquia360", path: "/autarquia360" },
  { name: "Atividade Municipal", path: "/atividademunicipal" },
  { name: "Serviços Online", path: "/servicosonline" },
  { name: "Contactos", path: "/contactos" }
];

const MainButtons = () => {  
  return (
    <div className="links">
      {buttons.map((link, index) => (
        <Link href={link.path} key={index} className="tex-4xl font-semibold">
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default MainButtons;