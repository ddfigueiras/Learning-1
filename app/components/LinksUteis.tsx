// components/LinksUteis.js

import React from 'react';
import Image from 'next/image';
import autarquiaImg from "../public/images/autarquia.svg";
const LinksUteis = () => {
  const links = [
    {
      url: 'https://exemplo.com/link1',
      imageSrc: autarquiaImg,
      altText: 'Autarquia 1',
    },
    {
      url: 'https://exemplo.com/link2',
      imageSrc: autarquiaImg,
      altText: 'Autarquia 2',
    },
    {
      url: 'https://exemplo.com/link3',
      imageSrc: autarquiaImg,
      altText: 'Autarquia 3',
    },
    {
      url: 'https://exemplo.com/link4',
      imageSrc: autarquiaImg,
      altText: 'Autarquia 4',
    },
  ];

  return (
    <div className="lu-container">
      <h2>LINKS ÚTEIS</h2>
      <div className="lu-linksContainer">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <Image src={link.imageSrc} alt={link.altText} width={100} height={50} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksUteis;
