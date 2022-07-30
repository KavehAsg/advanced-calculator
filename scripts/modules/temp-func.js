// convert celsius to x
export {celToFar , celToKel};

function celToFar(data) {
    return ((data * 1.8) +32) ;
}
function celToKel(data) {
    return 273.15 + Number(data) ;
}
//------------------------------------------------------//


// convert fahrenheit to x
export {farToCel , farToKel};

function farToCel(data) {
    return ((data - 32) * (5/9)) ;
}
function farToKel(data) {
    return ((data - 32) * (5/9) + 273.15) ;
}
//------------------------------------------------------//


// convert kelvin to x
export {kelToCel , kelToFar};

function kelToCel(data) {
    return data - 273.15 ;
}
function kelToFar(data) {
    return ((data - 273.15) * 1.8 + 32) ;
}
//------------------------------------------------------//