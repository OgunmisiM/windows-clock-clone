var clock = () => {
    var date = new Date();
    var hrs = date.getHours();
    var mins = date.getMinutes();
    // var sec = date.getSeconds();
    var period = "AM";
    if (hrs == 0) hrs = 12;
    if (hrs > 12) {
        hrs = hrs - 12;
        period = "PM";
    }
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    // sec = sec < 10 ? `0${sec}` : sec;
    var time = `${hrs}:${mins}${period}`;
    document.getElementById("clock").innerHTML = time;
    setInterval(clock, 1000)
};
clock();

function myFunction() {
    var d = new Date();
    var Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    var day = Days[d.getDay()];
    var numberDay = d.getDay();
    var month = Months[d.getMonth()];
    var dayMonth = `${day}, ${numberDay} ${month}`;
    document.getElementById("date").innerHTML = dayMonth;
    setInterval(myFunction, 1000)
};
myFunction();