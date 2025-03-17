Build a Quiz Game

Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    You should create an array named questions.
    The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
    The category key should have the value of a string representing a question category.
    The question key should have the value of a string representing a question.
    The choices key should have the value of an array containing three strings, which are alternative answers to the question.
    The answer key should have the value of a string, representing the correct answer to the question. Also, the value of answer should be included in the choices array.
    You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
    You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
    You should have a function named getResults that takes the selected question object and the computer choice as its parameters and returns The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.

