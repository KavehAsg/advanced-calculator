// convert meters per second to x
export {meterToKiloSpd , meterToFeetSpd , meterToMileSpd} ;

function meterToKiloSpd(data){
    return data * 3.6 ;
}
function meterToFeetSpd(data){
    return data * 3.281 ;
}
function meterToMileSpd(data){
    return data * 2.237 ;
}
//--------------------------------------------------------------------------//


// convert kilometer per hour to x
export {kiloToMeterSpd , kiloToFeetSpd , kiloToMileSpd} ;

function kiloToMeterSpd(data){
    return data / 3.6 ;
}
function kiloToFeetSpd(data){
    return data / 1.097 ;
}
function kiloToMileSpd(data){
    return data / 1.609 ;
}
//--------------------------------------------------------------------------//


// convert foot per second to x
export {feetToMeterSpd , feetToKiloSpd , feetToMileSpd} ;

function feetToMeterSpd(data){
    return data / 3.281 ;
}
function feetToKiloSpd(data){
    return data * 1.097 ;
}
function feetToMileSpd(data){
    return data / 1.467 ;
}
//--------------------------------------------------------------------------//


// convert mile per hour to x
export {mileToMeterSpd , mileToKiloSpd , mileTofeetSpd} ;

function mileToMeterSpd(data){
    return data / 2.237 ;
}
function mileToKiloSpd(data){
    return data * 1.609 ;
}
function mileTofeetSpd(data){
    return data * 1.467 ;
}
//--------------------------------------------------------------------------//