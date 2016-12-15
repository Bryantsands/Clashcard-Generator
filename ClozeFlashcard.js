function ClozeFlashcard(text,cloze){
    this.text = text;
    this.cloze = cloze;

    this.deletedCloze = function(){
 
    };

    this.printInfo = function(){
        newCloze = "text: " + this.text + "\nCloze" + this.cloze
console.log(newCloze)
    }
fs.appendFile("UserSave.txt", this.storeCloze, (err) =>{
    if(err) throw err;
    console.log("data saved")

});
   
 };
 ClozeFlashcard()

 module.exports = (ClozeFlashcard);