//new approach with 

'use strict';
var inquirer = require('inquirer');
var output = [];
var questions = [
    {
    type: 'input',
    name: 'tvShow',
    message: 'What\'s your favorite TV show?'
}, 
{
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to enter another TV show favorite (just hit enter for YES)?',
    default: true
}, 
{
    type: 'input',
    name: 'movie',
    message: 'What\'s your favorite Movie?'
}, 
{
    type: 'confirm',
    name: 'askAgin',
    message: 'Have one more fav?',
    default: true
}];

function ask() {
    inquirer.prompt(questions, function (answers) {
        output.push(answers.tvShow);
        if (answers.askAgain) {
            ask();
        } else {
            console.log("Your favorite TV Shows:", output.join(", "));
        }
    });
}
ask();