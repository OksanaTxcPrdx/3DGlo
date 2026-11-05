import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calc from './modules/calculator';
import formValid from './modules/formsValidation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';

const sliderConfigs = {
    sliderClass: 'portfolio-content',
    slideClass: 'portfolio-item',
    slideActiveClass: '',
    dotsConteinerClass: 'portfolio-dots',
    dotClass: 'dot',
    dotActiveClass: '',
    navigation: {
        navClass: 'portfolio-btn',
        arLeftId: 'arrow-left',
        arRightId: 'arrow-right',
    },
    delay: 2000
}

timer('30 october 2026 15:55:20');
menu();
modal();
calc();
formValid();
tabs();
slider(sliderConfigs);
sliderCarousel();