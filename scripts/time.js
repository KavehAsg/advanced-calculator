import { title, actionSection , closeHamMenu , hideHistory } from "./main.js";
import * as ConvertTime from "./modules/time-func.js";

document.querySelector("#Time").addEventListener("click", openTimeConverter);
function openTimeConverter() {
    hideHistory();
    closeHamMenu();
    title.innerText = "Time Converter";
    actionSection.className = "action-section converter"
    actionSection.innerHTML = `
            <div class="first-section first-section-time">
            <select class="first-unit first-unit-time">
                <option value="Microsecond">Microsecond</option>
                <option value="Millisecond">Millisecond</option>
                <option value="Second">Second</option>
                <option value="Minute" selected>Minute</option>
                <option value="Hour">Hour</option>
                <option value="Day">Day</option>
                <option value="Week">Week</option>
                <option value="Month">Month</option>
                <option value="Year">Year</option>
                <option value="Decade">Decade</option>
            </select>
            <input type="number" class="first-input first-input-time" placeholder="enter value">
        </div>

        <div class="second-section second-section-time">
            <select class="second-unit second-unit-time">
                <option value="Microsecond">Microsecond</option>
                <option value="Millisecond">Millisecond</option>
                <option value="Second" selected>Second</option>
                <option value="Minute">Minute</option>
                <option value="Hour">Hour</option>
                <option value="Day">Day</option>
                <option value="Week">Week</option>
                <option value="Month">Month</option>
                <option value="Year">Year</option>
                <option value="Decade">Decade</option>
            </select>
            <input type="number" class="second-input second-input-time" placeholder="enter value">
        </div>
    ` ;
    runTime();
}

