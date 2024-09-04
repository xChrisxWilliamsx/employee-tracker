const inquirer = require("inquirer");
const mainMenuOptions = require('../questions.js');
const { viewDepartments, viewRoles, viewSalaries, viewManagers, viewEmployees, viewEmpByDep, viewEmpByManager, viewEmpSalByDep } = require('./viewQuery.js');

// const start = () => {
//     viewOptions();
// }

const viewOptions = (() => {
    const viewQuestions = [
        {
            name: "view",
            message: "What would you like to view?",
            type: "list",
            choices: [
                "All Departments",
                "All Roles",
                "All Salaries",
                "All Managers",
                "All Employees",
                "All Employees by Department",
                "All Employees by Manager",
                "Budget Utilization by Department",
                "Main Menu"
            ]
        }
    ]

    const selectedResponse = (() => {
        inquirer.prompt(viewQuestions)
        .then((response) => {
            // console.log("working");
            // console.log(response.view);

            switch (response.view) {
                case "All Departments":
                    // viewOptions();
                    console.clear();
                    viewDepartments()
                    // console.log("\n");
                    
                    viewOptions();

    
                    break;
            
                case "All Roles":
                    // console.log("working - All Roles");
                    console.clear();
                    viewRoles();
                    viewOptions();
                    break;
        
                case "All Salaries":
                    // console.log("working - All Salaries");
                    console.clear();
                    viewSalaries();
                    viewOptions();
                    break;
        
                case "All Managers":
                    // console.log("working - All Managers");
                    console.clear();
                    viewManagers();
                    viewOptions();
                    break;
        
                case "All Employees":
                    // console.log("working - All Employees");
                    console.clear();
                    viewEmployees();
                    viewOptions();
                    break;

                case "All Employees by Department":
                    // console.log("working - All Employees by Department");
                    console.clear();
                    viewEmpByDep();
                    viewOptions();
                    break;
            
                case "All Employees by Manager":
                    // console.log("working - All Employees by Manager");
                    console.clear();
                    viewEmpByManager();
                    viewOptions();
                    break;
        
                case "Sum of Employees Salaries by Department":
                    // console.log("working - Budget Utilization by Department");
                    // console.clear();
                    viewEmpSalByDep();
                    viewOptions();
                    break;

                case "Main Menu":
                    process.exit();
                    break;
            }
        })
    });
    selectedResponse();
})

module.exports = viewOptions;