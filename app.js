var inquirer = require('inquirer');
var fs = require('fs');


inquirer.prompt([
    {
        type:"list",
        message:"Which card would you like to make",
        choice:["Basic" , "Cloze"],
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
        console.log("chose basic");
        fs.appendFile("UserSave.txt", answers.question +  " " + answers.answer + "\n");
    }else{
        var cCard = new ClozeFlashcard(answers.question, answers.answer);
        cCard.printInfo();
        console.log("chose Cloze")
        fs.appendFile("UserSave.txt", answers.text + " " + answers.cloze + "\n");
    }
    
});

    
    // newRes.printInfo();
    // newClozeFlashcard.printInfo();


