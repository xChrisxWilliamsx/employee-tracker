const { Pool } = require('pg');
const viewOptions = require('./viewQuestions');

const pool = new Pool(
    {
        user: '',
        password: '',
        host: 'localhost',
        database: 'emptrac'
    },
);
pool.connect();

const viewDepartments = () => {
    pool.query(
        `SELECT * 
        FROM departments`, 
        ((err, {rows}) => {
            console.log("\n");
            console.table(rows);
        })
        // .then(() => {
        //     viewOptions();
        // })
    )
};

const viewRoles = (() => {
    pool.query(
        `SELECT * 
        FROM roles`, 
        ((err, {rows}) => {
            console.table(rows);
        })
    );
    // viewOptions();
});

const viewSalaries = (() => {
    pool.query(
        `SELECT * 
        FROM salaries`, 
        ((err, {rows}) => {
            console.table(rows);
        })
    );
    // viewOptions();
});

const viewManagers = (() => {
    pool.query(
        `SELECT * 
        FROM managers`, 
        ((err, {rows}) => {
            console.table(rows);
        })
    );
    // viewOptions();
});

const viewEmployees = (() => {
    pool.query(
        `SELECT * 
        FROM employees`, 
        ((err, {rows}) => {
            console.table(rows);
        })
    );
    // viewOptions();
});

const viewEmpByDep = (() => {
    pool.query(
        `SELECT employees.first_name, employees.last_name, departments.name
        FROM employees
        INNER JOIN departments ON employees.dep_id = departments.id`, 
        ((err, {rows}) => {
            console.table(rows);
        })
    );
    // viewOptions();
});

const viewEmpByManager = (() => {
    pool.query(
        `SELECT employees.first_name, employees.last_name, managers.id, managers.name
        FROM employees
        INNER JOIN managers ON employees.manager_id = managers.id`, 
        ((err, {rows}) => {
            console.table(rows);
        })
    );
    // viewOptions();
});

const viewEmpSalByDep = (() => {
    pool.query(
        `SELECT employees.dep_id, SUM(employees.salary_amt)
        FROM employees
        GROUP BY employees.dep_id`, 
        ((err, {rows}) => {
            console.table(rows);
        })
    );
    // viewOptions();
});

module.exports = { viewDepartments, viewRoles, viewSalaries, viewManagers, viewEmployees, viewEmpByDep, viewEmpByManager, viewEmpSalByDep };
