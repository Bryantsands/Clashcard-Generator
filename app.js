var inquirer = require('inquirer');
var fs = require('fs');
var BasicFlashcard = require("./BasicFlashcard");
var ClozeFlashcard = require("./ClozeFlashcard")

inquirer.prompt([
    
    {
        type:"list",
        message:"Which card would you like to make",
        choices:["Basic" , "Cloze"],
        name:"chosen"
    },
    {
        type:"input",
        name:"question",
        message:"Pick your Question: "
        
    },
    {
        type:"input",
        name:"answer",
        message:"The answer is: "
    }
]).then(function (answers){
    //if Basic was chosen
    if(answers.chosen === "Basic"){    
        var  bCard = new BasicFlashcard(answers.question, answers.answer);
        bCard.printInfo();
        fs.appendFile("UserSave.txt", answers.question +  " " + answers.answer + "\n");
    }else{ //if Cloze was chosen
        var cCard = new ClozeFlashcard(answers.question, answers.answer);
        cCard.printInfo();
        fs.appendFile("UserSave.txt", answers.question + " " + answers.answer + "\n");
    }
  
});

    
   

