var inquirer = require("inquirer");
var fs = require("fs");

function BasicFlashcard(front, back) {
    this.front = front;
    this.back = back;
    
    var NewCard = new BasicFlashcard();

    console.log(NewCard);
};

module.exports = BasicFlashcard;