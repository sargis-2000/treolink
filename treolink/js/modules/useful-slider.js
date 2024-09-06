export function usefulSlider() {
    new Swiper('.useful-list-mobile', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        freeMode: true,

        breakpoints: {
            320: {
                spaceBetween: 10,
            },

            1000: {
                spaceBetween: 20,
            }
        }
    })
}