import React from 'react';
import PrintMessage from "./components/PrintMessage";
import Product from "./components/Product";
import ShoppingCart from "./components/ShoppingCart";


let App  = () => {
  return (
    <React.Fragment>
     <nav className="navbar navbar-dark bg-dark navbar-expand-md">
         <div className="container">
         <a href="/" className="navbar-brand font-weight-bold">React event binding</a>
         </div></nav>
        <PrintMessage />
        <Product />
        <ShoppingCart />
     </React.Fragment>
  );
}

export default App;
