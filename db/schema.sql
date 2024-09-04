-- Drops database if exists
DROP DATABASE IF EXISTS emptrac;
-- Creates emptrac database
CREATE DATABASE emptrac;

-- Connects to emptrac database
\c emptrac;

-- Creates departments table
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

-- Creates roles table
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) UNIQUE NOT NULL,
    dep_id INTEGER,
    salary_id INTEGER
    -- FOREIGN KEY (dep_id) REFERENCES departments(id),
    -- FOREIGN KEY (salary_id) REFERENCES salaries(id)
);

-- Creates salaries table
CREATE TABLE salaries (
    id SERIAL PRIMARY KEY,
    amt DECIMAL NOT NULL,
    dep_id INTEGER,
    role_id INTEGER
    -- FOREIGN KEY (dep_id) REFERENCES departments(id),
    -- FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Creates managers table
CREATE TABLE managers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    dep_id INTEGER,
    role_id INTEGER,
    salary_id INTEGER
    -- FOREIGN KEY (dep_id) REFERENCES departments(id),
    -- FOREIGN KEY (role_id) REFERENCES roles(id),
    -- FOREIGN KEY (salary_id) REFERENCES salaries(id)
);

-- Creates employees table
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    dep_id INTEGER,
    role_id INTEGER,
    salary_id INTEGER,
    salary_amt INTEGER,
    manager_id INTEGER
    -- FOREIGN KEY (dep_id) REFERENCES departments(id),
    -- FOREIGN KEY (role_id) REFERENCES roles(id),
    -- FOREIGN KEY (salary_id) REFERENCES salaries(id),
    -- FOREIGN KEY (salary_amt) REFERENCES salaries(amt),
    -- FOREIGN KEY (manager_id) REFERENCES managers(id)
);