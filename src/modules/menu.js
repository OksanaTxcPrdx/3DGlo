const menu = function () {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const serviceBlockLink = document.querySelector('a[href="#service-block"]')

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    }
    const smoothScrollElement = (elem) => {
        let element = document.querySelector(`${elem.hash}`);
        element.scrollIntoView({ behavior: "smooth" });
    }

    menuBtn.addEventListener('click', handleMenu);
    menu.addEventListener('click', e => {
        console.log(e.target);
        if (e.target.matches('a')) {
            handleMenu();
            e.preventDefault();
            if (e.target.closest('li')) {
                smoothScrollElement(e.target);
            }
        }
    })

    serviceBlockLink.addEventListener('click', (event) => {
        event.preventDefault();
        smoothScrollElement(serviceBlockLink);
    })
}

export default menu;