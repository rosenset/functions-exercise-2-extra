(function(){
    let positionN = 0;
    let positionE = 0;
    let direction = "N";


    function moveForward(distance) {
        if (direction === "N") {
            positionN = positionN + distance;
        } else if (direction === "E") {
            positionE = positionE + distance;
        } else if (direction === "S") {
            positionN = positionN - distance;
        } else if (direction === "W") {
            positionE = positionE - distance;
        }
        console.log(`${positionN}N ${positionE}E.`);
        return(distance)
    }

    function moveBackward(distance) {
        if (direction === "N") {
            positionN = positionN - distance;
        } else if (direction === "E") {
            positionE = positionE - distance;
        } else if (direction === "S") {
            positionN = positionN + distance;
        } else if (direction === "W") {
            positionE = positionE + distance;
        }
        console.log(`${positionN}N ${positionE}E.`);
    }

    function turnRight() {
        if (direction === "N") {
            direction = "E";
        }
        else if (direction === "E") {
            direction = "S";
        }
        else if (direction === "S") {
            direction = "W"
        }
        else if (direction === "W") {
            direction = "N";
        }
    }

    function turnLeft() {
        if (direction === "N") {
            direction = "E";
        }
        else if (direction === "E") {
            direction = "S";
        }
        else if (direction === "S") {
            direction = "W";
        }
        else if (direction === "W") {
            direction = "N";
        }
    }

    function printLocation() {
    console.log(`${positionN}N ${positionE}E.`);
    }

    moveForward(5);
    turnRight();
    moveForward(2);
    printLocation();
    turnLeft();
    turnLeft();
    moveForward(7);
    turnRight();
    moveBackward(3);
    printLocation();

})();