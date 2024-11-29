import { useRef } from "react";
import Slider from "react-slick";
import { bannersImage } from "../../../utils/data";
import BannerCard from "./BannerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Banner() {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current.slickPrev();

  return (
    <div className="mt-20 ">
      
      <Slider ref={sliderRef} {...settings}>
        {bannersImage.map((item) => (
          <BannerCard key={item.id} image={item.url} alt={item.alt} message={item.message} />
        ))}
      </Slider>
      {/* Botões de navegação */}
      <div className="flex justify-center gap-5 mt-8 px-4 md:px-20">
        {/* <button
          onClick={prevSlide}
          className="bg-gray-800 text-white md:p-3 p-3 rounded-full hover:bg-gray-700"
          aria-label="Slide anterior"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
          aria-label="Próximo slide"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button> */}
      </div>
    </div>
  );
}

export default Banner;
