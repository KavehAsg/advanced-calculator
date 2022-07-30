// convert Millisecond to x
export {
    miliToSecond, miliToMinute, miliToHour, miliToDay, miliToWeek, miliToMonth,
    miliToYear, miliToDecade
};

function miliToSecond(data) {
    return data / 1000;
}
function miliToMinute(data) {
    return data / 60000;
}
function miliToHour(data) {
    return data / (3.6 * (10 ** 6));
}
function miliToDay(data) {
    return data / (8.64 * (10 ** 7));
}
function miliToWeek(data) {
    return data / (6.048 * (10 ** 8));
}
function miliToMonth(data) {
    return data / (2.628 * (10 ** 9));
}
function miliToYear(data) {
    return data / (3.154 * (10 ** 10));
}
function miliToDecade(data) {
    return data / (8.64 * (10 ** 11));
}
//------------------------------------------------------------------//


// convert Second to x
export {
    secondToMilisecond, secondToMinute, secondToHour, secondToDay, secondToWeek, secondToMonth,
    secondToYear, secondToDecade
};

function secondToMilisecond(data) {
    return data * 1000;
}
function secondToMinute(data) {
    return data / 60;
}
function secondToHour(data) {
    return data / 3600;
}
function secondToDay(data) {
    return data / (8.64 * (10 ** 4));
}
function secondToWeek(data) {
    return data / (6.048 * (10 ** 5));
}
function secondToMonth(data) {
    return data / (2.628 * (10 ** 6));
}
function secondToYear(data) {
    return data / (3.154 * (10 ** 7));
}
function secondToDecade(data) {
    return data / (8.64 * (10 ** 8));
}
//------------------------------------------------------------------//


// convert Minute to x
export {
    minuteToMilisecond, minuteToSecond, minuteToHour, minuteToDay, minuteToWeek, minuteToMonth,
    minuteToYear, minuteToDecade
};

function minuteToMilisecond(data) {
    return data * 60000;
}
function minuteToSecond(data) {
    return data * 60;
}
function minuteToHour(data) {
    return data / 60;
}
function minuteToDay(data) {
    return data / 1440;
}
function minuteToWeek(data) {
    return data / (1.008 * (10 ** 4));
}
function minuteToMonth(data) {
    return data / (4.38 * (10 ** 4));
}
function minuteToYear(data) {
    return data / (5.256 * (10 ** 5));
}
function minuteToDecade(data) {
    return data / (5.256 * (10 ** 6));
}
//------------------------------------------------------------------//


// convert Hour to x
export {
    hourToMilisecond, hourToSecond, hourToMinute, hourToDay, hourToWeek, hourToMonth,
    hourToYear, hourToDecade
};

function hourToMilisecond(data) {
    return data * (3.6 * (10 ** 6));
}
function hourToSecond(data) {
    return data * 3600;
}
function hourToMinute(data) {
    return data * 60;
}
function hourToDay(data) {
    return data / 24;
}
function hourToWeek(data) {
    return data / 168;
}
function hourToMonth(data) {
    return data / 730;
}
function hourToYear(data) {
    return data / 8760;
}
function hourToDecade(data) {
    return data / (8.76 * (10 ** 4));
}
//------------------------------------------------------------------//


// convert Day to x
export {
    dayToMilisecond, dayToSecond, dayToMinute, dayToHour, dayToWeek, dayToMonth,
    dayToYear, dayToDecade
};

function dayToMilisecond(data) {
    return data * (8.64 * (10 ** 7));
}
function dayToSecond(data) {
    return data * (8.64 * (10 ** 4));
}
function dayToMinute(data) {
    return data * 1440;
}
function dayToHour(data) {
    return data * 24;
}
function dayToWeek(data) {
    return data / 7;
}
function dayToMonth(data) {
    return data / 30.417;
}
function dayToYear(data) {
    return data / 365;
}
function dayToDecade(data) {
    return data / 3650 ;
}
//------------------------------------------------------------------//


// convert Week to x
export {
    weekToMilisecond, weekToSecond, weekToMinute, weekToHour, weekToDay, weekToMonth,
    weekToYear, weekToDecade
};

function weekToMilisecond(data) {
    return data * (6.048 * (10 ** 8));
}
function weekToSecond(data) {
    return data * (6.048 * (10 ** 5));
}
function weekToMinute(data) {
    return data * 10080 ;
}
function weekToHour(data) {
    return data * 168;
}
function weekToDay(data) {
    return data * 7;
}
function weekToMonth(data) {
    return data / 4.345;
}
function weekToYear(data) {
    return data / 52.143;
}
function weekToDecade(data) {
    return data / 521.4 ;
}
//------------------------------------------------------------------//


// convert Month to x
export {
    monthToMilisecond, monthToSecond, monthToMinute, monthToHour, monthToDay, monthToWeek,
    monthToYear, monthToDecade
};

function monthToMilisecond(data) {
    return data * (2.628 * (10 ** 9));
}
function monthToSecond(data) {
    return data * (6.048 * (10 ** 6));
}
function monthToMinute(data) {
    return data * 43800 ;
}
function monthToHour(data) {
    return data * 730;
}
function monthToDay(data) {
    return data * 30.417;
}
function monthToWeek(data) {
    return data * 4.345;
}
function monthToYear(data) {
    return data / 12;
}
function monthToDecade(data) {
    return data / 120 ;
}
//------------------------------------------------------------------//


// convert Year to x
export {
    yearToMilisecond, yearToSecond, yearToMinute, yearToHour, yearToDay, yearToWeek,
    yearToMonth, yearToDecade
};

function yearToMilisecond(data) {
    return data * (3.154 * (10 ** 10));
}
function yearToSecond(data) {
    return data * (3.154 * (10 ** 7));
}
function yearToMinute(data) {
    return data * (5.256 * (10 ** 5)) ;
}
function yearToHour(data) {
    return data * 8760;
}
function yearToDay(data) {
    return data * 365;
}
function yearToWeek(data) {
    return data * 52.143;
}
function yearToMonth(data) {
    return data * 12;
}
function yearToDecade(data) {
    return data / 10 ;
}
//------------------------------------------------------------------//


// convert Decade to x
export {
    decadeToMilisecond, decadeToSecond, decadeToMinute, decadeToHour, decadeToDay, decadeToWeek,
    decadeToMonth, decadeToYear
};

function decadeToMilisecond(data) {
    return data * (3.154 * (10 ** 11));
}
function decadeToSecond(data) {
    return data * (3.154 * (10 ** 8));
}
function decadeToMinute(data) {
    return data * (5.256 * (10 ** 6)) ;
}
function decadeToHour(data) {
    return data * 87600;
}
function decadeToDay(data) {
    return data * 3650;
}
function decadeToWeek(data) {
    return data * 521.4;
}
function decadeToMonth(data) {
    return data * 120;
}
function decadeToYear(data) {
    return data * 10 ;
}
//------------------------------------------------------------------//