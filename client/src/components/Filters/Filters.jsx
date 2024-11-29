import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Filters() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="shadow-lg w-full md:mx-6 mx-2 py-6 bg-white rounded-xl">
        <form className="flex flex-wrap md:flex-nowrap w-full px-6 gap-6 justify-between items-end">
          {/* Localização */}
          <div className="flex flex-col w-full md:w-auto font-medium">
            <label htmlFor="location" className="mb-1 text-gray-700">Localização</label>
            <input
              id="location"
              className="bg-gray-50 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700 px-3 py-2 shadow-sm"
              type="text"
              placeholder="Pesquise a Cidade"
            />
          </div>

          {/* Preços e Quartos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div className="flex flex-col font-medium">
              <label htmlFor="min-price" className="mb-1 text-gray-700">Preço Min.</label>
              <input
                id="min-price"
                className="bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700 px-3 py-2 shadow-sm"
                type="number"
                placeholder="0 $"
              />
            </div>

            <div className="flex flex-col font-medium">
              <label htmlFor="max-price" className="mb-1 text-gray-700">Preço Max</label>
              <input
                id="max-price"
                className="bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700 px-3 py-2 shadow-sm"
                type="number"
                placeholder="0 $"
              />
            </div>

            <div className="flex flex-col font-medium">
              <label htmlFor="rooms" className="mb-1 text-gray-700">Quartos</label>
              <input
                id="rooms"
                className="bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700 px-3 py-2 shadow-sm"
                type="number"
                placeholder="Ex: 2"
              />
            </div>

            <div className="flex flex-col font-medium">
              <label htmlFor="bathrooms" className="mb-1 text-gray-700">Banheiros</label>
              <input
                id="bathrooms"
                className="bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700 px-3 py-2 shadow-sm"
                type="number"
                placeholder="Ex: 1"
              />
            </div>
          </div>

          {/* Botão */}
          <div className="flex items-center w-full md:w-auto">
            <button
              type="submit"
              className="text-white flex justify-center items-center bg-blue-500 rounded-md px-5 py-3 hover:bg-blue-600 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
              aria-label="Buscar"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span className="hidden md:block ml-2">Buscar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filters;
