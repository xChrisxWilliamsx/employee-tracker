const inquirer = require("inquirer");
const updateEmp = require('./updateQuery')

const updateOptions = (() => {
    const updateQuestions = [
        {
            name: "update",
            message: "What would you like to Update?",
            type: "list",
            choices: [
                "Update Employees",
                "Quit"
            ]
        }
    ]

    const selectedResponse = (() => {
        inquirer.prompt(updateQuestions)
        .then((response) => {
            console.log("working");
            console.log(response.update);

            switch (response.update) {
                case "Update Employees":
                    // console.log("working - Update Employees");
                    console.clear();
                    updateEmp();
                    break;

                case "Quit":
                    process.exit();
                    break;
            }
        })
    });
    selectedResponse();
})

module.exports = updateOptions;