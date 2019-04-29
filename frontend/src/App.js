import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  Customers  from  './Customers/Customers';
import  './App.css';

class  App  extends  Component {

render() {
    return (
    <Customers/>
    );
}
}
export  default  App;
