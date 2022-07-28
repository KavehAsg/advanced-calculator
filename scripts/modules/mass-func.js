// convert Milligram to x
export {miliToGram , miliToKilogram , miliToTonne , miliToPound , miliToOunce};

function miliToGram(data) {
    return data / 1000;
}
function miliToKilogram(data) {
    return data / 10**6;
}
function miliToTonne(data) {
    return data / 10**9;
}
function miliToPound(data) {
    return data / (4.536 * (10**5));
}
function miliToOunce(data) {
    return data / (2.835 * (10**4));
}
//-----------------------------------------------------------//


// convert Gram to x
export {gramToMilligram , gramToKilogram , gramToTonne , gramToPound , gramToOunce};

function gramToMilligram(data) {
    return data * 1000;
}
function gramToKilogram(data) {
    return data / 1000;
}
function gramToTonne(data) {
    return data / 10**6;
}
function gramToPound(data) {
    return data / 453.6;
}
function gramToOunce(data) {
    return data / 28.35;
}
//-----------------------------------------------------------//


// convert Kilogram to x
export {kiloToMilligram , kiloToGram , kiloToTonne , kiloToPound , kiloToOunce};

function kiloToMilligram(data) {
    return data * 10**6;
}
function kiloToGram(data) {
    return data * 1000;
}
function kiloToTonne(data) {
    return data / 1000;
}
function kiloToPound(data) {
    return data * 2.205;
}
function kiloToOunce(data) {
    return data * 35.274;
}
//-----------------------------------------------------------//


// convert Tonne to x
export {tonneToMilligram , tonneToGram , tonneToKilogram , tonneToPound , tonneToOunce};

function tonneToMilligram(data) {
    return data * 10**9;
}
function tonneToGram(data) {
    return data * 10**6;
}
function tonneToKilogram(data) {
    return data * 1000;
}
function tonneToPound(data) {
    return data * 2205;
}
function tonneToOunce(data) {
    return data * 35270;
}
//-----------------------------------------------------------//


// convert Pound to x
export {poundToMilligram , poundToGram , poundToKilogram , poundToTonne , poundToOunce};

function poundToMilligram(data) {
    return data * (4.536 * (10**5));
}
function poundToGram(data) {
    return data * 453.6;
}
function poundToKilogram(data) {
    return data / 2.205;
}
function poundToTonne(data) {
    return data / 2205;
}
function poundToOunce(data) {
    return data * 16;
}
//-----------------------------------------------------------//


// convert Ounce to x
export {ounceToMilligram , ounceToGram , ounceToKilogram , ounceToTonne , ounceToPound};

function ounceToMilligram(data) {
    return data * (2.835 * (10**4));
}
function ounceToGram(data) {
    return data * 28.35;
}
function ounceToKilogram(data) {
    return data / 35.274;
}
function ounceToTonne(data) {
    return data / (3.527 * (10**4));
}
function ounceToPound(data) {
    return data / 16;
}
//-----------------------------------------------------------//