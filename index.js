//import dependencies
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./generateMarkdown.js");

//README question prompts
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the URL to your project?",
      name: "url",
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "projectName",
    },
    {
      type: "input",
      message: "Please write a short description of your project:",
      name: "description",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "install",
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "tests",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "usage",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "contribute",
    },
  ])
  .then(function (data) {
    console.log(data);

    fs.writeFile("test.md", generateMarkdown(data), function (err) {
      if (err) throw err;
      console.log("success!");
    });
  });
