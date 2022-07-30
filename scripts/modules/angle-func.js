// convert Degrees to x
export {degToRad , degToGrad};

function degToRad(data){
    return data * (Math.PI / 180);
}
function degToGrad(data){
    return data * (200 / 180);
}
//------------------------------------------------------//


// convert Radian to x
export {radToDeg , radToGrad};

function radToDeg(data){
    return data * (180 / Math.PI);
}
function radToGrad(data){
    return data * (200 / Math.PI);
}
//------------------------------------------------------//


// convert Gradian to x
export {gradToDeg , gradToRad};

function gradToDeg(data){
    return data * (180 / 200);
}
function gradToRad(data){
    return data * (Math.PI / 200);
}
//------------------------------------------------------//