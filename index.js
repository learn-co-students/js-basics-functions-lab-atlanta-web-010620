function distanceFromHqInBlocks(block) {
    let hq = 42
    let distance = block - hq
    return Math.abs(distance)
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(block1, block2) {
    let distance = (block1 - block2) * 264
    return Math.abs(distance)
}

function calculatesFarePrice(block1, block2) {
    let distance = distanceTravelledInFeet(block1, block2)
    if (distance < 400) {
        return 0
    }
    else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02
    }
    else if (distance > 2000 && distance < 2500) {
        return 25
    }
    else if (distance > 2500) {
        return 'cannot travel that far'
    }
}



