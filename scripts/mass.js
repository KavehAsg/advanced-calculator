import { title, actionSection , closeHamMenu , hideHistory} from "./main.js";
import * as ConvertMass from "./modules/mass-func.js";

document.querySelector("#Mass").addEventListener("click", openMassConverter);
function openMassConverter() {
    hideHistory();
    closeHamMenu();
    title.innerText = "Weight and Mass Converter";
    actionSection.className = "action-section converter"
    actionSection.innerHTML = `
            <div class="first-section first-section-mass">
            <select class="first-unit first-unit-mass">
                <option value="Milligram" selected>Milligram</option>
                <option value="Gram">Gram</option>
                <option value="Kilogram">Kilogram</option>
                <option value="Tonne">Tonne</option>
                <option value="Pound">Pound</option>
                <option value="Ounce">Ounce</option>
            </select>
            <input type="number" class="first-input first-input-mass" placeholder="enter value">
        </div>

        <div class="second-section second-section-mass">
            <select class="second-unit second-unit-mass">
                <option value="Milligram">Milligram</option>
                <option value="Gram" selected>Gram</option>
                <option value="Kilogram">Kilogram</option>
                <option value="Tonne">Tonne</option>
                <option value="Pound">Pound</option>
                <option value="Ounce">Ounce</option>
            </select>
            <input type="number" class="second-input second-input-mass" placeholder="enter value">
        </div>
    ` ;
    runMass();
}

