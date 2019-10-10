const { User } = require('./models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

// Find all users
// Raw SQL: SELECT * FROM "Users";



// Create a new user
// Raw SQL: INSERT INTO "Users" (id, firstName, lastName, email, userName, password, jobTitle) VALUES (DEFAULT, 'Jane', 'Doe', 'jane@jane.com', 'janedoe', '123456789', 'Systems Analyst')



// Delete everyone named "Jane"
// Raw SQL: DELETE FROM "Users" WHERE firstName = 'Jane'


// Change lastname "Doe" to "Smith"
// UPDATE "Users" SET lastName='Smith' WHERE lastName = 'Doe'


// Find all users and only show their email
// Raw SQL: SELECT email FROM "Users";


// Find all users where firstname is John
// Raw SQL: SELECT * FROM "Users" WHERE firstName = "John";


// Find all users where firstname is either John or Jane
// Raw SQL: SELECT * FROM "Users" WHERE firstName = "John" OR firstName = "Jane";



const run = async () => {
    
}

run()
