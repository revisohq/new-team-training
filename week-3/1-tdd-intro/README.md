# Testing

Software testing is the act of examining the artifacts and the behavior of the software under test by validation and verification. Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risks of software implementation.

Before diving into Test-Driven Development, we will see the types of tests that are available to do in software engineering.

## Types of test

### Manual Test

There are three main entities that perform manual testing:

- QA Team
- Developers (and also the POs)
- **The customers**: they are always testing our software while using it! For this reason, is important not to waste this valuable info by collecting as much feedback as possible.

Our PO-Bug and Improvements Jira boards are the example of the results of manual testing.

### Unit Test

Unit Testing is the type of software testing level in which each individual components of a software are tested separately. It is generally performed by developers. It can't be used for those systems which have a lot of interdependence between different modules.

It's a black-box type of test, in which only **pure functions** (functions that return identical outputs with identical input and have no side effects) can be tested: there are no databases or external API call involved.

#### PROs

- Cheap, the app doesn't have to be up in order to perform this type of tests
- Increases developer productivity
- Encourages modular programming
- Easy to add in a CI/CD pipeline (for example: we don't deploy the app if the unit tests are failing)

#### CONs

- Logical mistakes in the test cases won't be detected
- It can be challenging to cover all the code
- It won't catch all bugs of our app
- It's difficult to do it for legacy code

### End-to-end Test

Like unit test, but stateful. For example, a call to an API of our application is an e2e test.

End-to-end testing is the type of software testing used to test the entire service from starting to the end along with its integration with the external interfaces. The main purpose of end-to-end testing is to identify the system dependencies and to make sure that the data integrity and communication with other systems, interfaces and databases to exercise complete productions.

The most famous tool to perform e2e testing is [Postman][postman], which has a built-in feature to [perform tests][postman-test].

#### PROs

- Has a larger coverage than unit testing
- Ensures the correctness of the application

#### CONs

- There is the necessity to mock the external dependencies of the service and, if there are many of them, it can be time consuming
- We don't have the certainty of the state, so we have to make sure that the state is properly reset before repeating the test (for example, making sure the db is empty before inserting a new row etc.)
- We have to make sure the app is up and running before performing e2e tests, otherwise we will have false negatives
- Harder to reproduce in CI/CD than unit tests

### Integration Test

Similar to E2E test, but in case of a multi-service application the services are tested together. In a monolithic application, e2e and integration tests are the same thing.

Pros and Cons are like e2e testing.

### Penetration Test

This type of tests are performed to ensure the security of our system. They can be manual or automatic.

There is a dedicated team in our company that does this.

Some companies, like [Google][google-bug-hunters], even do _Bug Bounty programs_, in which they offer recognition and compensation to external developers or ethical hackers for reporting bugs regarding security exploits and vulnerabilities.

### Stress Test

Stress tests try to find out what happens to the application in edge cases.

There are two types or stress test:

- Database: _what happens if I try to add 100,000 rows in the database? Will it explode? Will it take forever?_
- Networking: _what happens if I perform a million requests to my API in a short period of time?_

This is a valuable type of test especially for the business side of an application, because it can provide a trend of the application costs, both in terms of money and in terms of response time, as the application load increases.

They are extremely valuable, but they're not cheap to implement.

A famous tool to perform stress tests is [JMeter][jmeter].

#### PROs

- Extremely valuable, because it helps in the identification of performance bottlenecks before production deployment
- It helps in configuring the most optimal infrastructure for the setup
- It minimizes the risk of downtime by identifying and isolating the requests whose performance needs to be improved.
- It provides a sense of confidence and reliability in the application's performance.

#### CONs

- Expensive in terms of testing tools licenses and test environments costs
- Load test script creation requires scripting knowledge of the language supported by the tool.
- Incorrectly configured or scripted load test plan/script can lead to false performance issues which take a considerable amount of time and resources.

### Regression Test

[Regression testing][regression] is a practice that ensures an application still functions as expected after any code changes, updates, or improvements. Changes that may require regression testing include bug fixes, software enhancements, configuration changes, and even substitution of electronic components.
They can be performed on one or multiple services at a time.

In order to perform regression testing when an error occurs in an application, we should be able to revert the system back to before the error occurred, and start from there to fix the issue (especially the database).

#### PROs

- It's the most powerful test
- If handled correctly, they can prevent the introduction of bugs, especially the repetition of the same ones

#### CONs

- It's the most expensive type of test, also in terms of time (the database backups are time consuming)
- Hard to maintain, especially in case of database migrations

# Test-driven development

## Intro

Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later.

Test-driven development is related to the test-first programming concepts of extreme programming

TDD encourages simple designs and inspires confidence.

More on TDD: [here][tdd-wikipedia] and [here][tdd]

## Why we use it

It's useful to define the requirements of our features, because we can start by the expected results first and then build everything from there.

TDD can be a powerful tool to guide us in the development, to improve modularity and separation of concerns. We will use it largely in the backend, and in the frontend apps to test independent pieces of logic (we won't test the components because it can be a waste of time, since we are going to manually test the components anyway).

## Workflow

> Fake it till you make it!

1. **Add a test.** The specifications are provided by the POs via use cases and user stories. A key benefit of test-driven development is that it makes the developer focus on requirements before writing code. This is in contrast with the usual practice, where unit tests are only written after code.

2. **Run all tests.** This shows that new code is actually needed for the desired feature. It validates that the test harness is working correctly. It rules out the possibility that the new test is flawed and will always pass.

3. **Write the simplest code that passes the new test.** Inelegant or hard code is acceptable, as long as it passes the test.

4. **All tests should now pass.** If any fail, the new code must be revised until they pass.

5. **Refactor as needed**, using tests after each refactor to ensure that functionality is preserved. Examples of refactoring:

   - moving code to where it most logically belongs
   - removing duplicate code
   - making names self-documenting
   - splitting methods into smaller pieces
   - re-arranging inheritance hierarchies

6. **Repeat!**

## Let's code!

_Example in the /multi app of cta-training_

- First of all, we have to add our testing library: [Jest](https://jestjs.io/docs/getting-started)

  ```
  npm install --save-dev jest
  ```

- Add the test scripts in the `package.json`

  ```json
  {
    "___// Testing Utilities //___": "",
    "test": "jest",
    "tdd": "jest --watchAll"
  }
  ```

- Add the `jest.config.js` file in the root folder

  ```js
  module.exports = {
    name: 'unit',
    displayName: 'Unit Tests',

    // A list of paths to directories that Jest should use to search for files in
    roots: ['<rootDir>/src/'],

    // The test environment that will be used for testing
    testEnvironment: 'node',

    // jest will execute all the tests contained in every file ending in "test.unit.js" or "spec.unit.js"
    testMatch: [
      `**/${process.env.MATCH || ''}?(*.)+(spec.unit|test.unit).[jt]s?(x)`,
    ],
  };
  ```

- Add yor test

<!-- Links -->

[tdd-wikipedia]: https://en.wikipedia.org/wiki/Test-driven_development
[tdd]: https://www.agilealliance.org/glossary/tdd/
[postman]: https://www.postman.com/
[postman-test]: https://learning.postman.com/docs/writing-scripts/test-scripts/
[jmeter]: https://jmeter.apache.org/
[regression]: https://en.wikipedia.org/wiki/Regression_testing
[google-bug-hunters]: https://bughunters.google.com/
