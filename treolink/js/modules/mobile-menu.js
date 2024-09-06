export function mobileMenu() {
    const burgerBtn = document.querySelector('.burger-btn')
    const mobileMenu = document.querySelector('.mobile-menu')
    const headerContent = document.querySelector('.header__content')
    const mobileNavLinks = document.querySelectorAll('.mobile-nav__link')

    burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
        burgerBtn.classList.toggle('active')

        if(mobileMenu.classList.contains('active')) {
            headerContent.classList.add('active')
            document.documentElement.style.overflowY = 'hidden'
        } else {
            headerContent.classList.remove('active')
            document.documentElement.removeAttribute('style')
        }
    })

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.documentElement.removeAttribute('style')
            mobileMenu.classList.remove('active')
            headerContent.classList.remove('active')
            burgerBtn.classList.remove('active');
        })
    })
}