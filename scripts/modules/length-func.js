// convert Nanometers to x 
export {
    nanoToMicrometer, nanoToMilimeter, nanoToCentimeter, nanoToMeter, nanoToKilometer,
    nanoToInche, nanoTofeet, nanoToYard, nanoToMile
};

function nanoToMicrometer(data) {
    return data / 1000;
}
function nanoToMilimeter(data) {
    return data / (10 ** 6);
}
function nanoToCentimeter(data) {
    return data / (10 ** 7);
}
function nanoToMeter(data) {
    return data / (10 ** 9);
}
function nanoToKilometer(data) {
    return data / (10 ** 12);
}
function nanoToInche(data) {
    return data / (2.54 * (10 ** 7));
}
function nanoTofeet(data) {
    return data / (3.048 * (10 ** 8));
}
function nanoToYard(data) {
    return data / (9.144 * (10 ** 8));
}
function nanoToMile(data) {
    return data / (1.609 * (10 ** 12));
}
//----------------------------------------------------------------------//



// convert Microns to x 
export {
    microToNanometer, microToMilimeter, microToCentimeter, microToMeter, microToKilometer,
    microToInche, microTofeet, microToYard, microToMile
};

function microToNanometer(data) {
    return data * (10 ** 3);
}
function microToMilimeter(data) {
    return data / (10 ** 3);
}
function microToCentimeter(data) {
    return data / (10 ** 4);
}
function microToMeter(data) {
    return data / (10 ** 6);
}
function microToKilometer(data) {
    return data / (10 ** 9);
}
function microToInche(data) {
    return data / (2.54 * (10 ** 4));
}
function microTofeet(data) {
    return data / (3.048 * (10 ** 5));
}
function microToYard(data) {
    return data / (9.144 * (10 ** 5));
}
function microToMile(data) {
    return data / (1.609 * (10 ** 9));
}
//----------------------------------------------------------------------//



// convert Milimeter to x
export {
    miliToNanometer, miliToMicrometer, miliToCentimeter, miliToMeter, miliToKilometer,
    miliToInche, miliTofeet as miliTofeet, miliToYard, miliToMile
};


function miliToNanometer(data) {
    return data * (10 ** 6);
}
function miliToMicrometer(data) {
    return data * (10 ** 3);
}
function miliToCentimeter(data) {
    return data / 10;
}
function miliToMeter(data) {
    return data / (10 ** 3);
}
function miliToKilometer(data) {
    return data / (10 ** 6);
}
function miliToInche(data) {
    return data / (2.54 * (10 ** 1));
}
function miliTofeet(data) {
    return data / (3.048 * (10 ** 2));
}
function miliToYard(data) {
    return data / (9.144 * (10 ** 2));
}
function miliToMile(data) {
    return data / (1.609 * (10 ** 6));
}
//----------------------------------------------------------------------//



// convert Centimeter to x
export {
    centiToNanometer, centiToMicrometer, centiToMilimeter, centiToMeter, centiToKilometer,
    centiToInche, centiTofeet, centiToYard, centiToMile
};


function centiToNanometer(data) {
    return data * (10 ** 7);
}
function centiToMicrometer(data) {
    return data * (10 ** 4);
}
function centiToMilimeter(data) {
    return data * (10);
}
function centiToMeter(data) {
    return data / (10 ** 2);
}
function centiToKilometer(data) {
    return data / (10 ** 5);
}
function centiToInche(data) {
    return data / 2.54 ;
}
function centiTofeet(data) {
    return data / (3.048 * 10);
}
function centiToYard(data) {
    return data / (9.144 * 10);
}
function centiToMile(data) {
    return data / (1.609 * (10 ** 5));
}
//----------------------------------------------------------------------//



// convert Meter to x
export {
    meterToNanometer, meterToMicrometer, meterToMilimeter, meterToCentimeter, meterToKilometer,
    meterToInche, meterTofeet, meterToYard, meterToMile
};


function meterToNanometer(data) {
    return data * (10 ** 9);
}
function meterToMicrometer(data) {
    return data * (10 ** 6);
}
function meterToMilimeter(data) {
    return data * (10**3);
}
function meterToCentimeter(data) {
    return data * (10 ** 2);
}
function meterToKilometer(data) {
    return data / (10 ** 3);
}
function meterToInche(data) {
    return data * 39.37 ;
}
function meterTofeet(data) {
    return data * 3.281 ;
}
function meterToYard(data) {
    return data * 1.094 ;
}
function meterToMile(data) {
    return data / (1.609 * (10 ** 3)) ;
}
//----------------------------------------------------------------------//



