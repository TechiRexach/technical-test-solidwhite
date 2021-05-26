# Solid White Coding Challenge

## Components:

### 1. Table Component:

First the component receives by his props the first state (```useState```), which is the provided array as example.

It renders a table with all the data using the map method.

We define a ```useEffect``` which it will re-renders the data every time they changes. This is why we pass an array as the optional second argument as array.

### 2. Input Component:

First we define three ```useState```, each one, as an empty string.

The first one (```input```), will receives the text written by the user when the button is clicked.

The other two (```wellDone```, ```error```) will be the ones which displays the result about if the user has written the correct word or not.

Once the input is submitted, the arrow function ```magic``` will compares it with the word that we have define as the good one. If it is not the same, the component will render the error message and clear the input field.

On the other hand, if the word that the user has written is correct, the successful message will be shown.

## How to use it:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.# technical-test-solidwhite
