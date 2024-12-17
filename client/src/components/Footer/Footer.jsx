import React from 'react';

function Footer() {
  return (
    <div className="bg-slate-900 text-white w-full py-10">
      <footer className="flex flex-wrap justify-between px-10 lg:px-40">
     
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Contacte-nos</h2>
          <ul className="space-y-2">
            <li>Telefone: +258 84 123 4567</li>
            <li>Email: info@example.com</li>
            <li>Endereço: Rua ABC, Maputo</li>
          </ul>
        </div>

       
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Links Rápidos</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-blue-400">Propriedades</a></li>
            <li><a href="#" className="hover:text-blue-400">Contato</a></li>
          </ul>
        </div>

        {/* Seção 3 */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-4">Siga-nos</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-400">Facebook</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">Instagram</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
            </li>
          </ul>
        </div>
      </footer>

     
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Alfredo Langa.</p>
      </div>
    </div>
  );
}

export default Footer;
