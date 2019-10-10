# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

## Getting started

1. Fork
1. Clone

# Sequelize Querying

> Take five minutes and read the Sequelize docs on querying: 
>
> - https://sequelize.org/master/manual/querying.html

##

Let's go into the repo:

```sh
cd sequelize-querying
npm install
```

Create your database:

```sh
npx sequelize-cli db:create
```

Run the migration:

```sh
npx sequelize-cli db:migrate
```

Populate the database with seed data:

```sh
npx sequelize-cli db:seed:all
```

Test the database:

```sh
psql sequelize_querying_development
SELECT * FROM "Users";
```

## Querying

Work with the query.js file in the repo to execute different queries:

```sh
node query.js
```

```js
// Find all users
// Raw SQL: SELECT * FROM "Users";

const findAll = async () => {
    
}

// Create a new user
// Raw SQL: INSERT INTO "Users" (id, firstName, lastName, email, userName, password, jobTitle) VALUES (DEFAULT, 'Jane', 'Doe', 'jane@jane.com', 'janedoe', '123456789', 'Systems Analyst')

const createUser = async () => {

}


// Delete everyone named "Jane"
// Raw SQL: DELETE FROM "Users" WHERE firstName = 'Jane'

const destroyUser = async () => {
        
}

// Change lastname "Doe" to "Smith"
// UPDATE "Users" SET lastName='Smith' WHERE lastName = 'Doe'

const updateUser = async () => {

}

// Find all users and only show their email
// Raw SQL: SELECT email FROM "Users";

const findAllEmails = async () => {

}

// Find all users where firstname is John
// Raw SQL: SELECT * FROM "Users" WHERE firstName = "John";

const findAllJohns = async () => {
    
}

// Find all users where firstname is either John or Jane
// Raw SQL: SELECT * FROM "Users" WHERE firstName = "John" OR firstName = "Jane";

const findAllJohnsOrJanes = async () => {
  
}
```

## Resources

- https://sequelize.org/master/manual/querying.html
