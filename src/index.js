//import _ from 'lodash';
//
// function component() {
//   const element = document.createElement('div');
//
//  // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//   return element;
// }
//
// document.body.appendChild(component());

import ReactDOM from 'react-dom';
import React from 'react';
const App = () => {
 return <h1>This is my React app!</h1>;
 }
ReactDOM.render(<App />, document.getElementById('app'));