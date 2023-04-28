function distanceFromHqInBlocks(num1){
    const startStreet = 42;
    if (num1 > startStreet){
        return num1 - 42;
    }else if ( startStreet >= num1){
        return 42 - num1;
    }
    //If else if (num - 42) or (42-num)
}

function distanceFromHqInFeet(numberOfBlocks){
    let NycBlock = 264
    return distanceFromHqInBlocks(numberOfBlocks) * NycBlock
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return ((start - destination)* 264);
    }else if (destination > start){
        return ((destination - start)* 264);
    }
}

function calculatesFarePrice(start,destination){
    let distanceTraveled = distanceTravelledInFeet(start, destination);
    if (distanceTraveled <= 400){
        return 0;
    }else if ((distanceTraveled > 400) && (distanceTraveled <= 2000)){
        return (distanceTraveled - 400) *.02;
    }else if (distanceTraveled > 2000 && distanceTraveled <= 2500){
        return 25;
    }else if (distanceTraveled > 2500){
        return 'cannot travel that far';
    }
}
