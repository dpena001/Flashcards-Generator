
var Basic = require('./BasicCard.js');
var Cloze = require('./ClozeCards.js');

function BasicFlash(){
    var inquirer2 = require('inquirer');
    inquirer2.prompt([{
      name: 'question',
      type: 'input',
      message: 'Input Text Question:',
    },
    {
      name: 'response',
      type: 'input',
      message: 'Input Response:',
    }]).then(function (answers) {
         var flash = new Basic(answers.question,answers.response);  
         console.log(flash.front);
         console.log(flash.back);
         askrequest(); 
    });
   }

function ClozeFlash(){
    var inquirer2 = require('inquirer');
    inquirer2.prompt([{
      name: 'text',
      type: 'input',
      message: 'Input Text:',
    },
    {
      name: 'clozed',
      type: 'input',
      message: 'Input to String to Cloze:',
    }]).then(function (answers) {
         var flash = new Cloze(answers.text,answers.clozed);
         //console.log(flash);
         if (Object.getOwnPropertyNames(flash).length === 0){  
              askrequest();
            
          }   
          else{
            console.log(flash.cloze);
            console.log(flash.partial);
            console.log(flash.fullText);
            askrequest();
          } 
    });
 }


function askrequest(){
var inquirer = require('inquirer'); 
inquirer.registerPrompt('list-input', require('inquirer-list-input'));

inquirer.prompt([{
      type: 'list',
      name: 'action',
      message: 'What type of FlashCard would you like to load?:',
      choices: ['Basic','Cloze-Deleted'],
    }]).then(function(answers) {
           if (answers.action === "Basic"){
              BasicFlash();
              //console.log("Basic");
           }else{
            console.log("Clozed");
            ClozeFlash();
           }

    });
 }   

 askrequest(); 