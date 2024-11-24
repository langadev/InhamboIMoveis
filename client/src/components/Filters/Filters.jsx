import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Filters() {
  return (
    <div className="flex items-center mt-24 px-1">
      <div className="bg-[#2e3133] w-full md:mx-20 mx-2 py-4 rounded-lg">
        <form className="md:flex w-full px-2  justify-around items-end" action="">
          {/* Localização */}
        
          <div className="flex flex-col  text-white font-thin">
            <label htmlFor="location">Localização</label>
            <input
              id="location"
              className="bg-white rounded-sm border-none outline-none text-[#2e3133] px-2 py-1"
              type="text"
              placeholder="Pesquise a Cidade"
            />
          </div>
          {/* Preço Mínimo */}
          <div className="md:flex grid grid-cols-2 gap-2">
          <div className="flex flex-col text-white font-thin">
            <label htmlFor="min-price">Preço Min.</label>
            <input
              id="min-price"
              className="bg-white rounded-sm border-none outline-none text-[#2e3133] px-2 py-1"
              type="number"
              placeholder="0 $"
            />
          </div>
          {/* Preço Máximo */}
          <div className="flex flex-col text-white font-thin">
            <label htmlFor="max-price">Preço Max</label>
            <input
              id="max-price"
              className="bg-white rounded-sm border-none outline-none text-[#2e3133] px-2 py-1"
              type="number"
              placeholder="0 $"
            />
          </div>
          {/* Quartos */}
          <div className="flex flex-col text-white font-thin">
            <label htmlFor="rooms">Quartos</label>
            <input
              id="rooms"
              className="bg-white rounded-sm border-none outline-none text-[#2e3133] px-2 py-1"
              type="number"
              placeholder="Ex: 2"
            />
          </div>
          {/* Banheiros */}
          <div className="flex flex-col text-white font-thin">
            <label htmlFor="bathrooms">Banheiros</label>
            <input
              id="bathrooms"
              className="bg-white rounded-sm border-none outline-none text-[#2e3133] px-2 py-1"
              type="number"
              placeholder="Ex: 1"
            />
          </div>
          </div>
          {/* Botão de Busca */}
          <div className="flex mt-2 items-center ">
            <button
              type="submit"
              className="text-white flex justify-center bg-blue-500 rounded-md px-4 py-2 hover:bg-[#393b3d] border-blue-500 border-2 w-full"
              aria-label="Buscar"
            >
              <MagnifyingGlassIcon className="h-5 w-5 texc" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filters;
