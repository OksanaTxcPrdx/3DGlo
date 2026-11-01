const slider = () => {

    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = sliderBlock.querySelectorAll('.portfolio-item');
    const dotsConteiner = sliderBlock.querySelector('.portfolio-dots');
    // const dots = sliderBlock.querySelectorAll('.dot');
    const timeInterval = 2000;
    let interval;
    let dots = [];
    let currentSlide = 0;

    const getDots = () => {
        slides.forEach(slide => {
            let newDot = document.createElement('li');
            newDot.classList.add('dot');
            dotsConteiner.append(newDot);
            dots.push(newDot)
        })
        dots[0].classList.add('dot-active');
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }
    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    }

    const stopSlide = () => {
        clearInterval(interval);
    }

    sliderBlock.addEventListener('click', e => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        }
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.matches('.dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    })


    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide(timeInterval);
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {

        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true)

    getDots();
    startSlide();
}

export default slider;