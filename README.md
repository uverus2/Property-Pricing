This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## About Project 

The project was building using a CSV file from https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads. 

The Technologies used were :

* React JS - Hook based version to remove the need of maintaining "this".
* SCSS - Was used to ensure CSS was organised by using features such as nesting and mixins.
* d3-fetch - Was used to convert a CSV file to JSON .
* React Router - To provide routing for the application .
*  React-Datepicker - Was used to provide an already date picker component .

## About the App 

* User can search through lists of houses viewing their prices.
* User can search for houses by Date (Time in the CSV file was 00:00 for all entries so time pick was not incorporated).
* User can View more information about a selected property.