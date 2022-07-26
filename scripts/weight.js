import { title, actionSection } from "./main.js";
import {nanoToMicrometer , nanoToMilimeter , nanoToCentimeter , nanoToMeter , nanoToKilometer , 
        nanoToInche , nanoTofeet , nanoToYard , nanoToMile} from "./modules/weight-func.js"

document.querySelector("#Weight").addEventListener("click", openWeightConverter);
function openWeightConverter() {
    title.innerText = "Weight Converter";
    actionSection.className = "action-section weight"
    actionSection.innerHTML = `
    <div class="first-section">
            <select id="first-unit">
                <option value="Nanometers">Nanometers</option>
                <option value="Micrometers">Micrometers</option>
                <option value="Milimeters">Milimeters</option>
                <option value="Centimeters">Centimeters</option>
                <option value="Meters">Meters</option>
                <option value="Kilometers">Kilometers</option>
                <option value="Inches">Inches</option>
                <option value="Feet">Feet</option>
                <option value="Yards">Yards</option>
                <option value="Miles">Miles</option>
            </select>
            <input type="number" class="first-input" placeholder="enter value">
           </div>

           <div class="second-section">
            <select id="second-unit">
                <option value="Nanometers">Nanometers</option>
                <option value="Micrometers">Micrometers</option>
                <option value="Milimeters">Milimeters</option>
                <option value="Centimeters">Centimeters</option>
                <option value="Meters">Meters</option>
                <option value="Kilometers">Kilometers</option>
                <option value="Inches">Inches</option>
                <option value="Feet">Feet</option>
                <option value="Yards">Yards</option>
                <option value="Miles">Miles</option>
            </select>
            <input type="number" class="second-input" placeholder="enter value">
           </div>
    ` ;

    runWeightConverter();
}

function runWeightConverter(){
    const firstUnit = document.querySelector("#first-unit");
    const SecondUnit = document.querySelector("#second-unit");
    // const firstInput = documnet.querySelector(".first-input");
    const secondInput = documnet.querySelector(".second-input");
    const nanometers = "Nanometers" , micrometers = "Micrometers" , milimeters = "Milimeters" ,
          centimeters = "Centimeters" , meters =  "Meters" , kilometers = "Kilometers" , 
          inches = "Inches" , feet = "Feet" , yards = "Yards" , miles = "Miles";

    firstInput.addEventListener("keyDown" , enterValue1);
    function enterValue1(){
        if(firstUnit.value === nanometers){
            switch (SecondUnit.value){
                case nanometers :
                    secondInput.value = firstInput.value;
                    break;
                case micrometers :
                    secondInput.value = nanoToMicrometer(firstInput.value);
                    break;
                case milimeters :
                    secondInput.value = nanoToMilimeter(firstInput.vlaue)
                    break;        
            }
        }
    }
}