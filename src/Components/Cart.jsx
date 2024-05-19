//  importing components
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductQuantity, setProductQuantityToZero } from './CartFunction';
import '../App.css';

const Cart = () => {
    // setting states
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      {products.map((product) => {
        const discountPrice = Math.round(product.price * (product.discountPercentage / 100));
        const quantity = product.quantity;

        const addQuantity = () => {
          dispatch(updateProductQuantity({ id: product.id, quantity: quantity + 1 }));
        };

        const removeQuantity = () => {
          if (quantity > 1) {
            dispatch(updateProductQuantity({ id: product.id, quantity: quantity - 1 }));
          }
        };

        const removeButton = () => {
          dispatch(setProductQuantityToZero(product.id));
        };

        return (
          <div
            key={product.id}
            className="card mb-5 bg-light text-dark"
            style={{ minWidth: '100%', maxWidth: '300px' }}
          >
            <div className="row g-0">
              <div className="col-md-3">
                <img
                  src={product.image}
                  className="img-fluid p-4 cardImage"
                  alt={product.alt}
                />
              </div>
              <div className="col-md-9">
                <div className="card-body px-3">
                  <div className="top">
                    <div className="top-header d-flex justify-content-between align-items-center">
                      <h5 className="card-title">{product.title}</h5>
                      <div className="d-flex align-items-center justify-content-end qp-area">
                        <div className="d-flex align-items-center">
                          <button
                            type="button"
                            className="btn btn-minus"
                            style={{ marginRight: '8px' }}
                            onClick={removeQuantity}
                          >
                            {' '}
                            -{' '}
                          </button>
                          <div className="py-1 quantityText">{quantity}</div>
                          <button
                            type="button"
                            className="btn btn-plus"
                            style={{ marginLeft: '8px' }}
                            onClick={addQuantity}
                          >
                            {' '}
                            +{' '}
                          </button>
                        </div>
                        <h4
                          className="card-title-2"
                          style={{ marginLeft: '8px' }}
                        >
                          ${product.price}
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="card-text-brand">
                        <b>Brand : </b>
                        {product.brand}
                      </p>
                    </div>
                    <b>Description : </b>
                    <p className="card-text-description">●{product.description}</p>
                    <div className="card-text">
                      <b> In Stock : </b>&nbsp;
                      <p
                        className="card-text text-success"
                        style={{ display: 'inline' }}
                      >
                        <b>{product.stock}</b>
                      </p>
                    </div>
                    <br />
                    <p className="card-text">
                      <b>Rating:</b> {product.rating}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="card-text">
                        <b>Discount Offer : </b>&nbsp;
                        <p
                          className="card-text text-success"
                          style={{ display: 'inline' }}
                        >
                          <b>{product.discountPercentage}%</b>
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <button
                          type="button"
                          className="btn btn-remove"
                          style={{ marginRight: '20px' }}
                          onClick={removeButton}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="bottom">
                    <div className="d-flex justify-content-between align-items-center">
                      Original Price (1 item) :{' '}
                      <p className="card-text">
                        <b>${product.price}</b>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Discount Amount :{' '}
                      <p className="card-text text-success">
                        {' '}
                        <b> - ${discountPrice}</b>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Final Price :{' '}
                      <p className="card-text">
                        <b>${product.price - discountPrice}</b>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Total Amount :{' '}
                      <h5 className="card-text">
                        ${(product.price - discountPrice) * quantity}
                      </h5>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary my-3 float-end"
                  >
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
