# Reactive Workshop Exercises #

## Prerequisites

* NodeJS 8.5.0+
* NPM 5.4.0+

## Running the apps

Install dependencies:

````
npm install
````

To start the app:

````bash
npm start
````

Some projects have test, run them using:

````bash
npm test
````

## Upgrade

````bash
for i in *; do ( echo $i; cd $i; rm -fr package-lock.json node_modules; npm install; ); done
````
