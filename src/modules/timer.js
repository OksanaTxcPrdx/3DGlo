const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days');
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getRemainingTime = () => {

        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000

        let days = Math.floor(timeRemaining / 3600 / 24)
        let hours = Math.floor((timeRemaining / 3600) % 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, days, hours, minutes, seconds }
    }

    const updateClock = () => {

        let getTime = getRemainingTime();

        timerDays.textContent = (getTime.days < 10 ? '0' : '') + getTime.days;
        timerHours.textContent = (getTime.hours < 10 ? '0' : '') + getTime.hours;
        timerMinutes.textContent = (getTime.minutes < 10 ? '0' : '') + getTime.minutes;
        timerSeconds.textContent = (getTime.seconds < 10 ? '0' : '') + getTime.seconds;

        return getTime.timeRemaining;
    }


    let idTimer = setInterval(() => {

        let remainingTime = updateClock();
        if (remainingTime < 0) {
            clearInterval(idTimer);
            timerDays.textContent = '00';
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }, 1000);
}

export default timer;