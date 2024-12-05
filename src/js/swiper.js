import Swiper from "swiper";
import { Scrollbar, Navigation } from "swiper/modules";
import "swiper/css";

import "swiper/css/scrollbar";
import "swiper/css/navigation";

const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  direction: "horizontal",
  loop: true,
  modules: [Scrollbar, Navigation],

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
