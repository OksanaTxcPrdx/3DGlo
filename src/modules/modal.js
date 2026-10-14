const modal = () => {

    const modal = document.querySelector('.popup');
    const popupContent = modal.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const width = document.documentElement.clientWidth;
            const height = document.documentElement.clientHeight;
            const targetTop = height * 0.1;
            const time = 5;
            let currentTop = 0;
            let idAnimation;
            let v = targetTop / time;

            const appearAnimate = () => {

                idAnimation = requestAnimationFrame(appearAnimate);

                if (currentTop < targetTop) {
                    currentTop = currentTop + v;
                    popupContent.style.top = currentTop + 'px';
                } else {
                    cancelAnimationFrame(idAnimation);
                }
            }

            if (width >= 768) {
                modal.style.display = 'block';
                requestAnimationFrame(appearAnimate);
            } else {
                modal.style.display = 'block';
            }

        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';

    })
}

export default modal;