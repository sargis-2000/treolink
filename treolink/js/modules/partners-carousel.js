export function partnersCarousel() {
    document.addEventListener('DOMContentLoaded', () => {
        new Splide('.partners-carousel', {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            pagination: false,
            arrows: false,
            autoWidth: true,
            gap: '40px',

            autoScroll: {
                speed: 1,
                pauseOnHover: false,
            },

            breakpoints: {
                999: {
                    autoScroll: {
                        speed: .5,
                        pauseOnHover: false,
                    },
                }
            }
        }).mount(window.splide.Extensions)
    })
}