// core version + navigation, pagination modules:
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";

Swiper.use([Autoplay]);
Swiper.use([Navigation]);
Swiper.use([Pagination]);

const slider = () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,

    // Autoplay
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    // Pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

export default slider;
