const inquirer = require("inquirer");
const viewOptions = require('./view/viewQuestions.js');
const addOptions = require('./add/addQuestions.js');
const updateOptions = require('./update/updateQuestions.js')

const mainMenuOptions = (() => {
    const mainMenu = [
        {
            name: "mainMenu",
            message: "What would you like to do?",
            type: "list",
            choices: [
                "View",
                "Add",
                "Update",
                "Delete",
                "Quit"
            ]
        }
    ];

    const selectedResponse = (() => {
        inquirer.prompt(mainMenu)
        .then((response) => {
            switch (response.mainMenu) {
                case "View":
                    // console.log("working - View");
                    console.clear();
                    viewOptions();
                    break;
            
                case "Add":
                    // console.log("working - Add");
                    console.clear();
                    addOptions();
                    break;
        
                case "Update":
                    // console.log("working - Update");
                    console.clear();
                    updateOptions();
                    break;
        
                case "Delete":
                    // console.log("working - Delete");
                    process.exit();
                    break;
        
                case "Quit":
                    process.exit();
                    break;
            }
        })
    });
    selectedResponse();
})

mainMenuOptions();

module.exports = mainMenuOptions;