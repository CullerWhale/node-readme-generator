// TODO: Include packages needed for this application
// npm installed (package.json initiated) and inquirer installed
//npm install inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const generateMarkdown = require('./utils/generateMarkdown');
// // TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'projectTitle', 
        message: "What is the title of the project?"
    }, 

    {
        type: "input",
        name: 'userName', 
        message: "What is your Github username?"
    }, 

    {
        type: "input",
        name: 'email', 
        message: "What is your email?"
    },

    {
        type: "input",
        name: 'description', 
        message: "What is the description of the project?"
    }, 
    {
        type: "input",
        name: 'installation', 
        message: "What are the installation instrictions for the project?"
    }, 
    {
        type: "input",
        name: 'usage', 
        message: "How should this project be used?"
    }, 
    {
        type: "input",
        name: 'contribution', 
        message: "What are the contribution guidelines?"
    }, 
    {
        type: "input",
        name: 'test', 
        message: "What are the test instructions?"
    }, 
    {
        type: "list",
        name: 'license', 
        message: "Does your project require a license?",
        choices: ['Apache License 2.0', 'MIT License', 'Mozilla Publice License 2.0']
    }
];


inquirer
  .prompt(
    /* Pass your questions in here */
    questions   
  )
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);

    // console.log(answers.projectTitle);
    // const projectTitle = answers.projectTitle;
    // const userName = answers.userName; 
    // const description = answers.description;
    // const installation = answers.installation;
    // const usage = answers.usage;
    // const email = answers.email;
    // const contribution = answers.contribution;
    // const license = answers.license;
    // const test = answers.test;


    // console.log(userName);

    generatePage(answers);

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  
  



// TODO: Create a function to write README file
const generatePage = (answers) => {
        
    fs.writeFile('README.md',generateMarkdown(answers) , (err) => {
        if (err) {
            console.error(err)
            return
        }
        console.log('wrote to file successfully')
    })
  };

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
