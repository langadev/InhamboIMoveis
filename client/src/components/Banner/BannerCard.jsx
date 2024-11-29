import React from 'react';

function BannerCard({ image, alt, message }) {
  return (
    <div className="w-full md:h-[500px] grid md:grid-cols-2 items-center px-6">
      {/* Imagem */}
      <div>
        <img
          className="w-full md:h-[500px] h-[300px] rounded-md object-cover"
          src={image}
          alt={alt}
        />
      </div>
      {/* Texto */}
      <div className="flex flex-col justify-center px-6 h-full bg-gray-100">
        <h1 className="md:text-3xl text-xl font-bold text-gray-800">
          Bem-vindo à <span className="text-blue-500">Langa Imóveis</span>
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-lg">
          {message}
        </p>
      </div>
    </div>
  );
}

export default BannerCard;
