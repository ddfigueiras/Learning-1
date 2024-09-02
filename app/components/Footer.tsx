import React from 'react';

const Footer = () => {
  return (
      <footer className="footer">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-48">
          <div>
            <h4 className="font-bold mb-4">MUNICÍPIO</h4>
            <ul className="space-y-2">
              <li>Mensagem do Presidente</li>
              <li>Câmara Municipal</li>
              <li>Assembleia Municipal</li>
              <li>Freguesias</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">AUTARQUIA360</h4>
            <ul className="space-y-2">
              <li>Onde Estamos</li>
              <li>Conheça-nos melhor</li>
              <li>Visite-nos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">ATIVIDADE MUNICIPAL</h4>
            <ul className="space-y-2">
              <li>Ação Social</li>
              <li>CPCJ</li>
              <li>Educação</li>
              <li>Ambiente</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">SUBSCREVA A NOSSA NEWSLETTER</h4>
            <form className="flex items-center mb-4">
              <input
                type="email"
                placeholder="E-mail"
                className="p-2 w-full rounded-l-md border-none"
              />
              <button type="submit" className="bg-gray-700 p-2 rounded-r-md">
                →
              </button>
            </form>
            <p className="text-xs mb-2">
              Consulte aqui a nossa <a href="#" className="underline">Política de Privacidade</a>
            </p>
            <label className="text-xs flex items-center">
              <input type="checkbox" className="mr-2" />
              Li e Concordo com os Termos e Condições.
            </label>
            <div className="flex space-x-2 mt-4">
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;