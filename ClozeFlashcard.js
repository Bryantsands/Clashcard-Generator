function ClozeFlashcard(text,cloze){
    this.text = text;
    this.cloze = cloze;

    this.deletedCloze = function(){
 
    };

    this.printInfo = function(){
          console.log("Cloze Question: " + this.text + "\nCloze: " + this.cloze)
    };
   
};
   
 
 ClozeFlashcard();

 module.exports = ClozeFlashcard;