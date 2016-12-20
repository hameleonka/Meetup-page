var countdown = document.querySelector('.countdown');
var countdownUnitDays = countdown.querySelector('.countdown-unit-days');
var countdownUnitHours = countdown.querySelector('.countdown-unit-hours');
var countdownUnitMinutes = countdown.querySelector('.countdown-unit-minutes');
var countdownUnitSeconds = countdown.querySelector('.countdown-unit-seconds');
var deadline = 'Mon Apr 10 2017 00:00:00 GMT-0400';


function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

   function initializeClock(endtime) {
       function updateClock() {
           var t = getTimeRemaining(endtime);

           countdownUnitDays.innerHTML = t.days;
           countdownUnitHours.innerHTML = ('0' + t.hours).slice(-2);
           countdownUnitMinutes.innerHTML = ('0' + t.minutes).slice(-2);
           countdownUnitSeconds.innerHTML = ('0' + t.seconds).slice(-2);

           if (t.total <= 0) {
               clearInterval(timeinterval);
           }
       }

       updateClock(endtime);
         var timeinterval = setInterval(updateClock, 1000);
    }

initializeClock(deadline);

