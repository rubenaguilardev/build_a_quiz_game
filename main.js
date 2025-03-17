let questions = [
  {category: 'Boxing', question: 'What weight class is 200lb considered?', choices: ['lightheavy weight', 'cruiserweight', 'heavyweight'], answer: 'cruiserweight'},
  {category: 'Movies', question: 'Who directed Inception?', choices: ['Christopher Nolan', 'Ridley Scott', 'Michael Mann'], answer: 'Christopher Nolan'},
  {category: 'Food', question: 'Where does pizza come from?', choices: ['Mexico', 'China', 'Italy'], answer: 'Italy'},
  {category: 'Music', question: 'Who wrote Stairway to Heaven?', choices: ['Audioslave', 'Led Zeppelin', 'Elvis Presley'], answer: 'Led Zeppelin'},
  {category: 'Colors', question: 'What primary color is the flag of China?', choices: ['Red', 'Blue', 'Green'], answer: 'Red'}
];

const getRandomQuestion = questions => questions[Math.floor(Math.random() * questions.length)];


const getRandomComputerChoice = choices => choices[Math.floor(Math.random() * choices.length)];


const getResults = (selectedQuestion, computerChoice) => selectedQuestion.answer === computerChoice ? "The computer's choice is correct!" : `The computer's choice is wrong. The correct answer is: ${selectedQuestion.answer}`
