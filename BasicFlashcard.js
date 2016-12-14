var inquirer = require("inquirer");
var fs = require("fs");


// constructor function for basicflashcard
function BasicFlashcard(front, back) {
    this.front = front;
    this.back = back;
};

// creates the printInfo method and applies it to all basicflashcard objects
BasicFlashcard.prototype.printInfo = function(){
        console.log("Question: " + this.front + "\nAnswer is: " + this.back)
    };

// new basicFlashcard object is initialized to nextcard and is provided with the variables
// necessary to create all of the properties
var newCard = new BasicFlashcard("who is the president", "obama");

newCard.printInfo(); 




module.exports = BasicFlashcard;