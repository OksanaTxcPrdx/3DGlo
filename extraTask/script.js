const greetingBlock = document.getElementById('greeting-block');
const weekDayBlock = document.getElementById('week-day-block');
const timeBlock = document.getElementById('time-block');
const newYearCountdownBlock = document.getElementById('new-year-countdown-block');

const weekDays = ['Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
]

let date = new Date();

const getGreeting = (date) => {
    let hours = date.getHours();

    if (hours >= 0 && hours < 4) {
        return 'Доброй ночи';
    } else if (hours >= 4 && hours < 12) {
        return 'Доброе утро';
    } else if (hours >= 12 && hours < 17) {
        return 'Добрый день';
    } else if (hours >= 17 && hours < 24) {
        return 'Добрый вечер';
    }
}

const getWeekDay = (date) => {
    return weekDays[date.getDay()];
}

const getFormatTime = (date) => {
    return date.toLocaleTimeString('en');
}

const getNYcountdown = (date) => {
    const newYearDate = new Date();
    newYearDate.setMonth(11, 31);
    return Math.floor((newYearDate - date) / 1000 / 3600 / 24);
}

const setInfo = () => {
    greetingBlock.textContent = getGreeting(date);
    weekDayBlock.textContent += getWeekDay(date);
    timeBlock.textContent += getFormatTime(date);
    newYearCountdownBlock.textContent += `${getNYcountdown(date)} д.`;

}

setInfo();