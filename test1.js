function Quiz(questions){
this.score=0;
this.questions = questions;
this.questionIndex=0;
}
Quiz.prototype.getQuestionIndex = function(){
return this.questions[this.questionIndex];
}
Quiz.prototype.guess=function(answer)
{if(this.getQuestionIndex().isCorrectAnswer(answer)){
this.score++;
}
this.questionIndex++;
}
Quiz.prototype.isEnded=function(){
return this.questionIndex ===
this.questions.length;
}
function Question(text,choices,answer){
this.text = text;
this.choices=choices;
this.answer=answer;
}
Question.prototype.isCorrectAnswer=function(choice){
return this.answer===choice;
}
function populate(){
if(quiz.isEnded()){
showScores();
}
else{var element = document.getElementById("question");
element.innerHTML =quiz.getQuestionIndex().text;

var choices = quiz.getQuestionIndex().choices;
for(var i=0;i < choices.length;i++)
{
var element = document.getElementById("choice" +i);
element.innerHTML = choices[i];
guess("bt" +i,choices[i]);
}
showProgress();
}
};
function guess(id,guess){
var button = document.getElementById(id);
button.onclick=function(){
quiz.guess(guess);
populate();
}
};

function showProgress(){
var currentQuestionNumber=quiz.questionIndex  +1 ;
var element = document.getElementById("progress");
element.innerHTML = "Question  "  +
currentQuestionNumber  + "  of  "  +  quiz.questions.length;
};

function showScores(){
var gameOverHTML="<p class='abcd'>Here is your Result!</p>";
gameOverHTML +="<p class='asdf'>Total Questions: 15</p>";
gameOverHTML += "<h2 id='score'>You scores:" + quiz.score + "</h2>";

gameOverHTML += "<p class='abc'>Correct Answers</p>";
gameOverHTML +=" 1. The structural and functional unit of life is ?  </br> Answers:  Cell  ,  Tissue ,  Organ  , <u class='qwe'> Cell </u>  ,  Nucleus";
gameOverHTML +="</br></br> 2. Populations of different organisms living together in a habitat is called ?  </br>  Answers:  Colony  ,  Community  ,  Ecosystem  ,  <u class='qwe'> Community </u>  ,  Forestry";
gameOverHTML +="</br></br> 3. The study of insects is called ?  </br>  Answers:  Immunology  ,  Embryology  ,  Taxonomy  ,  <u class='qwe'>Entomology</u>  ,  Entomology";
gameOverHTML +="</br></br> 4. Remains or impressions of an organism that existed the geological past ?  </br>  Answers:  Protist  ,  Volvox  ,  Fossil  ,  <u class='qwe'>Fossil</u>  ,  Organelle";
gameOverHTML +="</br></br> 5. The study of inheritance is called ?  </br>  Answers:  Histology  ,  Genetics  ,  Taxonomy  ,  <u class='qwe'>Genetics</u>  ,  Organelle";
gameOverHTML +="</br></br> 6. The microscopic study of tissues is done in ?  </br>  Answers:  Embryology  ,  Taxonomy  ,  Morphology  ,  <u class='qwe'>Histology</u>  ,  Histology";
gameOverHTML +="</br></br> 7. The study of the structures of living organisms ?  </br>  Answers:  Histology  ,  Morphology  ,  Embryology  ,  <u class='qwe'>Morphology</u>  ,  Taxonomy";
gameOverHTML +="</br></br> 8. Group of tissues doing a particular job is called ?  </br>  Answers:  Cell  ,  System  ,  Organ  ,  <u class='qwe'>Organ</u>  ,  Organelle";
gameOverHTML +="</br></br> 9. Microscopic structure which does a particular job in a cell, is known as ?  </br>  Answers:  Organelle  ,  System  ,  Organ  ,  <u class='qwe'>Organelle</u>  ,  Cell";
gameOverHTML +="</br></br> 10. The study of the functions of living organisms and their parts called ?  </br>  Answers:  Immunology  ,  Physiology  ,  Parasitology  ,  <u class='qwe'>Physiology</u>  ,  Palaeontology";
gameOverHTML +="</br></br> 11. Members of a single species living in a habitat ?  </br>  Answers:  Population  ,  Ecosystem  ,  Forestry  ,  <u class='qwe'>Population</u>  ,  Colony";
gameOverHTML +="</br></br> 12. Unicellular organism that do not have distinct nucleus in their cells e.g.bacteria are called ?  </br>  Answers:  Protista  ,  Saccharum  ,  Prokaryote  ,  <u class='qwe'>Prokaryote</u>  ,  Canis Lupis";
gameOverHTML +="</br></br> 13. The study of the naming and classification of organisms into groups and subgroups ?  </br>  Answers:  Anatomytomy  ,  Histology  ,  Morphology  ,  <u class='qwe'>Taxonomy</u>  ,  Taxonomy";
gameOverHTML +="</br></br> 14. Group of cells of the same type doing a particular job, is called ?  </br>  Answers:  Organs  ,  Tissue  ,  System  ,  <u class='qwe'>Tissue</u>  ,  Cells";
gameOverHTML +="</br></br> 15. A green agla found in water that shows colonial organization ?  </br>  Answers:  Euglena  ,  Paramecium  ,  Amoeba  ,  <u class='qwe'>Volvox</u>  ,  Volvox";


var element = document.getElementById("quiz");
element.innerHTML=gameOverHTML;
};
var questions=[
new Question("   1. The structural and functional unit of life is  ?   ",["Cell","Tissue","Organ","Nucleus"],"Cell"),
new Question("   2. Populations of different organisms living together in a habitat is called  ?   ",["Colony","Community","Ecosystem","Forestry"],"Community"),
new Question("   3. The study of insects is called  ?   ",["Immunology","Embryology","Taxonomy","Entomology"],"Entomology"),
new Question("   4. Remains or impressions of an organism that existed the geological past  ?   ",["Protist","Volvox","Fossil","Organelle"],"Fossil"),
new Question("   5. The study of inheritance is called  ?   ",["Histology","Genetics","Taxonomy","Organelle"],"Genetics"),
new Question("   6. The microscopic study of tissues is done in  ?   ",["Embryology","Taxonomy","Morphology","Histology"],"Histology"),
new Question("   7. The study of the structures of living organisms  ?   ",["Histology","Morphology","Embryology","Taxonomy"],"Morphology"),
new Question("   8. Group of tissues doing a particular job is called  ?   ",["Cell","System","Organ","Organelle"],"Organ"),
new Question("   9. Microscopic structure which does a particular job in a cell, is known as  ?   ",["Organelle","System","Organ","Cell"],"Organelle"),
new Question("   10. The study of the functions of living organisms and their parts called  ?   ",["Immunology","Physiology","Parasitology","Palaeontology"],"Physiology"),
new Question("   11. Members of a single species living in a habitat  ?   ",["Population","Ecosystem","Forestry","Colony"],"Population"),
new Question("   12. Unicellular organism that do not have distinct nucleus in their cells e.g.bacteria are called  ?   ",[" Protista","Saccharum","Prokaryote","Canis Lupis"],"Prokaryote"),
new Question("   13. The study of the naming and classification of organisms into groups and subgroups  ?   ",["Anatomytomy","Histology","Morphology","Taxonomy"],"Taxonomy"),
new Question("   14. Group of cells of the same type doing a particular job, is called  ?   ",["Organs","Tissue","System","Cells"],"Tissue"),
new Question("   15. A green agla found in water that shows colonial organization  ?   ",["Euglena","Paramecium","Amoeba","Volvox"],"Volvox"),




];
var quiz= new Quiz(questions);
populate();