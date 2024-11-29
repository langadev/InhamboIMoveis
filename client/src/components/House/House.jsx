import casa from '/images/casa-1.jpeg';
import casa2 from '/images/casa-2.jpeg';
import casa3 from '/images/casa-3.jpeg';
import casa4 from '/images/casa-4.jpeg';
import { FaBed, FaShower } from "react-icons/fa";

function ThumbnailGallery({ images }) {
  return (
    <div className="md:flex gap-3 py-3 hidden">
      {images.map((image, index) => (
        <img
          key={index}
          className="w-[200px] h-[150px] rounded-md object-cover"
          src={image.src}
          alt={image.alt || `Imagem ${index + 1}`}
        />
      ))}
    </div>
  );
}

function InfoCard({ label, value, icon }) {
  return (
    <span className="shadow-sm text-center bg-gray-100 rounded flex flex-col items-center gap-1 p-2">
      <span className="flex items-center gap-1">
        {icon} {value}
      </span>
      <span className="text-sm">{label}</span>
    </span>
  );
}

function ReservationPage() {
  const product = {
    id: 1,
    url: '/images/casa-1.jpeg',
    name: 'Casa tipo 4 em Maputo',
    price: 200000,
    description: 'Casa tipo 4 em Maputo',
    quartos: 4,
    salas: 2,
    cozinhas: 2,
    banheiros: 3,
    tamanho: 200,
    suite: 1,
    location: {
      municipio: 'Maputo',
      bairro: 'Sommershield',
      avenida: 'Guerra Popular',
      casa: 3,
    },
  };

  const thumbnails = [
    { src: casa, alt: 'Casa 1' },
    { src: casa2, alt: 'Casa 2' },
    { src: casa3, alt: 'Casa 3' },
    { src: casa4, alt: 'Casa 4' },
  ];

  const handleReservation = (e) => {
    e.preventDefault();
    alert("Reserva realizada com sucesso!");
  };

  return (
    <div className="md:flex px-5 gap-10 mt-4">
      {/* Galeria */}
      <div className="md:w-1/2">
        <img
          className="w-full md:h-[500px] rounded-lg object-cover"
          src={product.url}
          alt={product.name}
        />
        <ThumbnailGallery images={thumbnails} />
      </div>

      {/* Detalhes e Formulário de Reserva */}
      <div className="md:w-1/2">
        <h2 className="text-center font-bold text-xl">{product.name}</h2>

        {/* Visão Geral */}
        <section className="mt-5 bg-white rounded-md p-5">
          <div className="flex justify-between py-2">
            <h3 className="font-semibold">Visão Geral</h3>
            <span className="font-semibold">ID do Imóvel: {product.id}</span>
          </div>
          <hr />
          <div className="grid grid-cols-5 gap-3 py-3">
            <InfoCard label="Quartos" value={product.quartos} icon={<FaBed />} />
            <InfoCard label="Suítes" value={product.suite} icon={<FaBed />} />
            <InfoCard label="Salas" value={product.salas} />
            <InfoCard label="Cozinhas" value={product.cozinhas} />
            <InfoCard label="Banheiros" value={product.banheiros} icon={<FaShower />} />
          </div>
        </section>

        {/* Formulário de Reserva */}
        <section className="bg-white mt-3 rounded-md p-5">
          <h3 className="font-semibold mb-3">Faça sua Reserva</h3>
          <hr />
          <form onSubmit={handleReservation} className="flex flex-col gap-4 mt-4">
            <div>
              <label className="block font-medium mb-1">Nome Completo</label>
              <input
                type="text"
                required
                className="w-full border rounded-md p-2"
                placeholder="Digite seu nome"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full border rounded-md p-2"
                placeholder="Digite seu email"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Data da Reserva</label>
              <input
                type="date"
                required
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Número de Pessoas</label>
              <input
                type="number"
                min="1"
                required
                className="w-full border rounded-md p-2"
                placeholder="Número de pessoas"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-3 hover:bg-blue-600"
            >
              Reservar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ReservationPage;
