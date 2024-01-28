const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

        //blank variable to store any name given
let candidateName = ("");

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

    //storing the first question, as directed. We don't use this in the end. The questions are all pulled from the array questions. 
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = (" ");
  




//TODO: Variables for Part 2

    //arrays to store the questions, correct answers & candidate answers after query
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = []

// TODO 1.1b: Ask for candidate's name //

    //query for the name we created an open variable to store - sends it to the code to greet by name on line 89
function askForName() { 
  candidateName = input.question("Enter your name: ");
  
}



// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

    //this for loop is asking the question, questions.length runs through the whole question. (questions[i]) ensures we are running through the array. candidateAnswers.push is 
    //storing the answer in the array 
function askQuestion() {
for(let i = 0; i < questions.length; i++){
  candidateAnswers.push(input.question(questions[i])); }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

      //this loop runs through the questions. I used template literals to store each section that I wanted to print. \n starts a new line. You can see that we are running through each full array as well. 
  for (let i = 0; i < questions.length; i++) {
    console.log(`\nQuestion ${i + 1}: ${questions[i]}`);
    console.log(`Candidate's Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }

  

//TODO 3.2 use this variable to calculate the candidates score.

    //this was the hardest part for me! I kept trying to start the grade at 100. starting at zero worked and 100 did not. I converted all the answers to lower case when grading
    //by using a for loop. I added 20 points for each matching answer. There was a formula in the book to calculate percentage. Then I did a if/else to print results. I opted to do try again
    // because failed seemed negative. 
let grade = 0; 
for (let i = 0; i < questions.length; i++) {
let candidateAnswerLowerCase = candidateAnswers[i].toLowerCase();
let correctAnswerLowerCase = correctAnswers[i].toLowerCase();

if (candidateAnswerLowerCase === correctAnswerLowerCase) {
  grade += 20
}
}
grade = (grade / (questions.length * 20)) * 100;
if (grade >= 80) {
  console.log("Congratulations! You passed the quiz with greater than 80% correct.");
} else {
  console.log("Sorry, you received less than 80%. Try again.");
}

  return grade 
}



function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //

      //another template literal so that it can constantly change 
  console.log(`Hello, ${candidateName}`);

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
