# Week 4 - Frontend technologies

## Question first:

- What do you know about Node.js and React.js?

## Node.js

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

Useful documentation:

- https://nodejs.org/en/
- https://nodejs.dev/learn

Important concepts:

- **Node CLI**: https://blog.risingstack.com/mastering-the-node-js-cli-command-line-options/
- **npm**: Node.js package manager, and some useful commands
  - npm cheat sheet: https://dev.to/ganeshtyjo/npm-cheat-sheet-2om5
- **Makefile**
  - Tutorial: https://opensource.com/article/18/8/what-how-makefile

## Transpiling

https://www.digitalocean.com/community/tutorials/javascript-transpilers-what-they-are-why-we-need-them

https://dev.to/kealanparr/compiling-vs-transpiling-3h9i

## ReactJS

React is an open source JavaScript library for developing user interfaces in web applications.
React is developed and released by Facebook.

https://reactjs.org/

ReactJS uses JSX, which is a syntax extension to JavaScript.

```jsx
const name = 'John Doe';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(element, document.getElementById('root'));
```

More on JSX: https://reactjs.org/docs/introducing-jsx.html

### Why we use ReactJS

It uses component and data patterns that improve readability and helps to maintain larger apps.

We use it because we can create single page applications (SPAs) with its inline routing feature.

### Create react app

Tool to quickly create a React.js app with all the basic dependencies

https://create-react-app.dev/docs/getting-started/

## Styleguidist

It's a library that enables us to develop React components in an isolated way, while building the UI documentation.

https://react-styleguidist.js.org/

https://react-styleguidist.js.org/docs/documenting

How to use it:

- `npm install --save-dev react-styleguidist`

- `npx styleguidist server`

## Package react app with nginx

How can we publish the app in production? With nginx!

Add a dockerfile in the frontend app with some [boilerplate lines](https://github.com/revisohq/demo-app/blob/main/app/Dockerfile)

## Other useful things:

- Material UI https://mui.com/getting-started/installation/
- Hooks https://reactjs.org/docs/hooks-intro.html
- Redux https://redux.js.org/

# Exercises

- Clone the repo in `./exercise`
- Start the app for development
- Modify the app, go crazy!
