import React from 'react';
import { MdStar } from 'react-icons/md';
import { useCart } from './CartContext';

function ProductList() {
  const { products, cartItems, addItemToCart, removeFromCart } = useCart();



  return (
    <section className="py-5">
      <div className="container-xl">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <div key={product.id} className="col mb-5">
              <div className="card h-100">
                {(
                  <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
                    Sale
                  </div>
                )}
                <img className="card-img-top" 
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" 
                alt="Product" />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.title}</h5>
                    {(
                      <div>
                        {[...Array(5)].map((_, index) => (
                          <MdStar key={index} style={{ color: 'green' }} size={20} />
                        ))}
                      </div>
                    )}
                    <p>${product.price}</p>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {cartItems.map((cartProduct) => cartProduct.id).includes(product.id) ? (
                      <button className="btn btn-outline-danger mt-auto" onClick={() => removeFromCart(product.id)}>
                        Remove from Cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={() => addItemToCart(product)}>
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
