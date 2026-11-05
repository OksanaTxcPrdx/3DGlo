const slider = ({ sliderClass,
    slideClass,
    slideActiveClass = `${slideClass}-active`,
    dotsConteinerClass,
    dotClass,
    dotActiveClass = `${dotClass}-active`,
    navigation: {
        navClass,
        arLeftId,
        arRightId,
    },
    delay }) => {


    if (!document.querySelector(`.${sliderClass}`)) {
        return;
    }
    if (document.querySelectorAll(`.${slideClass}`).length === 0) {
        return;
    }

    if (!dotActiveClass) {
        dotActiveClass = `${dotClass}-active`;
    }
    if (!slideActiveClass) {
        slideActiveClass = `${slideClass}-active`;
    }

    const sliderBlock = document.querySelector(`.${sliderClass}`);
    const slides = sliderBlock.querySelectorAll(`.${slideClass}`);
    const dotsConteiner = sliderBlock.querySelector(`.${dotsConteinerClass}`);

    let interval;
    let dots = [];
    let currentSlide = 0;

    const getDots = () => {
        slides.forEach(slide => {
            let newDot = document.createElement('li');
            newDot.classList.add(dotClass);
            dotsConteiner.append(newDot);
            dots.push(newDot)
        })
        dots[0].classList.add(dotActiveClass);
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }
    const autoSlide = () => {
        prevSlide(slides, currentSlide, slideActiveClass);
        prevSlide(dots, currentSlide, dotActiveClass);

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, slideActiveClass);
        nextSlide(dots, currentSlide, dotActiveClass);
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    }

    const stopSlide = () => {
        clearInterval(interval);
    }

    sliderBlock.addEventListener('click', e => {
        e.preventDefault();

        if (!e.target.matches(`.${dotClass}, .${navClass}`)) {
            return
        }
        prevSlide(slides, currentSlide, slideActiveClass);
        prevSlide(dots, currentSlide, dotActiveClass);

        if (e.target.matches(`#${arRightId}`)) {
            currentSlide++;
        } else if (e.target.matches(`#${arLeftId}`)) {
            currentSlide--;
        } else if (e.target.matches(`.${dotClass}`)) {
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

        nextSlide(slides, currentSlide, slideActiveClass);
        nextSlide(dots, currentSlide, dotActiveClass);
    })


    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches(`.${dotClass}, .${navClass}`)) {
            stopSlide(delay);
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {

        if (e.target.matches(`.${dotClass}, .${navClass}`)) {
            startSlide(delay);
        }
    }, true)

    getDots();
    startSlide(delay);
}

export default slider;