// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    let result = (block - 42);
    if (result < 0) {
        result *= -1;
    }
    return result
}

function distanceFromHqInFeet(block) {
    let distance = distanceFromHqInBlocks(block);
    return distance * 264;
}

function distanceTravelledInFeet(start, destination) {
    let distance = destination - start;
    if (distance < 0) {
        distance *= -1;
    }
    return distance * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else if (distance > 2500) {
        return "cannot travel that far"
    } else {
        return 0;
    }
}