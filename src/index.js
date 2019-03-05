import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<div class="plate">
  <p class="script"><span>The React</span></p>
  <p class="shadow text1"></p>
  <p class="shadow text2">BMI</p>
  <p class="shadow text3">Calculator</p>
  <p class="script"><span>by Amanda & Viktor</span></p>
<App /> </div>, document.getElementById('root'));

serviceWorker.unregister();
