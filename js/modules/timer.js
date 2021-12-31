function timer(id, deadline) {
    
  function getTimeRemaining(endtime) {
    const t =
        Date.parse(endtime) -
        Date.parse(new Date()) +
        new Date().getTimezoneOffset() * 60 * 1000,
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function getZeroBeforeOneDealNumber(number) {
    if (number < 10 && number >= 0) {
      return "0" + number;
    } else {
      return number;
    }
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZeroBeforeOneDealNumber(t.days);
      hours.innerHTML = getZeroBeforeOneDealNumber(t.hours);
      minutes.innerHTML = getZeroBeforeOneDealNumber(t.minutes);
      seconds.innerHTML = getZeroBeforeOneDealNumber(t.seconds);
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(id, deadline);
}
export default timer;