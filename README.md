# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start` - `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` - `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` - `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Credit Card Transaction Flow

### Happy Path

To simulate a successful credit card transaction, you can use the following credit card numbers:

- **VISA**: 4532123412341234
- **Mastercard**: 5532123412344697

Entering these valid credit card numbers should result in a successful transaction.

### Sad Path

To simulate an unsuccessful credit card transaction, you can use the following credit card numbers:

- **VISA**: 4532123412347688
- **Mastercard**: 5532123412344369

Entering these invalid credit card numbers should result in a failed transaction.

For all other credit card numbers that are valid and match VISA or Mastercard, the transaction status will show as PENDING.
