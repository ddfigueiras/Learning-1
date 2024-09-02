// components/DocumentosInstitucionais.js
import React from 'react';
import Image from 'next/image';

import atas from "../public/images/atas.png"; 
import editaisImg from "../public/images/atas.png"; 
import formsImg from "../public/images/forms.png"; 
import docsImg from "../public/images/docs.png"; 
import insImg from "../public/images/ins.png"; 



const documentos = [
    { id: 1, title: 'ATAS', color: '#246970', file: '/files/atas.pdf', image: atas },
    { id: 2, title: 'EDITAIS', color: '#69A391', file: '/files/editais.pdf', image: editaisImg },
    { id: 3, title: 'FORMULÁRIOS', color: '#21878F', file: '/files/formularios.pdf', image: formsImg },
    { id: 4, title: 'DOCUMENTOS', color: '#64AE87', file: '/files/documentos.pdf', image: docsImg },
    { id: 5, title: 'INSCRIÇÕES', color: '#FDAC1D', file: '/files/inscricoes.pdf', image: insImg },
];

const DocumentosInstitucionais = () => {
    return (
        <div className="doc-container">
            <h1 className="doc-title">DOCUMENTOS INSTITUCIONAIS</h1>
            <div className="doc-grid">
                {documentos.map(doc => (
                    <a 
                        key={doc.id} 
                        href={doc.file} 
                        download
                        className="doc-card"
                        style={{ backgroundColor: doc.color }}
                    >
                        <div className="doc-icon">
                        <Image
                            src={doc.image}
                            alt=""
                            layout="responsive"
                            width={112}
                            height={112}
                        />
                        </div>
                        <p className="doc-text">{doc.title}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default DocumentosInstitucionais;
