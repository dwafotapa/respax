ResPax
============

ResPax is a Single Page Application built with [AngularJS](https://angularjs.org/) that books a limited number of passengers according to availabilities for a specific date.

It uses the following [npm](https://www.npmjs.com/) packages:
* [Webpack 3](https://webpack.js.org/)
* [AngularJS 1](https://angularjs.org/)
* [angularjs-datepicker](https://github.com/720kb/angular-datepicker)
* [Boostrap 3](http://getbootstrap.com/)
* [Fontawesome 4](http://fontawesome.io/)
* [Lodash](https://lodash.com/)


## Demo

https://dwafotapa.github.io/respax/


## Installation

```javascript
yarn
```

or

```javascript
npm install
```

## Description

Its folder structure is simple and organised by feature. The app is fully responsive and built with Bootstrap.

The calendar is built with the angularjs-datepicker library. It defaults to today's date and has an easily readable format like "Tuesday, 4 April 2017". Changing dates will automatically update the number of available seats in the alert box and sets PaxNos' inputs back to 0.

The PaxNos component is a reusable component that takes 4 attributes: the types of passengers, the number of available seats, the departure date and an optional display alert attribute. It's an expandable panel that books a limited number of passengers according to available seats for the specific date selected. It also displays the number of passengers selected even when the component is closed. The availabilities are defined here: 'app/assets/json/data.json'.

At last, I have implemented a ngPosInt directive. It is an attribute on the PaxNos component's inputs that parses the input values and pre-validates them. Try entering non-numerical characters or digits greater than the number of available seats and after losing focus, the input is automatically set back to its previous value.

Enjoy!