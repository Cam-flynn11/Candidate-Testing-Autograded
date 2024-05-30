const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  '(5 + 3)/2 * 10 = ? ',
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",

  "What is the minimum crew size for the ISS? "
];
let correctAnswers = ["Sally Ride", "true", '40', "Trajectory", '3'];
let candidateAnswers = [];
let numOfQuestions = 5;



function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  candidateName = input.question('What is your name? ');


}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let index = 0; index < questions.length; index++) {
    candidateAnswers.push(input.question(questions[index]));
    console.log("--------------------");
  }
}



function gradeQuiz(candidateAnswers) {




  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //   
  for (let index = 0; index < questions.length; index++) {

    if (candidateAnswers[index].toLowerCase() === correctAnswers[index].toLowerCase()) {
      console.log("----------------------");
      console.log('That is correct!');
    } else {
      console.log("--------------------");
      console.log(`${candidateAnswers[index]} is incorrect. The correct answer is ${correctAnswers[index]}`);
    }
  }




  //TODO 3.2 use this variable to calculate the candidates score.
  let grade = Number('');
  let numCorrect = 0;
  for (let index = 0; index < candidateAnswers.length; index++) {
    if (candidateAnswers[index].toLowerCase() === correctAnswers[index].toLowerCase()) {
      numCorrect++;
    }
  }

  for(let index = 0; index < candidateAnswers.length; index++) { 
    grade = numCorrect / numOfQuestions * 100;
  }
    if (grade >= 80) {
      console.log("--------------------");
      console.log(`Wow, you are so smart! You scored: ${grade}%. Congrats, you passed!`);
    } else {
      console.log("--------------------");
      console.log(`Sorry, ${grade}% is not passing. YOU FAILED - please try again.`);
    }
    return grade;
  }





function runProgram() {
  askForName();

  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello, " + candidateName + "! Get ready for your quiz");
  askQuestion();
  gradeQuiz(this.candidateAnswers)
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