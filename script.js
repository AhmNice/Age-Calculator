function calculate() {
    const day = parseInt(document.getElementById("day").value, 10);
    const month = parseInt(document.getElementById("month").value, 10);
    const year = parseInt(document.getElementById("year").value, 10);

    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1; // getMonth() returns month from 0-11
    var yy = date.getFullYear();
    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check for leap year
    if ((yy % 4 === 0 && yy % 100 !== 0) || (yy % 400 === 0)) {
        months[1] = 29;
    }

    if (day > dd) {
        dd += months[mm - 2]; // previous month days
        mm -= 1;
    }
    if (month > mm) {
        mm += 12;
        yy -= 1;
    }

    var days = dd - day;
    var mon = mm - month;
    var years = yy - year;

    document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
    document.getElementById("months").innerHTML = mon < 10 ? '0' + mon : mon;
    document.getElementById("years").innerHTML = years < 10 ? '0' + years : years;
    
    console.log(dd);
}
