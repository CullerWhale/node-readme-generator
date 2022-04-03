// TODO: Include packages needed for this application
// npm installed (package.json initiated) and inquirer installed
//npm install inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const profileDataArgs = process.argv.slice(2, process.argv.length);

inquirer
  .prompt([
    /* Pass your questions in here */
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




    
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);

    // console.log(answers.projectTitle);
    const projectTitle = answers.projectTitle;
    const userName = answers.userName; 
    const description = answers.description;
    const installation = answers.installation;
    const usage = answers.usage;
    const email = answers.email;
    const contribution = answers.contribution;
    const license = answers.license;
    const test = answers.test;


    // console.log(userName);

    const generatePage = (name, github) => {
        // console.log(`
        // <!DOCTYPE html> 
        // <html lang="en"> 
        // <head>
        //   <meta charset="UTF-8">
        //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //   <meta http-equiv="X-UA-Compatible" content="ie=edge">
        //   <title>Portfolio Demo</title>
        // </head>
      
        // <body>
        //   <h1>${userName}</h1>
        //   <h2><a href="https://github.com/${projectTitle}">Github</a></h2>
        // </body>
        // </html>
        // `);
        fs.writeFile('README.md', 

        `
        # ${projectTitle}

        ## Description
        ${description}

        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contribution](#contribution)
        - [Tests](#tests)
        - [Questions](#questions)

        ## Installation 
        ${installation}


        ## Usage
        ${usage}

        ## License
        ${license}

        ## Contributing
        ${contribution}
        The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard that we follow. 

        ## Tests
        ${test}

        ## Questions
        Email: ${email}

        Github: https://github.com/${userName} `



        
        , (err) => {
            if (err) {
                console.error(err)
                return
            }
            console.log('wrote to file successfully')
        })
      }; generatePage();

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  
  

// // TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
// const generatePage = (userName, projectTitle) => `Name: ${userName}, Title: ${projectTitle} `;
// console.log(generatePage('Jane', 'janehub'));

// function writeToFile(fileName, data) {
    // function writeToFile(answers) {
       
    //         return `
    //         <!DOCTYPE html> 
    //         <html lang="en"> 
    //         <head>
    //           <meta charset="UTF-8">
    //           <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //           <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //           <title>Portfolio Demo</title>
    //         </head>
          
    //         <body>
    //           <h1>${userName}</h1>
    //           <h2><a href="https://github.com/${projectTitle}">Github</a></h2>
    //         </body>
    //         </html>
    //         `;
    // };


//     // `Name: ${userName}, Title: ${projectTitle} `
// }

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
