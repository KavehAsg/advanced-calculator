import { title, actionSection , closeHamMenu , hideHistory} from "./main.js";
import * as ConvertLength from "./modules/length-func.js";

document.querySelector("#Length").addEventListener("click", openLengthConverter);
function openLengthConverter() {
    hideHistory();
    closeHamMenu();
    title.innerText = "Length Converter";
    actionSection.className = "action-section converter"
    actionSection.innerHTML = `
            <div class="first-section first-section-len">
            <select class="first-unit first-unit-len">
                <option value="Nanometers" selected>Nanometers</option>
                <option value="Micrometers">Micrometers</option>
                <option value="Millimeters">Millimeters</option>
                <option value="Centimeters">Centimeters</option>
                <option value="Meters">Meters</option>
                <option value="Kilometers">Kilometers</option>
                <option value="Inches">Inches</option>
                <option value="Feet">Feet</option>
                <option value="Yards">Yards</option>
                <option value="Miles">Miles</option>
            </select>
            <input type="number" class="first-input first-input-len" placeholder="enter value">
        </div>

        <div class="second-section second-section-len">
            <select class="second-unit second-unit-len">
                <option value="Nanometers">Nanometers</option>
                <option value="Micrometers" selected>Micrometers</option>
                <option value="Millimeters">Millimeters</option>
                <option value="Centimeters">Centimeters</option>
                <option value="Meters">Meters</option>
                <option value="Kilometers">Kilometers</option>
                <option value="Inches">Inches</option>
                <option value="Feet">Feet</option>
                <option value="Yards">Yards</option>
                <option value="Miles">Miles</option>
            </select>
            <input type="number" class="second-input second-input-len" placeholder="enter value">
        </div>
    ` ;
    runLength();
}

