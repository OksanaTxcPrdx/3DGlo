const menu = function () {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const serviceBlockLink = document.querySelector('a[href="#service-block"]')
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    }
    const smoothScrollElement = (elem) => {
        let element = document.querySelector(`${elem.hash}`);
        element.scrollIntoView({ behavior: "smooth" });
    }

    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);

    menuItems.forEach(item => item.addEventListener('click', (event) => {
        event.preventDefault();
        smoothScrollElement(item);
    }));

    menuItems.forEach(item => item.addEventListener('click', handleMenu));

    serviceBlockLink.addEventListener('click', (event) => {
        event.preventDefault();
        smoothScrollElement(serviceBlockLink);
    })
}

export default menu;