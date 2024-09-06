export function scrollAnimation(...items) {
    const elements = document.querySelectorAll(items);
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        })
    })

    elements.forEach(item => {
        observer.observe(item);
    })
}