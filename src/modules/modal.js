import { animate } from "./helpers";

const modal = () => {
    const modal = document.querySelector('.popup');
    const popupContent = modal.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const width = document.documentElement.clientWidth;
            const height = document.documentElement.clientHeight;
            const targetTop = height * 0.1;

            if (width >= 768) {
                modal.style.display = 'block';
                animate({
                    duration: 100,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        popupContent.style.top = (progress * targetTop) + 'px';
                    }
                })
            } else {
                modal.style.display = 'block';
            }
        })
    })

    modal.addEventListener('click', e => {
        if (!e.target.closest('.popup-content') ||
            e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    })
}

export default modal;