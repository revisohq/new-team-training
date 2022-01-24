# PostgreSQL and GraphQL

#### Requirements

- Windows
- VS Code
- Hasura CLI

## What is PostgreSQL?

PostgreSQL is an open-source relational database system, the cool thing is that it supports JSON data type, so it's almost like using NoSQL!

https://www.postgresqltutorial.com/what-is-postgresql/

https://github.com/marcopeg/amazing-postgresql

## PostgreSQL: why we use it?

We use it for its reliability, performance,
https://github.com/marcopeg/amazing-postgresql#why-is-postgresql-so-cool

Other resources:

https://fulcrum.rocks/blog/why-use-postgresql-database/

## PostgreSQL: local development with docker-compose

Go in the `/2-postgres-hasura/examples/hasura` folder and launch:

`make start-postgres`

## PostgreSQL: unit testing

PostgreSQL has functions, which can be tested with PgTap, which is a suite of functions to enable unit testing

https://pgtap.org/documentation.html

- Unit testing of db functions can be used in more complex cases such as stored procedures, triggers, etc.
- A good practice we could adopt to build the apps in the future is to move the business logic in the db functions (but not too much because it can have high costs)
- See the example in `/2-postgres-hasura/examples/postgres` folder (taken from https://github.com/marcopeg/amazing-postgresql/tree/main/projects/populate-nested-data-from-values-in-postgresql)

## Hasura and GraphQL

With these two technologies, we don't need to build APIs manually anymore!

https://graphql.org/learn/

https://hasura.io/

## Hasura: local development with docker-compose

Go in the `/2-postgres-hasura/examples/hasura` folder and launch

```
make start-hasura
```

## Hasura: authentication & roles

In Hasura, access control or authorization is based on roles.

https://hasura.io/docs/latest/graphql/core/auth/index.html

`[Demo: add a role and set permissions]`

Cool thing: [role-based column presets](https://hasura.io/docs/latest/graphql/core/databases/postgres/schema/default-values/column-presets.html)

## Hasura actions

Actions are a way to extend Hasura's schema with custom business logic using custom queries and mutations. Actions can be added to Hasura to handle various use cases such as data validation, data enrichment from external sources and any other complex business logic.

With this feature we will be able to build the Backend-For-Frontends (BFFs) for our applications, while keeping an high security standard.

We can also have the scrict typing of our APIs, without doing it directly in our backend app.

Another cool thing about actions is that we have the possibility to forward the request headers directly to the endpoints through the Hasura call. This will be useful for managing the authentication.

Hasura actions docs: https://hasura.io/docs/latest/graphql/core/actions/index.html

[Demo: create an action]

## Hasura: schema versioning and migrations

How do we keep track of the tables, roles, etc. that we create locally? Do we have to do it again every time we deploy the db in a new environment or when a new team member starts working on it?

Fortunately, Hasura provides a system of migrations to keep track of these things. To use it we have to install the Hasura CLI:<br>
https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli

- Additional info about migrations: https://hasura.io/docs/latest/graphql/core/migrations/index.html

- Practical example: https://github.com/revisohq/demo-app

  - launch command `make console`
  - open the "fake" console on `localhost:9695`
  - modify something, add tables, set permissions, triggers, etc.
  - close the console and launch `make migrate` (or restart the project)
  - see that some files have been automatically modified or created

- More on hasura CLI<br> https://hasura.io/docs/latest/graphql/core/hasura-cli/index.html

- How to setup migrations: https://hasura.io/docs/latest/graphql/core/migrations/migrations-setup.html#step-3-initialize-the-migrations-and-metadata-as-per-your-current-stateù

`cd services`

`hasura init migrations --admin-secret 'hasura' --endpoint http://localhost:8083`

`cd migrations`

`hasura migrate create "init" --from-server`

[note down the version of the migration]

`hasura migrate apply --version "<version>" --skip-execution --database-name <database-name>`

`hasura migrate apply --version "1640710600125" --skip-execution`

`hasura metadata export`

`hasura migrate status`

Create a migration:

`hasura console`

Open console and do the things you wanna do!

To create a seed:

`hasura seed create <seed_name> --from-table <table1> --from-table <table2>`

## Postman

Our favourite API client for testing and playing with APIs

https://www.postman.com/

# Exercises

- Start services and create a data structure for out app
- Track the tables
- Add a role with some permission
- Use Postman to play with APIs and write some tests (see `/2-postgres-hasura/examples/postman` and [this link](https://learning.postman.com/docs/writing-scripts/test-scripts/))
