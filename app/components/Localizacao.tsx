// components/Localizacao.js
import React from 'react';
import Image from 'next/image';
import Mapa from "../public/images/Mapa.png";

const Localizacao = () => {
  return (
    <div className="lc-container">
      <div className="lc-mapContainer">
        {/* dps integrar com o mapa !!! LEMBRAR !!! */}
        <Image
            src={Mapa}
            alt="Morada"
            layout="responsive"
            width={200}
            height={200}
        />
      </div>
      <div className="lc-contactContainer">
        <h3>Contactos</h3>
        <p>Morada lorem ipsum dolor sit<br/>lorem ipsum dolor sit</p>
        <p>+000 000 000 000</p>
        <p>+000 000 000 000</p>
        <p>+000 000 000 000</p>
        <p>exemple@email.com</p>
      </div>
    </div>
  );
};

export default Localizacao;
