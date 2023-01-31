const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
// const { create } = require("domain");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamMembers = [];

const managerQuestions = [
    {
        type: "input",
        message: "What is the Managers name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the manager's employee ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the manager's email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Whats the manager's office number?",
        name: "officenumber"
    }
];

