# Reactive Workshop Exercises

## Prerequisites

- git client
- NodeJS 12.2.0+ & NPM 6.9.0+
- Recommended Visual Studio Code extensions:
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Running the apps

On Windows, you will have to clone as Administrator, otherwise symlinks would not work.

```bash
git clone -c core.symlinks=true https://bitbucket.org/8pointers/reactive-workshop-exercises.git
cd reactive-workshop-exercises
npm install

cd 01-intro
npm start
```

In case your OS doesn't support symlinks:

```bash
git clone https://bitbucket.org/8pointers/reactive-workshop-exercises.git
cd reactive-workshop-exercises/01-intro
rm package.json node_modules src/setupProxy.js
cp ../package.json .
cp ../setupProxy.js src
npm install
npm start
```

For apps that have tests, run them using:

```bash
npm test
```
