export function requestPopup() {
    const popupBtns = document.querySelectorAll('[data-popup]')
    const requestPopup = document.querySelector('.request-popup')
    
    popupBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            requestPopup.classList.add('active')
            document.documentElement.style.overflowY = 'hidden'
        })
    })

    requestPopup.addEventListener('click', e => {
        if (e.target.classList.contains('request-popup') || e.target.classList.contains('popup__close')) {
            requestPopup.classList.remove('active')
            document.documentElement.removeAttribute('style')
        }
    });
}