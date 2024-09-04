const inquirer = require("inquirer");
const mainMenuOptions = require('../questions.js');
const { addDep, addRole, addEmp } = require('./addQuery.js');

// const start = () => {
//     viewOptions();
// }

const addOptions = (() => {
    const addQuestions = [
        {
            name: "add",
            message: "What would you like to view?",
            type: "list",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "Quit"
            ]
        }
    ]

    const selectedResponse = (() => {
        inquirer.prompt(addQuestions)
        .then((response) => {
            // console.log("working");
            // console.log(response.add);

            switch (response.add) {
                case "Add Department":
                    // console.log("working - Add Department");
                    console.clear();
                    addDep();
                    // addOptions();
                    break;
            
                case "Add Role":
                    // console.log("working - Add Roles");
                    console.clear();
                    addRole();
                    // addOptions();
                    break;
        
                case "Add Employee":
                    // console.log("working - Add Employee");
                    console.clear();
                    addEmp();
                    // addOptions();
                    break;
        
                case "Quit":
                    process.exit();
                    break;
            }
        })
    });
    selectedResponse();
})

module.exports = addOptions;