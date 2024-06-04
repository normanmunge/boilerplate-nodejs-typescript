### SETTING UP TYPESCRIPT EXPRESS SERVER

Run the command `npm init -y` to create a `package.json` file.

# Create a minimal server using Express

`npm i express dotenv`

- Create a directory called `src` and add a file called `index.ts`
- Create a `.env` file in your root folder. For security purposes, ensure you add this file to a `.gitignore` file to avoid exposing your environment variables.

# Install typescript

- We install typescript as a dev dependency with additional `@types` declaration packages for Express and Node.js that offer type definitions in the form of declaration files.
- Run the command below for installation:

`npm i -D typescript @types/express @types/node`

- Generate a `tsconfig.json` to manage the project settings for your compiler. Run the command:

`npx tsc --init`

- Uncomment and Change the `outDir` in the tsconfig to `./dist`
- Update the main field in `package.json` to `dist/index.js`
- Add the include and exclude objects in your tsconfig.json

"compilerOptions: {...},
"include": ["src/**/*.ts"],
"exclude": ["node_modules"]

# Watch file changes

- Install `nodemon` as a development utility package to detect file changes in your project.
- Install `ts-node` to enable code transpilation for working with the typescript code directly in the Node.Js environment

`npm i -D nodemon ts-node`

- After installing the dev dependencies, update the scripts in the package.json:

{
"scripts": {
"build": "npx tsc",
"start": "node dist/index.js",
"dev": "nodemon src/index.ts"
}
}

# Installing Other Dependencies

- The following libraries defined in your `package.json` are optional:

1. Axios - To call a route from another server eg mailgun server
2. Bcrypt - Encrypting and decrypting your data
3. Body-parser - Converting data into JSON format
4. Cors - Security mechanism that enables HTTP requests from browser
5. Express-validator - Security mechanism for validating data from client
6. Helmet - Security mechanism to add extra security protocols to your project
7. Http-errors - Enabling easier error handling for your routes
8. Jsonwebtoken - For token based authentication
9. Knex - ORM for your data models
10. Knex-paginate - Enabling pagination of data coming from database
11. PG - Postgres relational database
12. Mocha - Framework for automated testing
13. Chai - Framework for automated testing
14. Sinon - Framework for automated testing

- Incase they aren't needed in your project, you can uninstall them by running `npm uninstall package-name`

# Resources

For a more detailed explanation, refer to this article: [https://blog.logrocket.com/how-to-set-up-node-typescript-express/]