function runLength() {

    const firstUnit = document.querySelector(".first-unit-len");
    const secondUnit = document.querySelector(".second-unit-len");
    const firstInput = document.querySelector(".first-input-len");
    const secondInput = document.querySelector(".second-input-len");
    const nanometers = "Nanometers", micrometers = "Micrometers", milimeters = "Millimeters",
        centimeters = "Centimeters", meters = "Meters", kilometers = "Kilometers",
        inches = "Inches", feet = "Feet", yards = "Yards", miles = "Miles";


    firstInput.addEventListener("keyup", enterValueLen1);
    function enterValueLen1() {
        const input = firstInput.value;
        if (input === "") secondInput.value = "";
        else if (firstUnit.value === nanometers) {
            switch (secondUnit.value) {
                case nanometers:
                    secondInput.value = input;
                    break;
                case micrometers:
                    secondInput.value = ConvertLength.nanoToMicrometer(input);
                    break;
                case milimeters:
                    secondInput.value = ConvertLength.nanoToMilimeter(input);
                    break;
                case centimeters:
                    secondInput.value = ConvertLength.nanoToCentimeter(input);
                    break;
                case meters:
                    secondInput.value = ConvertLength.nanoToMeter(input);
                    break;
                case kilometers:
                    secondInput.value = ConvertLength.nanoToKilometer(input);
                    break;
                case inches:
                    secondInput.value = ConvertLength.nanoToInche(input);
                    break;
                case yards:
                    secondInput.value = ConvertLength.nanoToYard(input);
                    break;
                case feet:
                    secondInput.value = ConvertLength.nanoTofeet(input);
                    break;
                case miles:
                    secondInput.value = ConvertLength.nanoToMile(input);
                    break;
            }
        } else if (firstUnit.value === micrometers) {
            switch (secondUnit.value) {
                case nanometers:
                    secondInput.value = ConvertLength.microToNanometer(input);
                    break;
                case micrometers:
                    secondInput.value = input;
                    break;
                case milimeters:
                    secondInput.value = ConvertLength.microToMilimeter(input);
                    break;
                case centimeters:
                    secondInput.value = ConvertLength.microToCentimeter(input);
                    break;
                case meters:
                    secondInput.value = ConvertLength.microToMeter(input);
                    break;
                case kilometers:
                    secondInput.value = ConvertLength.microToKilometer(input);
                    break;
                case inches:
                    secondInput.value = ConvertLength.microToInche(input);
                    break;
                case yards:
                    secondInput.value = ConvertLength.microToYard(input);
                    break;
                case feet:
                    secondInput.value = ConvertLength.microTofeet(input);
                    break;
                case miles:
                    secondInput.value = ConvertLength.microToMile(input);
                    break;
            }
        } else if (firstUnit.value === milimeters) {
            switch (secondUnit.value) {
                case nanometers:
                    secondInput.value = ConvertLength.miliToNanometer(input);
                    break;
                case micrometers:
                    secondInput.value = ConvertLength.miliToMicrometer(input);
                    break;
                case milimeters:
                    secondInput.value = input;
                    break;
                case centimeters:
                    secondInput.value = ConvertLength.miliToCentimeter(input);
                    break;
                case meters:
                    secondInput.value = ConvertLength.miliToMeter(input);
                    break;
                case kilometers:
                    secondInput.value = ConvertLength.miliToKilometer(input);
                    break;
                case inches:
                    secondInput.value = ConvertLength.miliToInche(input);
                    break;
                case yards:
                    secondInput.value = ConvertLength.miliToYard(input);
                    break;
                case feet:
                    secondInput.value = ConvertLength.miliTofeet(input);
                    break;
                case miles:
                    secondInput.value = ConvertLength.miliToMile(input);
                    break;
            }
        } else if (firstUnit.value === centimeters) {
            switch (secondUnit.value) {
                case nanometers:
                    secondInput.value = ConvertLength.centiToNanometer(input);
                    break;
                case micrometers:
                    secondInput.value = ConvertLength.centiToMicrometer(input);
                    break;
                case milimeters:
                    secondInput.value = ConvertLength.centiToMilimeter(input);
                    break;
                case centimeters:
                    secondInput.value = input;
                    break;
                case meters:
                    secondInput.value = ConvertLength.centiToMeter(input);
                    break;
                case kilometers:
                    secondInput.value = ConvertLength.centiToKilometer(input);
                    break;
                case inches:
                    secondInput.value = ConvertLength.centiToInche(input);
                    break;
                case yards:
                    secondInput.value = ConvertLength.centiToYard(input);
                    break;
                case feet:
                    secondInput.value = ConvertLength.centiTofeet(input);
                    break;
                case miles:
                    secondInput.value = ConvertLength.centiToMile(input);
                    break;
            }
        } else if (firstUnit.value === meters) {
            switch (secondUnit.value) {
                case nanometers:
                    secondInput.value = ConvertLength.meterToNanometer(input);
                    break;
                case micrometers:
                    secondInput.value = ConvertLength.meterToMicrometer(input);
                    break;
                case milimeters:
                    secondInput.value = ConvertLength.meterToMilimeter(input);
                    break;
                case centimeters:
                    secondInput.value = ConvertLength.meterToCentimeter(input);
                    break;
                case meters:
                    secondInput.value = input;
                    break;
                case kilometers:
                    secondInput.value = ConvertLength.meterToKilometer(input);
                    break;
                case inches:
                    secondInput.value = ConvertLength.meterToInche(input);
                    break;
                case yards:
                    secondInput.value = ConvertLength.meterToYard(input);
                    break;
                case feet:
                    secondInput.value = ConvertLength.meterTofeet(input);
                    break;
                case miles:
                    secondInput.value = ConvertLength.meterToMile(input);
                    break;
            }
        } else if (firstUnit.value === kilometers) {
            switch (secondUnit.value) {
                case nanometers:
                    secondInput.value = ConvertLength.kiloToNanometer(input);
                    break;
                case micrometers:
                    secondInput.value = ConvertLength.kiloToMicrometer(input);
                    break;
                case milimeters:
                    secondInput.value = ConvertLength.kiloToMilimeter(input);
                    break;
                case centimeters:
                    secondInput.value = ConvertLength.kiloToCentimeter(input);
                    break;
                case meters:
                    secondInput.value = ConvertLength.kiloToMeter(input);
                    break;
                case kilometers:
                    secondInput.value = input;
                    break;
                case inches:
                    secondInput.value = ConvertLength.kiloToInche(input);
                    break;
                case yards:
                    secondInput.value = ConvertLength.kiloToYard(input);
                    break;
                case feet:
                    secondInput.value = ConvertLength.kiloTofeet(input);
                    break;
                case miles:
                    secondInput.value = ConvertLength.kiloToMile(input);
                    break;
            }
        } else if (firstUnit.value === inches) {
            switch (secondUnit.value) {
                case nanometers:
                    secondInput.value = ConvertLength.incheToNanometer(input);
                    break;
                case micrometers:
                    secondInput.value = ConvertLength.incheToMicrometer(input);
                    break;
                case milimeters:
                    secondInput.value = ConvertLength.incheToMilimeter(input);
                    break;
                case centimeters:
                    secondInput.value = ConvertLength.incheToCentimeter(input);
                    break;
                case meters:
                    secondInput.value = ConvertLength.incheToMeter(input);
                    break;
                case kilometers:
                    secondInput.value = ConvertLength.incheToKilometer(input);
                    break;
                case inches:
                    secondInput.value = input;
                    break;
                case yards:
                    secondInput.value = ConvertLength.incheToYard(input);
                    break;
                case feet:
                    secondInput.value = ConvertLength.incheTofeet(input);
                    break;
                case miles:
                    secondInput.value = ConvertLength.incheToMile(input);
                    break;
            }
        } else if (firstUnit.value === feet) {
            switch (secondUnit.value) {
                case nanometers:
                    secondInput.value = ConvertLength.feetToNanometer(input);
                    break;
                case micrometers:
                    secondInput.value = ConvertLength.feetToMicrometer(input);
                    break;
                case milimeters:
                    secondInput.value = ConvertLength.feetToMilimeter(input);
                    break;
                case centimeters:
                    secondInput.value = ConvertLength.feetToCentimeter(input);
                    break;
                case meters:
                    secondInput.value = ConvertLength.feetToMeter(input);
                    break;
                case kilometers:
                    secondInput.value = ConvertLength.feetToKilometer(input);
                    break;
                case inches:
                    secondInput.value = ConvertLength.feetToInche(input);
                    break;
                case yards:
                    secondInput.value = ConvertLength.feetToYard(input);
                    break;
                case feet:
                    secondInput.value = input;
                    break;
                case miles:
                    secondInput.value = ConvertLength.feetToMile(input);
                    break;
            }
        } else if (firstUnit.value === yards) {
            switch (secondUnit.value) {
                case nanometers:
                    secondInput.value = ConvertLength.yardToNanometer(input);
                    break;
                case micrometers:
                    secondInput.value = ConvertLength.yardToMicrometer(input);
                    break;
                case milimeters:
                    secondInput.value = ConvertLength.yardToMilimeter(input);
                    break;
                case centimeters:
                    secondInput.value = ConvertLength.yardToCentimeter(input);
                    break;
                case meters:
                    secondInput.value = ConvertLength.yardToMeter(input);
                    break;
                case kilometers:
                    secondInput.value = ConvertLength.yardToKilometer(input);
                    break;
                case inches:
                    secondInput.value = ConvertLength.yardToInche(input);
                    break;
                case yards:
                    secondInput.value = input;
                    break;
                case feet:
                    secondInput.value = ConvertLength.yardToFeet(input);
                    break;
                case miles:
                    secondInput.value = ConvertLength.yardToMile(input);
                    break;
            }
        } else if (firstUnit.value === miles) {
            switch (secondUnit.value) {
                case nanometers:
                    secondInput.value = ConvertLength.mileToNanometer(input);
                    break;
                case micrometers:
                    secondInput.value = ConvertLength.mileToMicrometer(input);
                    break;
                case milimeters:
                    secondInput.value = ConvertLength.mileToMilimeter(input);
                    break;
                case centimeters:
                    secondInput.value = ConvertLength.mileToCentimeter(input);
                    break;
                case meters:
                    secondInput.value = ConvertLength.mileToMeter(input);
                    break;
                case kilometers:
                    secondInput.value = ConvertLength.mileToKilometer(input);
                    break;
                case inches:
                    secondInput.value = ConvertLength.mileToInche(input);
                    break;
                case yards:
                    secondInput.value = ConvertLength.mileToYard(input);
                    break;
                case feet:
                    secondInput.value = ConvertLength.mileToFeet(input);
                    break;
                case miles:
                    secondInput.value = input;
                    break;
            }
        }
    }

    secondInput.addEventListener("keyup", enterValueLen2);
    function enterValueLen2() {
        const input = secondInput.value;
        if (input === "") firstInput.value = "";
        else if (secondUnit.value === nanometers) {
            switch (firstUnit.value) {
                case nanometers:
                    firstInput.value = input;
                    break;
                case micrometers:
                    firstInput.value = ConvertLength.nanoToMicrometer(input);
                    break;
                case milimeters:
                    firstInput.value = ConvertLength.nanoToMilimeter(input);
                    break;
                case centimeters:
                    firstInput.value = ConvertLength.nanoToCentimeter(input);
                    break;
                case meters:
                    firstInput.value = ConvertLength.nanoToMeter(input);
                    break;
                case kilometers:
                    firstInput.value = ConvertLength.nanoToKilometer(input);
                    break;
                case inches:
                    firstInput.value = ConvertLength.nanoToInche(input);
                    break;
                case yards:
                    firstInput.value = ConvertLength.nanoToYard(input);
                    break;
                case feet:
                    firstInput.value = ConvertLength.nanoTofeet(input);
                    break;
                case miles:
                    firstInput.value = ConvertLength.nanoToMile(input);
                    break;
            }
        } else if (secondUnit.value === micrometers) {
            switch (firstUnit.value) {
                case nanometers:
                    firstInput.value = ConvertLength.microToNanometer(input);
                    break;
                case micrometers:
                    firstInput.value = input;
                    break;
                case milimeters:
                    firstInput.value = ConvertLength.microToMilimeter(input);
                    break;
                case centimeters:
                    firstInput.value = ConvertLength.microToCentimeter(input);
                    break;
                case meters:
                    firstInput.value = ConvertLength.microToMeter(input);
                    break;
                case kilometers:
                    firstInput.value = ConvertLength.microToKilometer(input);
                    break;
                case inches:
                    firstInput.value = ConvertLength.microToInche(input);
                    break;
                case yards:
                    firstInput.value = ConvertLength.microToYard(input);
                    break;
                case feet:
                    firstInput.value = ConvertLength.microTofeet(input);
                    break;
                case miles:
                    firstInput.value = ConvertLength.microToMile(input);
                    break;
            }
        } else if (secondUnit.value === milimeters) {
            switch (firstUnit.value) {
                case nanometers:
                    firstInput.value = ConvertLength.miliToNanometer(input);
                    break;
                case micrometers:
                    firstInput.value = ConvertLength.miliToMicrometer(input);
                    break;
                case milimeters:
                    firstInput.value = input;
                    break;
                case centimeters:
                    firstInput.value = ConvertLength.miliToCentimeter(input);
                    break;
                case meters:
                    firstInput.value = ConvertLength.miliToMeter(input);
                    break;
                case kilometers:
                    firstInput.value = ConvertLength.miliToKilometer(input);
                    break;
                case inches:
                    firstInput.value = ConvertLength.miliToInche(input);
                    break;
                case yards:
                    firstInput.value = ConvertLength.miliToYard(input);
                    break;
                case feet:
                    firstInput.value = ConvertLength.miliTofeet(input);
                    break;
                case miles:
                    firstInput.value = ConvertLength.miliToMile(input);
                    break;
            }
        } else if (secondUnit.value === centimeters) {
            switch (firstUnit.value) {
                case nanometers:
                    firstInput.value = ConvertLength.centiToNanometer(input);
                    break;
                case micrometers:
                    firstInput.value = ConvertLength.centiToMicrometer(input);
                    break;
                case milimeters:
                    firstInput.value = ConvertLength.centiToMilimeter(input);
                    break;
                case centimeters:
                    firstInput.value = input;
                    break;
                case meters:
                    firstInput.value = ConvertLength.centiToMeter(input);
                    break;
                case kilometers:
                    firstInput.value = ConvertLength.centiToKilometer(input);
                    break;
                case inches:
                    firstInput.value = ConvertLength.centiToInche(input);
                    break;
                case yards:
                    firstInput.value = ConvertLength.centiToYard(input);
                    break;
                case feet:
                    firstInput.value = ConvertLength.centiTofeet(input);
                    break;
                case miles:
                    firstInput.value = ConvertLength.centiToMile(input);
                    break;
            }
        } else if (secondUnit.value === meters) {
            switch (firstUnit.value) {
                case nanometers:
                    firstInput.value = ConvertLength.meterToNanometer(input);
                    break;
                case micrometers:
                    firstInput.value = ConvertLength.meterToMicrometer(input);
                    break;
                case milimeters:
                    firstInput.value = ConvertLength.meterToMilimeter(input);
                    break;
                case centimeters:
                    firstInput.value = ConvertLength.meterToCentimeter(input);
                    break;
                case meters:
                    firstInput.value = input;
                    break;
                case kilometers:
                    firstInput.value = ConvertLength.meterToKilometer(input);
                    break;
                case inches:
                    firstInput.value = ConvertLength.meterToInche(input);
                    break;
                case yards:
                    firstInput.value = ConvertLength.meterToYard(input);
                    break;
                case feet:
                    firstInput.value = ConvertLength.meterTofeet(input);
                    break;
                case miles:
                    firstInput.value = ConvertLength.meterToMile(input);
                    break;
            }
        } else if (secondUnit.value === kilometers) {
            switch (firstUnit.value) {
                case nanometers:
                    firstInput.value = ConvertLength.kiloToNanometer(input);
                    break;
                case micrometers:
                    firstInput.value = ConvertLength.kiloToMicrometer(input);
                    break;
                case milimeters:
                    firstInput.value = ConvertLength.kiloToMilimeter(input);
                    break;
                case centimeters:
                    firstInput.value = ConvertLength.kiloToCentimeter(input);
                    break;
                case meters:
                    firstInput.value = ConvertLength.kiloToMeter(input);
                    break;
                case kilometers:
                    firstInput.value = input;
                    break;
                case inches:
                    firstInput.value = ConvertLength.kiloToInche(input);
                    break;
                case yards:
                    firstInput.value = ConvertLength.kiloToYard(input);
                    break;
                case feet:
                    firstInput.value = ConvertLength.kiloTofeet(input);
                    break;
                case miles:
                    firstInput.value = ConvertLength.kiloToMile(input);
                    break;
            }
        } else if (secondUnit.value === inches) {
            switch (firstUnit.value) {
                case nanometers:
                    firstInput.value = ConvertLength.incheToNanometer(input);
                    break;
                case micrometers:
                    firstInput.value = ConvertLength.incheToMicrometer(input);
                    break;
                case milimeters:
                    firstInput.value = ConvertLength.incheToMilimeter(input);
                    break;
                case centimeters:
                    firstInput.value = ConvertLength.incheToCentimeter(input);
                    break;
                case meters:
                    firstInput.value = ConvertLength.incheToMeter(input);
                    break;
                case kilometers:
                    firstInput.value = ConvertLength.incheToKilometer(input);
                    break;
                case inches:
                    firstInput.value = input;
                    break;
                case yards:
                    firstInput.value = ConvertLength.incheToYard(input);
                    break;
                case feet:
                    firstInput.value = ConvertLength.incheTofeet(input);
                    break;
                case miles:
                    firstInput.value = ConvertLength.incheToMile(input);
                    break;
            }
        } else if (secondUnit.value === feet) {
            switch (firstUnit.value) {
                case nanometers:
                    firstInput.value = ConvertLength.feetToNanometer(input);
                    break;
                case micrometers:
                    firstInput.value = ConvertLength.feetToMicrometer(input);
                    break;
                case milimeters:
                    firstInput.value = ConvertLength.feetToMilimeter(input);
                    break;
                case centimeters:
                    firstInput.value = ConvertLength.feetToCentimeter(input);
                    break;
                case meters:
                    firstInput.value = ConvertLength.feetToMeter(input);
                    break;
                case kilometers:
                    firstInput.value = ConvertLength.feetToKilometer(input);
                    break;
                case inches:
                    firstInput.value = ConvertLength.feetToInche(input);
                    break;
                case yards:
                    firstInput.value = ConvertLength.feetToYard(input);
                    break;
                case feet:
                    firstInput.value = input;
                    break;
                case miles:
                    firstInput.value = ConvertLength.feetToMile(input);
                    break;
            }
        } else if (secondUnit.value === yards) {
            switch (firstUnit.value) {
                case nanometers:
                    firstInput.value = ConvertLength.yardToNanometer(input);
                    break;
                case micrometers:
                    firstInput.value = ConvertLength.yardToMicrometer(input);
                    break;
                case milimeters:
                    firstInput.value = ConvertLength.yardToMilimeter(input);
                    break;
                case centimeters:
                    firstInput.value = ConvertLength.yardToCentimeter(input);
                    break;
                case meters:
                    firstInput.value = ConvertLength.yardToMeter(input);
                    break;
                case kilometers:
                    firstInput.value = ConvertLength.yardToKilometer(input);
                    break;
                case inches:
                    firstInput.value = ConvertLength.yardToInche(input);
                    break;
                case yards:
                    firstInput.value = input;
                    break;
                case feet:
                    firstInput.value = ConvertLength.yardToFeet(input);
                    break;
                case miles:
                    firstInput.value = ConvertLength.yardToMile(input);
                    break;
            }
        } else if (secondUnit.value === miles) {
            switch (firstUnit.value) {
                case nanometers:
                    firstInput.value = ConvertLength.mileToNanometer(input);
                    break;
                case micrometers:
                    firstInput.value = ConvertLength.mileToMicrometer(input);
                    break;
                case milimeters:
                    firstInput.value = ConvertLength.mileToMilimeter(input);
                    break;
                case centimeters:
                    firstInput.value = ConvertLength.mileToCentimeter(input);
                    break;
                case meters:
                    firstInput.value = ConvertLength.mileToMeter(input);
                    break;
                case kilometers:
                    firstInput.value = ConvertLength.mileToKilometer(input);
                    break;
                case inches:
                    firstInput.value = ConvertLength.mileToInche(input);
                    break;
                case yards:
                    firstInput.value = ConvertLength.mileToYard(input);
                    break;
                case feet:
                    firstInput.value = ConvertLength.mileToFeet(input);
                    break;
                case miles:
                    firstInput.value = input;
                    break;
            }
        }
    }

    firstUnit.addEventListener("change", enterValueLen1);
    secondUnit.addEventListener("change", enterValueLen1);

}
