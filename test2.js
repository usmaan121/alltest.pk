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
var gameOverHTML="<p class='abcd'>Result</p>";
gameOverHTML +="<p class='asdf'>Total Questions: 15</p>";
gameOverHTML += "<h2 id='score'>You scores:" + quiz.score + "</h2>";

gameOverHTML += "<p class='abc'>Correct Answers</p>";
gameOverHTML +=" 1. ______ is a mixture of calcium, water, sugar, fat, protein, mineral salt and vitamins  ?  </br> Answers:  Air  ,  Soil , <u class='qwe'>Milk</u>  ,  Brass";
gameOverHTML +="</br></br> 2. The number of protons present in the nucleaus of its atoms is known as ?  </br>  Answers:  Atomic number  ,  Atomic mass  ,  Atomic unit  ,  <u class='qwe'>Formmula unit</u>";
gameOverHTML +="</br></br> 3. A substance whose atoms have the same atomic numbers are termed as ?  </br>  Answers:  Substance  ,  Matter  ,  <u class='qwe'>Element</u>  ,  Compound";
gameOverHTML +="</br></br> 4. Average relative mass of an atom of thr element compared with an atom of C taken as 12 atomic mass unit is ?  </br>  Answers: <u class='qwe'>Relative atomic mass</u>  ,  Atomic mass , Gram molecule mass , Molecule mass";
gameOverHTML +="</br></br> 5. NH; and H&#8323O are the example of ?  </br>  Answers:  Anion  ,  Cation  , <u class='qwe'>Radical</u>  ,  Ion";
gameOverHTML +="</br></br> 6. Ion, molecular oins, free radical and neutral molecules are called ?  </br>  Answers:  atomic specie  ,  Molecular specie , <u class='qwe'>Chemical specie</u>  ,  Ionic specie";
gameOverHTML +="</br></br> 7. Inert gas elements helium 'He', neon 'Ne' etc, are the example of ?  </br>  Answers: <u class='qwe'>Monoatomic molecules</u>  ,  Heteroatomic molecules , Homoatomic molecules , Polystomic molecules";
gameOverHTML +="</br></br> 8. The formula mass of an ionic compounds expressed in grams is known as ?  </br>  Answers:  Gram molecular mass  ,  Gram automic mass  , <u class='qwe'>Gram formula mass</u>  ,  Gram ionic mass";
gameOverHTML +="</br></br> 9. Brass consist of ?  </br>  Answers:  Zn+Pb  , <u class='qwe'>Zn+Co</u>  ,  Co+Sn , Pb+Zn";
gameOverHTML +="</br></br> 10. The molar mass of ionic compound NaCl is ?  </br>  Answers:  98gm  , <u class='qwe'>58.8gm</u>  ,  40gm , 89gm";
gameOverHTML +="</br></br> 11. Mixture of sand, clay, minerals and water is called ?  </br>  Answers: <u class='qwe'>Soil</u>  ,  Milk , Air , None of these";
gameOverHTML +="</br></br> 12. A place of matter in pure form is termed as ?  </br>  Answers:  Element  ,  Mixture , <u class='qwe'>Substance</u>  ,  Matter";
gameOverHTML +="</br></br> 13. Quantitative and Quantitative analysis are carried in ?  </br>  Answers:  Environmental chemistry  , <u class='qwe'>Analytical chemistry</u>  ,  Organic chemistry , Nuclear chemistry";
gameOverHTML +="</br></br> 14. The most abundant element occuring in the oceans is ?  </br>  Answers:  <u class='qwe'>Oxygen</u>  ,  Hydrogen , Nitrogen , Silicon";
gameOverHTML +="</br></br> 15. Which branch of chemistry deals with the cuvalent of carbon and hydrogen and their derivatives ?  </br>  Answers:  Physical chemistry  ,  <u class='qwe'>Organic chemistry</u>  ,  Inorganic chemistry , Analytical chemistry";


var element = document.getElementById("quiz");
element.innerHTML=gameOverHTML;
};
var questions=[
new Question("   1. ______ is a mixture of calcium, water, sugar, fat, protein, mineral salt and vitamins  ?   ",["Air","Soil","Milk","Brass"],"Milk"),
new Question("   2. The number of protons present in the nucleaus of its atoms is known as  ?   ",["Atomic number","Atomic mass","Atomic unit","Formmula unit"],"Formmula unit"),
new Question("   3. A substance whose atoms have the same atomic numbers are termed as  ?   ",["Sustance","Matter","Element","Compound"],"Element"),
new Question("   4. Average relative mass of an atom of thr element compared with an atom of C taken as 12 atomic mass unit is  ?   ",["Relative atomic mass","Atomic mass","Gram molecule mass","Molecule mass"],"Relative atomic mass"),
new Question("   5. NH; and H&#8323O are the example of  ?   ",["Anion","Cation","Radical","Ion"],"Radical"),
new Question("   6. Ion, molecular oins, free radical and neutral molecules are called  ?   ",["atomic specie","Molecular specie","Chemical specie","Ionic specie"],"Chemical specie"),
new Question("   7. Inert gas elements helium 'He', neon 'Ne' etc, are the example of  ?   ",["Monoatomic molecules","Heteroatomic molecules","Homoatomic molecules","Polystomic molecules"],"Monoatomic molecules"),
new Question("   8. The formula mass of an ionic compounds expressed in grams is known as  ?   ",["Gram molecular mass","Gram automic mass","Gram formula mass","Gram ionic mass"],"Gram formula mass"),
new Question("   9. Brass consist of  ?   ",["Zn+Pb","Zn+Co","Co+Sn","Pb+Zn"],"Zn+Co"),
new Question("   10. The molar mass of ionic compound NaCl is  ?   ",["98gm","58.5gm","40gm","89gm"],"58.5gm"),
new Question("   11. Mixture of sand, clay, minerals and water is called  ?   ",["Soil","Milk","Air","None of these"],"Soil"),
new Question("   12. A place of matter in pure form is termed as  ?   ",["Element","Mixture","Substance","Matter"],"Substance"),
new Question("   13. Quantitative and Quantitative analysis are carried in  ?   ",["Environmental chemistry","Analytical chemistry","Organic chemistry","Nuclear chemistry"],"Analytical chemistry"),
new Question("   14. The most abundant element occuring in the oceans is ?   ",["Oxygen","Hydrogen","Nitrogen","Silicon"],"Oxygen"),
new Question("   15. Which branch of chemistry deals with the cuvalent of carbon and hydrogen and their derivatives  ?   ",["Physical chemistry","Organic chemistry","Inorganic chemistry","Analytical chemistry"],"Organic chemistry"),

];
var quiz= new Quiz(questions);
populate();
