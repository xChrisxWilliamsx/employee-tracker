-- Seeds departments table
INSERT INTO departments (name) VALUES 
('Sales'),
('F&I'),
('Parts'),
('Service'),
('Human Resources'),
('Detail');

-- Seeds roles table
INSERT INTO roles (title, dep_id, salary_id) VALUES
('Sales Manager', 1, 1),
('Sales Associate', 1, 2),
('F&I Manager', 2, 3),
('Parts Manager', 3, 4),
('Parts Associate', 3, 5),
('Service Manager', 4, 6),
('Service Advisor', 4, 7),
('Service Main Tech', 4, 8),
('Service Lube Tech', 4, 9),
('Service Porter', 4, 10),
('HR Manager', 5, 11),
('HR Associate', 5, 12),
('Controller', 5, 13),
('Detail Manager', 6, 14),
('Detail tech', 6, 15);

-- Seeds salaries table
INSERT INTO salaries (amt, dep_id, role_id) VALUES
(130000, 1, 1),
(80000, 1, 2),
(140000, 2, 3),
(95000, 3, 4),
(54000, 3, 5),
(110000, 4, 6),
(108000, 4, 7),
(95000, 4, 8),
(42000, 4, 9),
(32500, 4, 10),
(72000, 5, 11),
(60000, 5, 12),
(125000, 5, 13),
(92000, 6, 14),
(65000, 6, 15);

-- Seeds managers table
INSERT INTO managers (name, dep_id, role_id, salary_id) VALUES
('Alan Roman', 1, 1, 1),
('Jody Dodson', 2, 3, 3),
('Zane Booker', 2, 3, 3),
('Fernando Pittman', 3, 4, 4),
('Roosevelt Gray', 4, 6, 6),
('Morton Wolf', 5, 11, 11),
('Theodore Burns', 6, 14, 14);

-- Seeds employees table
INSERT INTO employees (first_name, last_name, dep_id, role_id, salary_id, salary_amt, manager_id) VALUES
('Maxine', 'Mayer', 1, 2, 2, 80000, 1),
('Florencio', 'Mcneil', 1, 2, 2, 80000, 1),
('Marcel', 'Compton', 1, 2, 2, 80000, 1),
('Emmett', 'Barton', 1, 2, 2, 80000, 1),
('Bud', 'Kline', 1, 2, 2, 80000, 1),
('Garrett', 'Hobbs', 1, 2, 2, 80000, 1),
('Casey', 'Hart', 3, 5, 5, 54000, 4),
('Margie', 'Savage', 3, 5, 5, 54000, 4),
('Lucinda', 'Reilly', 4, 7, 7, 108000, 5),
('Juan', 'David', 4, 7, 7, 108000, 5),
('Felipe', 'Hubbard', 4, 7, 7, 108000, 5),
('Wallace', 'Chan', 4, 8, 8, 95000, 5),
('Jonah', 'Fitzpatrick', 4, 8, 8, 95000, 5),
('Alissa', 'Oneal', 4, 8, 8, 95000, 5),
('Yvette', 'Cox', 4, 9, 9, 42000, 5),
('Dustin', 'Shannon', 4, 9, 9, 42000, 5),
('Suzanne', 'Ward', 4, 9, 9, 42000, 5),
('Thanh', 'Spears', 4, 9, 9, 42000, 5),
('Krista', 'Dixon', 4, 10, 10, 32500, 5),
('Randolph', 'Gutierrez', 4, 10, 10, 32500, 5),
('Delia', 'Galvan', 5, 12, 12, 60000, 6),
('Luz', 'Shelton', 5, 12, 12, 60000, 6),
('Dionne', 'Doyle', 5, 12, 12, 60000, 6),
('Walter', 'Clay', 5, 12, 12, 60000, 6),
('Ezekiel', 'Tran', 5, 13, 13, 125000, 6),
('Sammy', 'Alvarez', 6, 15, 15, 65000, 7),
('Sharron', 'Williams', 6, 15, 15, 65000, 7),
('Lorie', 'Burgess', 6, 15, 15, 65000, 7),
('Al', 'Johnston', 6, 15, 15, 65000, 7);