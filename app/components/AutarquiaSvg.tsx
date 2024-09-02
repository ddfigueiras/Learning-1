import Image from 'next/image';
import autarquiaImg from "../public/images/autarquia.svg";
const AutarquiaSvg = () => 
    {
    return (
        <div className="autarquia-container">
            <Image
            src={autarquiaImg}
            alt="Autarquia"
            layout="responsive"
            width={200}
            height={200}
        />
        </div>
    );
};

export default AutarquiaSvg;