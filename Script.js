// VARIABLES:
// counter for current # of keys


// FUNCTIONS:
// if the door is unopened
//     if user has enough keys for a door
//           change door's class to open
//           load room past door
//     if user does not have enough keys
//           lil pop up that says "you don't have enough keys, go find some more"
// if door is opened
//      send user to room past door

        if (this.class != open) {
            if (currentKeys < reqKeys) {
                alert("You don't have enough keys :/");
                /* document.getElementByID("closepop"). idk add text "you don't have enough keys"
                delay 5 seconds
                document.getElementByID("closepop").hide-popover ? */
            } else if (currentKeys >= reqKeys) {
                /*document.getElementByID("openpop").addtext "you open the door"
                delay 5 seconds
                document.getElementByID("openpop").hide-popover
                iframe source change to html corresponding to button pressed */
            }
        } else {
                /* if (iframe src == button html) {
                    "you're already here silly"
                } else {
                    popover "You go through the door"
                    iframe src -> button html
                } */
        }
