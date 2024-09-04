const inquirer = require("inquirer");
const viewOptions = require('./view/viewQuestions.js')

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
            // console.log("working");    
            // console.log(response.mainMenu);

            switch (response.mainMenu) {
                case "View":
                    // console.log("working - View");
                    console.clear();
                    viewOptions();
                    break;
            
                case "Add":
                    console.log("working - Add");
                    break;
        
                case "Update":
                    console.log("working - Update");
                    break;
        
                case "Delete":
                    console.log("working - Delete");
                    break;
        
                case "Quit":
                    break;
            }
        })
    });
    selectedResponse();
})

mainMenuOptions();

module.exports = mainMenuOptions;