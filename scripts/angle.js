import { title, actionSection , closeHamMenu , hideHistory} from "./main.js";
import * as ConvertAngle from "./modules/angle-func.js";


document.querySelector("#Angle").addEventListener("click", openAngleConverter);
function openAngleConverter() {
    hideHistory();
    closeHamMenu();
    title.innerText = "Angle Converter";
    actionSection.className = "action-section converter"
    actionSection.innerHTML = `
            <div class="first-section first-section-ang">
            <select class="first-unit first-unit-ang">
                <option value="Degrees" selected>Degrees</option>
                <option value="Radians">Radians</option>
                <option value="Gradians">Gradians</option>
            </select>
            <input type="number" class="first-input first-input-ang" placeholder="enter value">
        </div>

        <div class="second-section second-section-ang">
            <select class="second-unit second-unit-ang">
                <option value="Degrees">Degrees</option>
                <option value="Radians" selected>Radians</option>
                <option value="Gradians">Gradians</option>
            </select>
            <input type="number" class="second-input second-input-ang" placeholder="enter value">
        </div>
    ` ;
    runAngle();
}

function runAngle() {
    const firstUnit = document.querySelector(".first-unit-ang");
    const secondUnit = document.querySelector(".second-unit-ang");
    const firstInput = document.querySelector(".first-input-ang");
    const secondInput = document.querySelector(".second-input-ang");
    const degrees = "Degrees" , radians = "Radians" , gradians = "Gradians" ;


    firstInput.addEventListener("keyup", enterValueAng1);
    function enterValueAng1() {
        const input = firstInput.value;
        if (input === "") secondInput.value = "";
        else if (firstUnit.value === degrees) {
            switch (secondUnit.value) {
                case degrees:
                    secondInput.value = input;
                    break;
                case radians:
                    secondInput.value = ConvertAngle.degToRad(input);
                    break;
                case gradians:
                    secondInput.value = ConvertAngle.degToGrad(input);
                    break;
            }
        } else if (firstUnit.value === radians) {
            switch (secondUnit.value) {
                case degrees:
                    secondInput.value = ConvertAngle.radToDeg(input);
                    break;
                case radians:
                    secondInput.value = input;
                    break;
                case gradians:
                    secondInput.value = ConvertAngle.radToGrad(input);
                    break;
            }
        } else if (firstUnit.value === gradians) {
            switch (secondUnit.value) {
                case degrees:
                    secondInput.value = ConvertAngle.gradToDeg(input);
                    break;
                case radians:
                    secondInput.value = ConvertAngle.gradToRad(input);
                    break;
                case gradians:
                    secondInput.value = input;
                    break;
            }
        }
    }

    secondInput.addEventListener("keyup", enterValueAng2);
    function enterValueAng2() {
        const input = secondInput.value;
        if (input === "") firstInput.value = "";
        else if (secondUnit.value === degrees) {
            switch (firstUnit.value) {
                case degrees:
                    firstInput.value = input;
                    break;
                case radians:
                    firstInput.value = ConvertAngle.degToRad(input);
                    break;
                case gradians:
                    firstInput.value = ConvertAngle.degToGrad(input);
                    break;
            }
        } else if (secondUnit.value === radians) {
            switch (firstUnit.value) {
                case degrees:
                    firstInput.value = ConvertAngle.radToDeg(input);
                    break;
                case radians:
                    firstInput.value = input;
                    break;
                case gradians:
                    firstInput.value = ConvertAngle.radToGrad(input);
                    break;
            }
        } else if (secondUnit.value === gradians) {
            switch (firstUnit.value) {
                case degrees:
                    firstInput.value = ConvertAngle.gradToDeg(input);
                    break;
                case radians:
                    firstInput.value = ConvertAngle.gradToRad(input);
                    break;
                case gradians:
                    firstInput.value = input;
                    break;
            }
        }
    }

    firstUnit.addEventListener("change", enterValueAng1);
    secondUnit.addEventListener("change", enterValueAng1);
}