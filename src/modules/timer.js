const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getRemainingTime = () => {

        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000

        let hours = Math.floor(timeRemaining / 3600);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, hours, minutes, seconds }
    }

    const updateClock = () => {

        let getTime = getRemainingTime();

        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

        if (getTime.timeRemaining > 0) {
            setTimeout(updateClock, 1000);

        }
    }
    //getRemainingTime('4 october 2026');
    updateClock();


}

export default timer;