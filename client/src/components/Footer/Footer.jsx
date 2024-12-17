import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-slate-900 text-white w-full py-10">
      <footer className="flex flex-wrap justify-between px-10 lg:px-40">
     
        {/* Seção 1 - Contacto */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Contacte-nos</h2>
          <ul className="space-y-2">
            <li>Telefone: +258 84 123 4567</li>
            <li>Email: info@example.com</li>
            <li>Endereço: Rua ABC, Maputo</li>
          </ul>
        </div>

        {/* Seção 2 - Links rápidos */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Links Rápidos</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-blue-400">Propriedades</a></li>
            <li><a href="#" className="hover:text-blue-400">Contato</a></li>
          </ul>
        </div>

        {/* Seção 3 - Redes sociais */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-4">Fale connosco</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#" className="hover:text-blue-400 flex items-center">
                <FaFacebookF className="mr-2" />
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 flex items-center">
                <FaInstagram className="mr-2" />
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 flex items-center">
                <FaLinkedinIn className="mr-2" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

      </footer>

      {/* Rodapé Final */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Alfredo Langa.</p>
      </div>
    </div>
  );
}

export default Footer;
