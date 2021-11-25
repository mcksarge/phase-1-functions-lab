// Code your solution in this file!
const hq = 42;


//Calculates number of blocks
function distanceFromHqInBlocks(streetNumber) {
    if (streetNumber > hq) {
        return streetNumber - hq;
    } else if (streetNumber < hq) {
        return hq - streetNumber;
    }
        
}


//Calculates number of feet based on number of blocks
function distanceFromHqInFeet(streetNumber) {
    let lengthInFeet = distanceFromHqInBlocks(streetNumber) * 264;
    return lengthInFeet;
}


//Calculates number of feet to travel
function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else if (start < destination) {
        return (destination - start) * 264;
    }
}


//Calculates fare
function calculatesFarePrice(start, destination) {
    let lengthInFeet = distanceTravelledInFeet(start, destination);
    let fare;

    if (lengthInFeet < 400) {
        return fare = 0;
    } else if (lengthInFeet > 400 && lengthInFeet < 2000) {
        return fare = (lengthInFeet - 400) * .02;
    } else if (lengthInFeet > 2000 && lengthInFeet < 2500) {
        return fare = 25;
    } else if (lengthInFeet > 2500) {
        return 'cannot travel that far';
    }
    
    return fare;
}