function runMass() {
    const firstUnit = document.querySelector(".first-unit-mass");
    const secondUnit = document.querySelector(".second-unit-mass");
    const firstInput = document.querySelector(".first-input-mass");
    const secondInput = document.querySelector(".second-input-mass");
    const milligram = "Milligram", gram = "Gram", kilogram = "Kilogram", tonne = "Tonne",
        pound = "Pound", ounce = "Ounce";


    firstInput.addEventListener("keyup", enterValueMass1);
    function enterValueMass1() {
        const input = firstInput.value;
        if (input === "") secondInput.value = "";
        else if (firstUnit.value === milligram) {
            switch (secondUnit.value) {
                case milligram:
                    secondInput.value = input;
                    break;
                case gram:
                    secondInput.value = ConvertMass.miliToGram(input);
                    break;
                case kilogram:
                    secondInput.value = ConvertMass.miliToKilogram(input);
                    break;
                case tonne:
                    secondInput.value = ConvertMass.miliToTonne(input);
                    break;
                case pound:
                    secondInput.value = ConvertMass.miliToPound(input);
                    break;
                case ounce:
                    secondInput.value = ConvertMass.miliToOunce(input);
                    break;
            }
        } else if (firstUnit.value === gram) {
            switch (secondUnit.value) {
                case milligram:
                    secondInput.value = ConvertMass.gramToMilligram(input);
                    break;
                case gram:
                    secondInput.value = input;
                    break;
                case kilogram:
                    secondInput.value = ConvertMass.gramToKilogram(input);
                    break;
                case tonne:
                    secondInput.value = ConvertMass.gramToTonne(input);
                    break;
                case pound:
                    secondInput.value = ConvertMass.gramToPound(input);
                    break;
                case ounce:
                    secondInput.value = ConvertMass.gramToOunce(input);
                    break;
            }
        } else if (firstUnit.value === kilogram) {
            switch (secondUnit.value) {
                case milligram:
                    secondInput.value = ConvertMass.kiloToMilligram(input);
                    break;
                case gram:
                    secondInput.value = ConvertMass.kiloToGram(input);
                    break;
                case kilogram:
                    secondInput.value = input;
                    break;
                case tonne:
                    secondInput.value = ConvertMass.kiloToTonne(input);
                    break;
                case pound:
                    secondInput.value = ConvertMass.kiloToPound(input);
                    break;
                case ounce:
                    secondInput.value = ConvertMass.kiloToOunce(input);
                    break;
            }
        } else if (firstUnit.value === tonne) {
            switch (secondUnit.value) {
                case milligram:
                    secondInput.value = ConvertMass.tonneToMilligram(input);
                    break;
                case gram:
                    secondInput.value = ConvertMass.tonneToGram(input);
                    break;
                case kilogram:
                    secondInput.value = ConvertMass.tonneToKilogram(input);
                    break;
                case tonne:
                    secondInput.value = input;
                    break;
                case pound:
                    secondInput.value = ConvertMass.tonneToPound(input);
                    break;
                case ounce:
                    secondInput.value = ConvertMass.tonneToOunce(input);
                    break;
            }
        } else if (firstUnit.value === pound) {
            switch (secondUnit.value) {
                case milligram:
                    secondInput.value = ConvertMass.poundToMilligram(input);
                    break;
                case gram:
                    secondInput.value = ConvertMass.poundToGram(input);
                    break;
                case kilogram:
                    secondInput.value = ConvertMass.poundToKilogram(input);
                    break;
                case tonne:
                    secondInput.value = ConvertMass.poundToTonne(input);
                    break;
                case pound:
                    secondInput.value = input;
                    break;
                case ounce:
                    secondInput.value = ConvertMass.poundToOunce(input);
                    break;
            }
        } else if (firstUnit.value === ounce) {
            switch (secondUnit.value) {
                case milligram:
                    secondInput.value = ConvertMass.ounceToMilligram(input);
                    break;
                case gram:
                    secondInput.value = ConvertMass.ounceToGram(input);
                    break;
                case kilogram:
                    secondInput.value = ConvertMass.ounceToKilogram(input);
                    break;
                case tonne:
                    secondInput.value = ConvertMass.ounceToTonne(input);
                    break;
                case pound:
                    secondInput.value = ConvertMass.ounceToPound(input);
                    break;
                case ounce:
                    secondInput.value = input;
                    break;
            }
        }
    }

    secondInput.addEventListener("keyup", enterValueMass2);
    function enterValueMass2() {
        const input = secondInput.value;
        if (input === "") firstInput.value = "";
        else if (secondUnit.value === milligram) {
            switch (firstUnit.value) {
                case milligram:
                    firstInput.value = input;
                    break;
                case gram:
                    firstInput.value = ConvertMass.miliToGram(input);
                    break;
                case kilogram:
                    firstInput.value = ConvertMass.miliToKilogram(input);
                    break;
                case tonne:
                    firstInput.value = ConvertMass.miliToTonne(input);
                    break;
                case pound:
                    firstInput.value = ConvertMass.miliToPound(input);
                    break;
                case ounce:
                    firstInput.value = ConvertMass.miliToOunce(input);
                    break;
            }
        } else if (secondUnit.value === gram) {
            switch (firstUnit.value) {
                case milligram:
                    firstInput.value = ConvertMass.gramToMilligram(input);
                    break;
                case gram:
                    firstInput.value = input;
                    break;
                case kilogram:
                    firstInput.value = ConvertMass.gramToKilogram(input);
                    break;
                case tonne:
                    firstInput.value = ConvertMass.gramToTonne(input);
                    break;
                case pound:
                    firstInput.value = ConvertMass.gramToPound(input);
                    break;
                case ounce:
                    firstInput.value = ConvertMass.gramToOunce(input);
                    break;
            }
        } else if (secondUnit.value === kilogram) {
            switch (firstUnit.value) {
                case milligram:
                    firstInput.value = ConvertMass.kiloToMilligram(input);
                    break;
                case gram:
                    firstInput.value = ConvertMass.kiloToGram(input);
                    break;
                case kilogram:
                    firstInput.value = input;
                    break;
                case tonne:
                    firstInput.value = ConvertMass.kiloToTonne(input);
                    break;
                case pound:
                    firstInput.value = ConvertMass.kiloToPound(input);
                    break;
                case ounce:
                    firstInput.value = ConvertMass.kiloToOunce(input);
                    break;
            }
        } else if (secondUnit.value === tonne) {
            switch (firstUnit.value) {
                case milligram:
                    firstInput.value = ConvertMass.tonneToMilligram(input);
                    break;
                case gram:
                    firstInput.value = ConvertMass.tonneToGram(input);
                    break;
                case kilogram:
                    firstInput.value = ConvertMass.tonneToKilogram(input);
                    break;
                case tonne:
                    firstInput.value = input;
                    break;
                case pound:
                    firstInput.value = ConvertMass.tonneToPound(input);
                    break;
                case ounce:
                    firstInput.value = ConvertMass.tonneToOunce(input);
                    break;
            }
        } else if (secondUnit.value === pound) {
            switch (firstUnit.value) {
                case milligram:
                    firstInput.value = ConvertMass.poundToMilligram(input);
                    break;
                case gram:
                    firstInput.value = ConvertMass.poundToGram(input);
                    break;
                case kilogram:
                    firstInput.value = ConvertMass.poundToKilogram(input);
                    break;
                case tonne:
                    firstInput.value = ConvertMass.poundToTonne(input);
                    break;
                case pound:
                    firstInput.value = input;
                    break;
                case ounce:
                    firstInput.value = ConvertMass.poundToOunce(input);
                    break;
            }
        } else if (secondUnit.value === ounce) {
            switch (firstUnit.value) {
                case milligram:
                    firstInput.value = ConvertMass.ounceToMilligram(input);
                    break;
                case gram:
                    firstInput.value = ConvertMass.ounceToGram(input);
                    break;
                case kilogram:
                    firstInput.value = ConvertMass.ounceToKilogram(input);
                    break;
                case tonne:
                    firstInput.value = ConvertMass.ounceToTonne(input);
                    break;
                case pound:
                    firstInput.value = ConvertMass.ounceToPound(input);
                    break;
                case ounce:
                    firstInput.value = input;
                    break;
            }
        }
    }
    

    firstUnit.addEventListener("change", enterValueMass1);
    secondUnit.addEventListener("change", enterValueMass1);
}