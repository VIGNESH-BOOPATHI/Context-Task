import React from 'react';
import { CartProvider } from './CartContext';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import ProductList from './ProductList';
import './App.css';
const App = () => {
  return (
    
    <CartProvider>
      <Navbar />
      <Header />
      <ProductList />
      <Footer />
    </CartProvider>
    
  );
};

function Header() {
  return (
    <header className="bg-dark py-5 header">
      <div>
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            With this shop homepage template
          </p>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-5 bg-dark">
      <div className="container-xl">
        <p className="m-0 text-center text-white">
          Copyright © Your Website 2023
        </p>
      </div>
    </footer>
  );
}

export default App;