function runTime() {
    console.log("yes")
    const firstUnit = document.querySelector(".first-unit-time");
    const secondUnit = document.querySelector(".second-unit-time");
    const firstInput = document.querySelector(".first-input-time");
    const secondInput = document.querySelector(".second-input-time");
    const millisecond = "Millisecond", second = "Second", minute = "Minute",
        hour = "Hour", day = "Day", week = "Week",
        month = "Month", year = "Year", decade = "Decade";


    firstInput.addEventListener("keyup", enterValueTime1);
    function enterValueTime1() {
        const input = firstInput.value;
        if (input === "") secondInput.value = "";
        else if (firstUnit.value === millisecond) {
            switch (secondUnit.value) {
                case millisecond:
                    secondInput.value = input;
                    break;
                case second:
                    secondInput.value = ConvertTime.miliToSecond(input);
                    break;
                case minute:
                    secondInput.value = ConvertTime.miliToMinute(input);
                    break;
                case hour:
                    secondInput.value = ConvertTime.miliToHour(input);
                    break;
                case day:
                    secondInput.value = ConvertTime.miliToDay(input);
                    break;
                case week:
                    secondInput.value = ConvertTime.miliToWeek(input);
                    break;
                case month:
                    secondInput.value = ConvertTime.miliToMonth(input);
                    break;
                case year:
                    secondInput.value = ConvertTime.miliToYear(input);
                    break;
                case decade:
                    secondInput.value = ConvertTime.miliToDecade(input);
                    break;
            }
        } else if (firstUnit.value === second) {
            switch (secondUnit.value) {
                case millisecond:
                    secondInput.value = ConvertTime.secondToMilisecond(input);
                    break;
                case second:
                    secondInput.value = input;
                    break;
                case minute:
                    secondInput.value = ConvertTime.secondToMinute(input);
                    break;
                case hour:
                    secondInput.value = ConvertTime.secondToHour(input);
                    break;
                case day:
                    secondInput.value = ConvertTime.secondToDay(input);
                    break;
                case week:
                    secondInput.value = ConvertTime.secondToWeek(input);
                    break;
                case month:
                    secondInput.value = ConvertTime.secondToMonth(input);
                    break;
                case year:
                    secondInput.value = ConvertTime.secondToYear(input);
                    break;
                case decade:
                    secondInput.value = ConvertTime.secondToDecade(input);
                    break;
            }
        } else if (firstUnit.value === minute) {
            switch (secondUnit.value) {
                case millisecond:
                    secondInput.value = ConvertTime.minuteToMilisecond(input);
                    break;
                case second:
                    secondInput.value = ConvertTime.minuteToSecond(input);
                    break;
                case minute:
                    secondInput.value = input;
                    break;
                case hour:
                    secondInput.value = ConvertTime.minuteToHour(input);
                    break;
                case day:
                    secondInput.value = ConvertTime.minuteToDay(input);
                    break;
                case week:
                    secondInput.value = ConvertTime.minuteToWeek(input);
                    break;
                case month:
                    secondInput.value = ConvertTime.minuteToMonth(input);
                    break;
                case year:
                    secondInput.value = ConvertTime.minuteToYear(input);
                    break;
                case decade:
                    secondInput.value = ConvertTime.minuteToDecade(input);
                    break;
            }
        } else if (firstUnit.value === hour) {
            switch (secondUnit.value) {
                case millisecond:
                    secondInput.value = ConvertTime.hourToMilisecond(input);
                    break;
                case second:
                    secondInput.value = ConvertTime.hourToSecond(input);
                    break;
                case minute:
                    secondInput.value = ConvertTime.hourToMinute(input);
                    break;
                case hour:
                    secondInput.value = input;
                    break;
                case day:
                    secondInput.value = ConvertTime.hourToDay(input);
                    break;
                case week:
                    secondInput.value = ConvertTime.hourToWeek(input);
                    break;
                case month:
                    secondInput.value = ConvertTime.hourToMonth(input);
                    break;
                case year:
                    secondInput.value = ConvertTime.hourToYear(input);
                    break;
                case decade:
                    secondInput.value = ConvertTime.hourToDecade(input);
                    break;
            }
        } else if (firstUnit.value === day) {
            switch (secondUnit.value) {
                case millisecond:
                    secondInput.value = ConvertTime.dayToMilisecond(input);
                    break;
                case second:
                    secondInput.value = ConvertTime.dayToSecond(input);
                    break;
                case minute:
                    secondInput.value = ConvertTime.dayToMinute(input);
                    break;
                case hour:
                    secondInput.value = ConvertTime.dayToHour(input);
                    break;
                case day:
                    secondInput.value = input;
                    break;
                case week:
                    secondInput.value = ConvertTime.dayToWeek(input);
                    break;
                case month:
                    secondInput.value = ConvertTime.dayToMonth(input);
                    break;
                case year:
                    secondInput.value = ConvertTime.dayToYear(input);
                    break;
                case decade:
                    secondInput.value = ConvertTime.dayToDecade(input);
                    break;
            }
        } else if (firstUnit.value === week) {
            switch (secondUnit.value) {
                case millisecond:
                    secondInput.value = ConvertTime.weekToMilisecond(input);
                    break;
                case second:
                    secondInput.value = ConvertTime.weekToSecond(input);
                    break;
                case minute:
                    secondInput.value = ConvertTime.weekToMinute(input);
                    break;
                case hour:
                    secondInput.value = ConvertTime.weekToHour(input);
                    break;
                case day:
                    secondInput.value = ConvertTime.weekToDay(input);
                    break;
                case week:
                    secondInput.value = input;
                    break;
                case month:
                    secondInput.value = ConvertTime.weekToMonth(input);
                    break;
                case year:
                    secondInput.value = ConvertTime.weekToYear(input);
                    break;
                case decade:
                    secondInput.value = ConvertTime.weekToDecade(input);
                    break;
            }
        } else if (firstUnit.value === month) {
            switch (secondUnit.value) {
                case millisecond:
                    secondInput.value = ConvertTime.monthToMilisecond(input);
                    break;
                case second:
                    secondInput.value = ConvertTime.monthToSecond(input);
                    break;
                case minute:
                    secondInput.value = ConvertTime.monthToMinute(input);
                    break;
                case hour:
                    secondInput.value = ConvertTime.monthToHour(input);
                    break;
                case day:
                    secondInput.value = ConvertTime.monthToDay(input);
                    break;
                case week:
                    secondInput.value = ConvertTime.monthToWeek(input);
                    break;
                case month:
                    secondInput.value = input;
                    break;
                case year:
                    secondInput.value = ConvertTime.monthToYear(input);
                    break;
                case decade:
                    secondInput.value = ConvertTime.monthToDecade(input);
                    break;
            }
        } else if (firstUnit.value === year) {
            switch (secondUnit.value) {
                case millisecond:
                    secondInput.value = ConvertTime.yearToMilisecond(input);
                    break;
                case second:
                    secondInput.value = ConvertTime.yearToSecond(input);
                    break;
                case minute:
                    secondInput.value = ConvertTime.yearToMinute(input);
                    break;
                case hour:
                    secondInput.value = ConvertTime.yearToHour(input);
                    break;
                case day:
                    secondInput.value = ConvertTime.yearToDay(input);
                    break;
                case week:
                    secondInput.value = ConvertTime.yearToWeek(input);
                    break;
                case month:
                    secondInput.value = ConvertTime.yearToMonth(input);
                    break;
                case year:
                    secondInput.value = input;
                    break;
                case decade:
                    secondInput.value = ConvertTime.yearToDecade(input);
                    break;
            }
        } else if (firstUnit.value === decade) {
            switch (secondUnit.value) {
                case millisecond:
                    secondInput.value = ConvertTime.decadeToMilisecond(input);
                    break;
                case second:
                    secondInput.value = ConvertTime.decadeToSecond(input);
                    break;
                case minute:
                    secondInput.value = ConvertTime.decadeToMinute(input);
                    break;
                case hour:
                    secondInput.value = ConvertTime.decadeToHour(input);
                    break;
                case day:
                    secondInput.value = ConvertTime.decadeToDay(input);
                    break;
                case week:
                    secondInput.value = ConvertTime.decadeToWeek(input);
                    break;
                case month:
                    secondInput.value = ConvertTime.decadeToMonth(input);
                    break;
                case year:
                    secondInput.value = ConvertTime.decadeToYear(input);
                    break;
                case decade:
                    secondInput.value = input;
                    break;
            }
        }
    }

    secondInput.addEventListener("keyup", enterValueTime2);
    function enterValueTime2() {
        const input = secondInput.value;
        if (input === "") firstInput.value = "";
        else if (secondUnit.value === millisecond) {
            switch (firstUnit.value) {
                case millisecond:
                    firstInput.value = input;
                    break;
                case second:
                    firstInput.value = ConvertTime.miliToSecond(input);
                    break;
                case minute:
                    firstInput.value = ConvertTime.miliToMinute(input);
                    break;
                case hour:
                    firstInput.value = ConvertTime.miliToHour(input);
                    break;
                case day:
                    firstInput.value = ConvertTime.miliToDay(input);
                    break;
                case week:
                    firstInput.value = ConvertTime.miliToWeek(input);
                    break;
                case month:
                    firstInput.value = ConvertTime.miliToMonth(input);
                    break;
                case year:
                    firstInput.value = ConvertTime.miliToYear(input);
                    break;
                case decade:
                    firstInput.value = ConvertTime.miliToDecade(input);
                    break;
            }
        } else if (secondUnit.value === second) {
            switch (firstUnit.value) {
                case millisecond:
                    firstInput.value = ConvertTime.secondToMilisecond(input);
                    break;
                case second:
                    firstInput.value = input;
                    break;
                case minute:
                    firstInput.value = ConvertTime.secondToMinute(input);
                    break;
                case hour:
                    firstInput.value = ConvertTime.secondToHour(input);
                    break;
                case day:
                    firstInput.value = ConvertTime.secondToDay(input);
                    break;
                case week:
                    firstInput.value = ConvertTime.secondToWeek(input);
                    break;
                case month:
                    firstInput.value = ConvertTime.secondToMonth(input);
                    break;
                case year:
                    firstInput.value = ConvertTime.secondToYear(input);
                    break;
                case decade:
                    firstInput.value = ConvertTime.secondToDecade(input);
                    break;
            }
        } else if (secondUnit.value === minute) {
            switch (firstUnit.value) {
                case millisecond:
                    firstInput.value = ConvertTime.minuteToMilisecond(input);
                    break;
                case second:
                    firstInput.value = ConvertTime.minuteToSecond(input);
                    break;
                case minute:
                    firstInput.value = input;
                    break;
                case hour:
                    firstInput.value = ConvertTime.minuteToHour(input);
                    break;
                case day:
                    firstInput.value = ConvertTime.minuteToDay(input);
                    break;
                case week:
                    firstInput.value = ConvertTime.minuteToWeek(input);
                    break;
                case month:
                    firstInput.value = ConvertTime.minuteToMonth(input);
                    break;
                case year:
                    firstInput.value = ConvertTime.minuteToYear(input);
                    break;
                case decade:
                    firstInput.value = ConvertTime.minuteToDecade(input);
                    break;
            }
        } else if (secondUnit.value === hour) {
            switch (firstUnit.value) {
                case millisecond:
                    firstInput.value = ConvertTime.hourToMilisecond(input);
                    break;
                case second:
                    firstInput.value = ConvertTime.hourToSecond(input);
                    break;
                case minute:
                    firstInput.value = ConvertTime.hourToMinute(input);
                    break;
                case hour:
                    firstInput.value = input;
                    break;
                case day:
                    firstInput.value = ConvertTime.hourToDay(input);
                    break;
                case week:
                    firstInput.value = ConvertTime.hourToWeek(input);
                    break;
                case month:
                    firstInput.value = ConvertTime.hourToMonth(input);
                    break;
                case year:
                    firstInput.value = ConvertTime.hourToYear(input);
                    break;
                case decade:
                    firstInput.value = ConvertTime.hourToDecade(input);
                    break;
            }
        } else if (secondUnit.value === day) {
            switch (firstUnit.value) {
                case millisecond:
                    firstInput.value = ConvertTime.dayToMilisecond(input);
                    break;
                case second:
                    firstInput.value = ConvertTime.dayToSecond(input);
                    break;
                case minute:
                    firstInput.value = ConvertTime.dayToMinute(input);
                    break;
                case hour:
                    firstInput.value = ConvertTime.dayToHour(input);
                    break;
                case day:
                    firstInput.value = input;
                    break;
                case week:
                    firstInput.value = ConvertTime.dayToWeek(input);
                    break;
                case month:
                    firstInput.value = ConvertTime.dayToMonth(input);
                    break;
                case year:
                    firstInput.value = ConvertTime.dayToYear(input);
                    break;
                case decade:
                    firstInput.value = ConvertTime.dayToDecade(input);
                    break;
            }
        } else if (secondUnit.value === week) {
            switch (firstUnit.value) {
                case millisecond:
                    firstInput.value = ConvertTime.weekToMilisecond(input);
                    break;
                case second:
                    firstInput.value = ConvertTime.weekToSecond(input);
                    break;
                case minute:
                    firstInput.value = ConvertTime.weekToMinute(input);
                    break;
                case hour:
                    firstInput.value = ConvertTime.weekToHour(input);
                    break;
                case day:
                    firstInput.value = ConvertTime.weekToDay(input);
                    break;
                case week:
                    firstInput.value = input;
                    break;
                case month:
                    firstInput.value = ConvertTime.weekToMonth(input);
                    break;
                case year:
                    firstInput.value = ConvertTime.weekToYear(input);
                    break;
                case decade:
                    firstInput.value = ConvertTime.weekToDecade(input);
                    break;
            }
        } else if (secondUnit.value === month) {
            switch (firstUnit.value) {
                case millisecond:
                    firstInput.value = ConvertTime.monthToMilisecond(input);
                    break;
                case second:
                    firstInput.value = ConvertTime.monthToSecond(input);
                    break;
                case minute:
                    firstInput.value = ConvertTime.monthToMinute(input);
                    break;
                case hour:
                    firstInput.value = ConvertTime.monthToHour(input);
                    break;
                case day:
                    firstInput.value = ConvertTime.monthToDay(input);
                    break;
                case week:
                    firstInput.value = ConvertTime.monthToWeek(input);
                    break;
                case month:
                    firstInput.value = input;
                    break;
                case year:
                    firstInput.value = ConvertTime.monthToYear(input);
                    break;
                case decade:
                    firstInput.value = ConvertTime.monthToDecade(input);
                    break;
            }
        } else if (secondUnit.value === year) {
            switch (firstUnit.value) {
                case millisecond:
                    firstInput.value = ConvertTime.yearToMilisecond(input);
                    break;
                case second:
                    firstInput.value = ConvertTime.yearToSecond(input);
                    break;
                case minute:
                    firstInput.value = ConvertTime.yearToMinute(input);
                    break;
                case hour:
                    firstInput.value = ConvertTime.yearToHour(input);
                    break;
                case day:
                    firstInput.value = ConvertTime.yearToDay(input);
                    break;
                case week:
                    firstInput.value = ConvertTime.yearToWeek(input);
                    break;
                case month:
                    firstInput.value = ConvertTime.yearToMonth(input);
                    break;
                case year:
                    firstInput.value = input;
                    break;
                case decade:
                    firstInput.value = ConvertTime.yearToDecade(input);
                    break;
            }
        } else if (secondUnit.value === decade) {
            switch (firstUnit.value) {
                case millisecond:
                    firstInput.value = ConvertTime.decadeToMilisecond(input);
                    break;
                case second:
                    firstInput.value = ConvertTime.decadeToSecond(input);
                    break;
                case minute:
                    firstInput.value = ConvertTime.decadeToMinute(input);
                    break;
                case hour:
                    firstInput.value = ConvertTime.decadeToHour(input);
                    break;
                case day:
                    firstInput.value = ConvertTime.decadeToDay(input);
                    break;
                case week:
                    firstInput.value = ConvertTime.decadeToWeek(input);
                    break;
                case month:
                    firstInput.value = ConvertTime.decadeToMonth(input);
                    break;
                case year:
                    firstInput.value = ConvertTime.decadeToYear(input);
                    break;
                case decade:
                    firstInput.value = input;
                    break;
            }
        }
    }

    firstUnit.addEventListener("change", enterValueTime1);
    secondUnit.addEventListener("change", enterValueTime1);
}