// convert Kilometer to x
export {
    kiloToNanometer, kiloToMicrometer, kiloToMilimeter, kiloToCentimeter, kiloToMeter,
    kiloToInche, kiloTofeet, kiloToYard, kiloToMile
};


function kiloToNanometer(data) {
    return data * (10 ** 12);
}
function kiloToMicrometer(data) {
    return data * (10 ** 9);
}
function kiloToMilimeter(data) {
    return data * (10**6);
}
function kiloToCentimeter(data) {
    return data * (10 ** 5);
}
function kiloToMeter(data) {
    return data * (10 ** 3);
}
function kiloToInche(data) {
    return data * 39370 ;
}
function kiloTofeet(data) {
    return data * 3281 ;
}
function kiloToYard(data) {
    return data * 1094 ;
}
function kiloToMile(data) {
    return data / 1.609 ;
}
//----------------------------------------------------------------------//



// convert Inche to x
export {
    incheToNanometer, incheToMicrometer, incheToMilimeter, incheToCentimeter, incheToMeter,
    incheToKilometer, incheTofeet, incheToYard, incheToMile
};


function incheToNanometer(data) {
    return data * (2.54 * (10 ** 7));
}
function incheToMicrometer(data) {
    return data * (254 * (10 ** 2));
}
function incheToMilimeter(data) {
    return data * 25.4;
}
function incheToCentimeter(data) {
    return data * 2.54;
}
function incheToMeter(data) {
    return data / 39.37;
}
function incheToKilometer(data) {
    return data / 39370 ;
}
function incheTofeet(data) {
    return data / 12 ;
}
function incheToYard(data) {
    return data / 36 ;
}
function incheToMile(data) {
    return data / 63360 ;
}
//----------------------------------------------------------------------//



// convert feet to x
export {
    feetToNanometer, feetToMicrometer, feetToMilimeter, feetToCentimeter, feetToMeter,
    feetToKilometer, feetToInche, feetToYard, feetToMile
};


function feetToNanometer(data) {
    return data * (3.048 * (10 ** 8));
}
function feetToMicrometer(data) {
    return data * (3.048 * (10 ** 5));
}
function feetToMilimeter(data) {
    return data * 304.8;
}
function feetToCentimeter(data) {
    return data * 30.48;
}
function feetToMeter(data) {
    return data / 3.281;
}
function feetToKilometer(data) {
    return data / 3281 ;
}
function feetToInche(data) {
    return data * 12 ;
}
function feetToYard(data) {
    return data / 3 ;
}
function feetToMile(data) {
    return data / 5280 ;
}
//----------------------------------------------------------------------//



// convert yard to x
export {
    yardToNanometer, yardToMicrometer, yardToMilimeter, yardToCentimeter, yardToMeter,
    yardToKilometer, yardToInche, yardToFeet, yardToMile
};


function yardToNanometer(data) {
    return data * (9.144 * (10 ** 8));
}
function yardToMicrometer(data) {
    return data * (9.144 * (10 ** 5));
}
function yardToMilimeter(data) {
    return data * 914.4;
}
function yardToCentimeter(data) {
    return data * 91.44;
}
function yardToMeter(data) {
    return data / 1.094;
}
function yardToKilometer(data) {
    return data / 1094 ;
}
function yardToInche(data) {
    return data * 36 ;
}
function yardToFeet(data) {
    return data * 3 ;
}
function yardToMile(data) {
    return data / 1760 ;
}
//----------------------------------------------------------------------//



// convert mile to x
export {
    mileToNanometer, mileToMicrometer, mileToMilimeter, mileToCentimeter, mileToMeter,
    mileToKilometer, mileToInche, mileToFeet, mileToYard
};


function mileToNanometer(data) {
    return data * (1.609 * (10 ** 12));
}
function mileToMicrometer(data) {
    return data * (1.609 * (10 ** 9));
}
function mileToMilimeter(data) {
    return data * (1.609 * (10 ** 6));
}
function mileToCentimeter(data) {
    return data * (1.609 * (10 ** 5));
}
function mileToMeter(data) {
    return data * 1609;
}
function mileToKilometer(data) {
    return data * 1.609 ;
}
function mileToInche(data) {
    return data * 63360 ;
}
function mileToFeet(data) {
    return data * 5280 ;
}
function mileToYard(data) {
    return data * 1760 ;
}
//----------------------------------------------------------------------//
