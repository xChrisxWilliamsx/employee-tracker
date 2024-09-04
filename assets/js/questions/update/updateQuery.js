const { Pool } = require('pg');
const inquirer = require('inquirer');
const updateOptions = require('./updateQuestions');

const pool = new Pool(
    {
        user: '',
        password: '',
        host: 'localhost',
        database: 'emptrac'
    },
);
pool.connect();

const updateEmp = () => {
    const updateEmpQuestions = [
        {
            name: "id",
            message: "Which Employee would you like to update (Input Employees ID)?",
            type: "input",
        },
        {
            name: "first_name",
            message: "Please input updated Employee First Name?",
            type: "input",
        },
        {
            name: "last_name",
            message: "Please input updated Employee Last Name?",
            type: "input",
        },
        {
            name: "last_name",
            message: "Please input updated Employee Last Name?",
            type: "input",
        },
        {
            name: "dep_id",
            message: "Please input updated Employee Department ID?",
            type: "input",
        },
        {
            name: "role_id",
            message: "Please input updated Employee Role ID?",
            type: "input",
        },
        {
            name: "salary_id",
            message: "Please input updated Employee Salary ID?",
            type: "input",
        },
        {
            name: "salary_amt",
            message: "Please input updated Employee Salary Amt?",
            type: "input",
        },
        {
            name: "manager_id",
            message: "Please input updated Employee Manager ID?",
            type: "input",
        }
    ]
    inquirer.prompt(updateEmpQuestions)
    .then((response) => {        
        pool.query(`
        UPDATE employees
        SET first_name = '${response.first_name}',
        last_name = '${response.last_name}',
        dep_id = '${response.dep_id}',
        role_id = '${response.role_id}',
        salary_id = '${response.salary_id}',
        salary_amt = '${response.salary_amt}',
        manager_id = '${response.manager_id}'
        WHERE id = ${response.id}
        `)
        console.log("Employee Updated!");
    })
    .then(() => {
        let count = 2;
        const timer = setInterval(function() {
            count--;   
            if (count === 0) {
                clearInterval(timer);
                process.exit();
            }
        }, 1000);
    })
}

module.exports = updateEmp;
