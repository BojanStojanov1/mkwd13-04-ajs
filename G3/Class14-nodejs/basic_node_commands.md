## What is Node.js

Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
It allows you to run JavaScript on the server-side, outside of the browser.
Node.js is known for its event-driven, non-blocking I/O model, which makes it efficient and scalable for building network applications.

## What is npm

npm stands for Node Package Manager.
It is a tool that comes with Node.js and helps you manage packages (libraries or modules) in your project.
With npm, you can install, update, and remove packages easily.

## What is a Module?

A module is a reusable block of code in Node.js.
Modules help you organize your code by splitting it into separate files.
There are three types of modules:
Built-in Modules: Provided by Node.js (e.g., http, fs, path).
Third-Party Modules: Installed via npm (e.g., express, lodash).
Local Modules: Custom modules that you create in your own project.

Running a Node.js File:
`node app.js`

Creating packackage.json file
`node init`

Initializing a New Project:
`npm init`

Installing a Package:
`npm install <package-name>`\
Example:
`npm install express`

Installing Packages Globally:
`npm install -g <package-name>`

Running a script:
`npm run <script-name>`

## What is .gitignore

A .gitignore file is used in Git repositories to specify which files and directories should be ignored—meaning they won't be tracked or committed to the repository.\
This is particularly useful in projects like Node.js where certain files (e.g., dependencies, logs, environment files) should not be version controlled.

### Why Use a .gitignore?

- Avoid Unnecessary Files: Prevent files like node_modules (which can be huge) from cluttering your repository.
- Security: Exclude sensitive files (e.g., .env) that contain API keys or credentials.
- Clean Repository: Keep your repository clean by excluding temporary files, build outputs, or logs.
