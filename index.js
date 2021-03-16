
function distanceFromHqInBlocks(blockDistance) {
    if (blockDistance > 42) {
        return blockDistance - 42
    } 
    return 42 - blockDistance;
} 
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(blockDistance) {
    return distanceFromHqInBlocks(blockDistance) * 264;  
 }
 
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);
 

function distanceTravelledInFeet(start, end) {
    let block = 264;
    if (start > end) {
        return (start - end) * block;
    } 
    return (end - start) * block;
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end);
        if (distance < 400) {
            return distance = 0;
        } else if (distance > 400 && 2000 > distance ){
            return (distance -400) * .02;
        } else if (distance > 2000 && 2500 > distance) {
             return distance = 25;
        } else if (distance > 2500) {
            return 'cannot travel that far'
        }
}
calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);