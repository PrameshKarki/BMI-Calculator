// Run script in Strict Mode
"use strict";

//Declare Global Variables
const button = document.getElementById('btn');
const feet = document.getElementById('feet');
const inches = document.getElementById('inches');
const weight = document.getElementById('weight');
const result = document.getElementById('result');

//Add event listeners
button.addEventListener('click', getData);

// Function to get data from the DOM
function getData() {
    let feetValue, inchesValue, weightValue;
    feetValue = +feet.value;
    inchesValue = +inches.value;
    weightValue = +weight.value;
    resetData();

    if (feetValue && inchesValue && weightValue) {
        inchesValue = inchesValue + (feetValue * 12);
        let lengthInMeter = inchesValue * 0.025;
        const BMI = calculateBMI(weightValue, lengthInMeter);
        displayResult(BMI);

    }
    else {
        alert('Please fill all the value');

    }

}

// Function to calculate BMI
function calculateBMI(weightValue, lengthInMeter) {
    let BMI = Math.round(weightValue / Math.pow(lengthInMeter, 2));

    return BMI;
}

// Function to display result
function displayResult(BMIValue) {
    let valueStatus = 19 < BMIValue && BMIValue < 25 ? 1 : 0;
    if (valueStatus) {
        result.style.color = 'green';
    } else {
        result.style.color = 'red';
    }
    result.value = BMIValue;
}

//Function to reset data
function resetData(){
    feet.value="";
    inches.value="";
    weight.value="";
}

// Pramesh Karki