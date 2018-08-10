var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
};


function turnLeft(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
  console.log("turnLeft was called! Current direction is " + rover.direction);
}
function turnRight(rover){

  
  
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log("turnRight was called! Current direction is " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");

  if(rover.direction === "N" && rover.y > 0){
    rover.y += 1;
    console.log("Your current position is " + "(" +rover.x + ',' + rover.y + ")");
  } else if(rover.direction === "E" && rover.x < 10){
    rover.x += 1;
    console.log("Your current position is " + "(" +rover.x + ',' + rover.y + ")");
  } else if(rover.direction === "S" && rover.y < 10){
    rover.y+=-1;
    console.log("Your current position is " + "(" +rover.x + ',' + rover.y + ")");
  } else if(rover.direction === "W" && rover.x > 0){
    rover.x += -1;
    console.log("Your current position is " + "(" +rover.x + ',' + rover.y + ")");
  } else{
    console.log("You must stay within the 10x10 grid! Position: " + rover.x + ", " + rover.y);

  }
rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");
}