import { mobileMenu } from "./modules/mobile-menu.js";
import { partnersCarousel } from "./modules/partners-carousel.js";
import { requestPopup } from "./modules/request-popup.js";
import { scrollAnimation } from "./modules/scroll-animation.js";
import { sendingPopup } from "./modules/sending-popup.js";
import { usefulSlider } from "./modules/useful-slider.js";

mobileMenu()
requestPopup()
sendingPopup()
usefulSlider()
scrollAnimation(
    '.features-list__item',
    '.statistics-list__item'
);
partnersCarousel()