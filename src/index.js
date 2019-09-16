import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import '../src/css/linearicons.css';
import '../src/css/font-awesome.min.css';
import '../src/css/themify-icons.css';
import '../src/css/bootstrap.css';
import '../src/css/main.css';

import 'jquery';
import 'bootstrap';

import DashBoard  from '../src/screen/Dashboard';
import ProductDetails from '../src/screen/ProductDetails';
import Cart from '../src/screen/Cart';
import Checkout from '../src/screen/Checkout';
import Confirmation from '../src/screen/Confirmation';

ReactDOM.render(
    <Provider>
    <div>
      <Router>
        <div>
          <Route exact path={'/'} component={DashBoard} />
          <Route exact path={'/ProductDetail'} component={ProductDetails} />
          <Route exact path={'/Cart'} component={Cart} />
          <Route exact path={'/Checkout'} component={Checkout} />
          <Route exact path={'/Confirmation'} component={Confirmation} />
          
        </div>
      </Router>
    </div>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
