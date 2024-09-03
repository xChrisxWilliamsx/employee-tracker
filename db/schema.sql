DROP DATABASE IF EXISTS emptrac;
CREATE DATABASE emptrac;

\c emptrac;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) UNIQUE NOT NULL,
    dep_id INTEGER,
    salary_id INTEGER,
    FOREIGN KEY (dep_id) REFERENCES departments(id),
    FOREIGN KEY (salary_id) REFERENCES salaries(id)
);

CREATE TABLE salaries (
    id SERIAL PRIMARY KEY,
    amt DECIMAL NOT NULL,
    dep_id INTEGER,
    role_id INTEGER,
    FOREIGN KEY (dep_id) REFERENCES departments(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE managers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    dep_id INTEGER,
    role_id INTEGER,
    salary_id INTEGER,
    FOREIGN KEY (dep_id) REFERENCES departments(id),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (salary_id) REFERENCES salaries(id)
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    dep_id INTEGER NOT NULL,
    role_id INTEGER NOT NULL,
    salary_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (dep_id) REFERENCES departments(id),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (salary_id) REFERENCES salaries(id),
    FOREIGN KEY (manager_id) REFERENCES managers(id)
);