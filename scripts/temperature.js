import { title, actionSection , closeHamMenu , hideHistory } from "./main.js";
import * as ConvertTemp from "./modules/temp-func.js";

document.querySelector("#Temperature").addEventListener("click", openTempConverter);
function openTempConverter() {
    hideHistory();
    closeHamMenu();
    title.innerText = "Temperature Converter";
    actionSection.className = "action-section converter"
    actionSection.innerHTML = `
            <div class="first-section first-section-temp">
            <select class="first-unit first-unit-temp">
                <option value="Celsius" selected>Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Kelvin">Kelvin</option>
            </select>
            <input type="number" class="first-input first-input-temp" placeholder="enter value">
        </div>

        <div class="second-section second-section-temp">
            <select class="second-unit second-unit-temp">
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit" selected>Fahrenheit</option>
                <option value="Kelvin">Kelvin</option>
            </select>
            <input type="number" class="second-input second-input-temp" placeholder="enter value">
        </div>
    ` ;
    runTemp();
}

function runTemp() {
    const firstUnit = document.querySelector(".first-unit-temp");
    const secondUnit = document.querySelector(".second-unit-temp");
    const firstInput = document.querySelector(".first-input-temp");
    const secondInput = document.querySelector(".second-input-temp");
    const celsius = "Celsius" , kelvin = "Kelvin" , fahrenheit = "Fahrenheit";


    firstInput.addEventListener("keyup", enterValueTemp1);
    function enterValueTemp1() {
        const input = firstInput.value;
        if (input === "") secondInput.value = "";
        else if (firstUnit.value === celsius) {
            switch (secondUnit.value) {
                case celsius:
                    secondInput.value = input;
                    break;
                case fahrenheit:
                    secondInput.value = ConvertTemp.celToFar(input);
                    break;
                case kelvin:
                    console.log(typeof input);
                    secondInput.value = ConvertTemp.celToKel(input);
                    break;
            }
        } else if (firstUnit.value === fahrenheit) {
            switch (secondUnit.value) {
                case celsius:
                    secondInput.value = ConvertTemp.farToCel(input);
                    break;
                case fahrenheit:
                    secondInput.value = input;
                    break;
                case kelvin:
                    secondInput.value = ConvertTemp.farToKel(input);
                    break;
            }
        } else if (firstUnit.value === kelvin) {
            switch (secondUnit.value) {
                case celsius:
                    secondInput.value = ConvertTemp.kelToCel(input);
                    break;
                case fahrenheit:
                    secondInput.value = ConvertTemp.kelToFar(input);
                    break;
                case kelvin:
                    secondInput.value = input;
                    break;
            }
        }  
    }

    secondInput.addEventListener("keyup", enterValueTemp2);
    function enterValueTemp2() {
        const input = secondInput.value;
        if (input === "") firstInput.value = "";
        else if (secondUnit.value === celsius) {
            switch (firstUnit.value) {
                case celsius:
                    firstInput.value = input;
                    break;
                case fahrenheit:
                    firstInput.value = ConvertTemp.celToFar(input);
                    break;
                case kelvin:
                    firstInput.value = ConvertTemp.celToKel(input);
                    break;
            }
        } else if (secondUnit.value === fahrenheit) {
            switch (firstUnit.value) {
                case celsius:
                    firstInput.value = ConvertTemp.farToCel(input);
                    break;
                case fahrenheit:
                    firstInput.value = input;
                    break;
                case kelvin:
                    firstInput.value = ConvertTemp.farToKel(input);
                    break;
            }
        } else if (secondUnit.value === kelvin) {
            switch (firstUnit.value) {
                case celsius:
                    firstInput.value = ConvertTemp.kelToCel(input);
                    break;
                case fahrenheit:
                    firstInput.value = ConvertTemp.kelToFar(input);
                    break;
                case kelvin:
                    firstInput.value = input;
                    break;
            }
        }  
    }

    firstUnit.addEventListener("change", enterValueTemp1);
    secondUnit.addEventListener("change", enterValueTemp1);
}