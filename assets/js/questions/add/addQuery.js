const { Pool } = require('pg');
const inquirer = require('inquirer');
const addOptions = require('./addQuestions');

const pool = new Pool(
    {
        user: '',
        password: '',
        host: 'localhost',
        database: 'emptrac'
    },
);
pool.connect();

const addDep = () => {
    const addDepQuestion = [
        {
            name: "dep",
            message: "Please input name of new Department:",
            type: "input",
        }
    ]
    inquirer.prompt(addDepQuestion)
    .then((response) => {       
        pool.query(
            `INSERT INTO departments (name)
            VALUES ('${response.dep}');`
        )
        console.log(`${response.dep} added to Departments`);
    })
    .then (() => {
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

const addRole = () => {
    const addRoleQuestion = [
        {
            name: "roleTitle",
            message: "Please input name of new Role Title:",
            type: "input",
        }        
    ]
    inquirer.prompt(addRoleQuestion)
    .then((response) => {       
        pool.query(
            `INSERT INTO roles (title)
            VALUES ('${response.roleTitle}');`
        )
        console.log(`${response.roleTitle} added to Roles`);
    })
    .then (() => {
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

const addEmp = () => {
    const addEmpQuestion = [
        {
            name: "first_name",
            message: "Please input name of new Employees First Name:",
            type: "input",
        },
        {
            name: "last_name",
            message: "Please input name of new Employees Last Name:",
            type: "input",
        },
    ]
    inquirer.prompt(addEmpQuestion)
    .then((response) => {       
        pool.query(
            `INSERT INTO employees (first_name, last_name)
            VALUES ('${response.first_name}', '${response.last_name}');`
        )
        console.log(`${response.first_name} ${response.last_name} added to Employees`);
    })
    .then (() => {
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

module.exports = { addDep, addRole, addEmp };
