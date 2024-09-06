export function sendingPopup() {
    const sendingPopup = document.querySelector('.sending-popup');

    sendingPopup.addEventListener('click', e => {
        if (
            e.target.classList.contains('popup__close') 
            || 
            e.target.classList.contains('sending-popup') 
            ||
            e.target.classList.contains('sending-popup__btn')
            ) {
            sendingPopup.classList.remove('active');
            document.documentElement.removeAttribute('style')
        }
    })
}