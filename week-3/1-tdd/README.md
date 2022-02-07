# Test-driven development

## Intro

TDD encourages simple designs and inspires confidence.

More on TDD: https://en.wikipedia.org/wiki/Test-driven_development

## Why we use it

It's useful to define the requirements of our features, because we can start by the expected results

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
