import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  Customers  from  './Customers/Customers';
import Finance from './Finance/Finance.js';

class  App  extends  Component {

render() {
    return (
      <BrowserRouter>
        <div>
          <Link to='/finance' > Finance </Link>
          <Link to='/customers' > Customers </Link>
          <Route  path="/finance/"  exact  component={Finance}  />
          <Route  path="/customers/"  exact  component={Customers}  />
        </div>
      </BrowserRouter>
    );
}
}
export  default  App;
