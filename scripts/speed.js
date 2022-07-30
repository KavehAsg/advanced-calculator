import { title, actionSection , closeHamMenu , hideHistory } from "./main.js";
import * as ConvertSpeed from "./modules/speed-func.js";

document.querySelector("#Speed").addEventListener("click", openSpeedConverter);
function openSpeedConverter() {
    hideHistory();
    closeHamMenu();
    title.innerText = "Speed Converter";
    actionSection.className = "action-section converter"
    actionSection.innerHTML = `
            <div class="first-section first-section-spd">
            <select class="first-unit first-unit-spd">
                <option value="Meters-second" selected>Meters per second</option>
                <option value="Kilometers-hour">Kilometers per hour</option>
                <option value="Feet-second">Feet per second</option>
                <option value="Miles-hour">Miles per hour</option>
            </select>
            <input type="number" class="first-input first-input-spd" placeholder="enter value">
        </div>

        <div class="second-section second-section-spd">
            <select class="second-unit second-unit-spd">
                <option value="Meters-second">Meters per second</option>
                <option value="Kilometers-hour" selected>Kilometers per hour</option>
                <option value="Feet-second">Feet per second</option>
                <option value="Miles-hour">Miles per hour</option>
            </select>
            <input type="number" class="second-input second-input-spd" placeholder="enter value">
        </div>
    ` ;
    runSpeed();
}

function runSpeed() {
    const firstUnit = document.querySelector(".first-unit-spd");
    const secondUnit = document.querySelector(".second-unit-spd");
    const firstInput = document.querySelector(".first-input-spd");
    const secondInput = document.querySelector(".second-input-spd");
    const meter = "Meters-second" , kilometer = "Kilometers-hour" , feet = "Feet-second" , mile = "Miles-hour";


    firstInput.addEventListener("keyup", enterValueSpd1);
    function enterValueSpd1() {
        const input = firstInput.value;
        if (input === "") secondInput.value = "";
        else if (firstUnit.value === meter) {
            switch (secondUnit.value) {
                case meter:
                    secondInput.value = input;
                    break;
                case kilometer:
                    secondInput.value = ConvertSpeed.meterToKiloSpd(input);
                    break;
                case feet:
                    secondInput.value = ConvertSpeed.meterToFeetSpd(input);
                    break;
                case mile:
                    secondInput.value = ConvertSpeed.meterToMileSpd(input);
                    break;
            }
        } else if (firstUnit.value === kilometer) {
            switch (secondUnit.value) {
                case meter:
                    secondInput.value = ConvertSpeed.kiloToMeterSpd(input);
                    break;
                case kilometer:
                    secondInput.value = input;
                    break;
                case feet:
                    secondInput.value = ConvertSpeed.kiloToFeetSpd(input);
                    break;
                case mile:
                    secondInput.value = ConvertSpeed.kiloToMileSpd(input);
                    break;
            }
        } else if (firstUnit.value === feet) {
            switch (secondUnit.value) {
                case meter:
                    secondInput.value = ConvertSpeed.feetToMeterSpd(input);
                    break;
                case kilometer:
                    secondInput.value = ConvertSpeed.feetToKiloSpd(input);
                    break;
                case feet:
                    secondInput.value = input;
                    break;
                case mile:
                    secondInput.value = ConvertSpeed.feetToMileSpd(input);
                    break;
            }
        } else if (firstUnit.value === mile) {
            switch (secondUnit.value) {
                case meter:
                    secondInput.value = ConvertSpeed.mileToMeterSpd(input);
                    break;
                case kilometer:
                    secondInput.value = ConvertSpeed.mileToKiloSpd(input);
                    break;
                case feet:
                    secondInput.value = ConvertSpeed.mileTofeetSpd(input);
                    break;
                case mile:
                    secondInput.value = input;
                    break;
            }
        } 
    }
    
    secondInput.addEventListener("keyup", enterValueSpd2);
    function enterValueSpd2() {
        const input = secondInput.value;
        if (input === "") firstInput.value = "";
        else if (secondUnit.value === meter) {
            switch (firstUnit.value) {
                case meter:
                    firstInput.value = input;
                    break;
                case kilometer:
                    firstInput.value = ConvertSpeed.meterToKiloSpd(input);
                    break;
                case feet:
                    firstInput.value = ConvertSpeed.meterToFeetSpd(input);
                    break;
                case mile:
                    firstInput.value = ConvertSpeed.meterToMileSpd(input);
                    break;
            }
        } else if (secondUnit.value === kilometer) {
            switch (firstUnit.value) {
                case meter:
                    firstInput.value = ConvertSpeed.kiloToMeterSpd(input);
                    break;
                case kilometer:
                    firstInput.value = input;
                    break;
                case feet:
                    firstInput.value = ConvertSpeed.kiloToFeetSpd(input);
                    break;
                case mile:
                    firstInput.value = ConvertSpeed.kiloToMileSpd(input);
                    break;
            }
        } else if (secondUnit.value === feet) {
            switch (firstUnit.value) {
                case meter:
                    firstInput.value = ConvertSpeed.feetToMeterSpd(input);
                    break;
                case kilometer:
                    firstInput.value = ConvertSpeed.feetToKiloSpd(input);
                    break;
                case feet:
                    firstInput.value = input;
                    break;
                case mile:
                    firstInput.value = ConvertSpeed.feetToMileSpd(input);
                    break;
            }
        } else if (secondUnit.value === mile) {
            switch (firstUnit.value) {
                case meter:
                    firstInput.value = ConvertSpeed.mileToMeterSpd(input);
                    break;
                case kilometer:
                    firstInput.value = ConvertSpeed.mileToKiloSpd(input);
                    break;
                case feet:
                    firstInput.value = ConvertSpeed.mileTofeetSpd(input);
                    break;
                case mile:
                    firstInput.value = input;
                    break;
            }
        } 
    }

    firstUnit.addEventListener("change", enterValueSpd1);
    secondUnit.addEventListener("change", enterValueSpd1);
}