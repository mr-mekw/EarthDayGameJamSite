// VARIABLES:
// counter for current # of keys
var currentKeys;

// DOORS CLASS:
class Door {
    // required amount of keys per door
    constructor() {
        var reqKeys;
    }

    // 
}

// Living Room Door
class LRDoor extends Door {
    reqKeys = 2;
    
}


// SET UP:
// all of the doors
const lrd = new LRDoor();

// FUNCTIONS:
// if the door is unopened
//     if user has enough keys for a door
//           change door's class to open
//           load room past door
//     if user does not have enough keys
//           lil pop up that says "you don't have enough keys, go find some more"
// if door is opened
//      send user to room past door

function OpenDoor() {
    if (this.class != "doorClosed") {
        if (currentKeys >= reqKeys) {
            this.classList.remove("doorClosed");
            this.classList.add("doorOpened");
        } else if (this.class == "doorClosed") {
            // create a pop up (edit the )
            // add a text that 
        }
    }
}
