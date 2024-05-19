import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import Cart from './Cart';
import '../App.css';

// Create a slice for cart management
const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: '4.69',
      stock: 94,
      brand: 'Apple',
      alt: 'iphone 9',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      image: 'https://www.alhaddadshop.com/images/thumbs/0007027_apple-iphone-6s-plus-32gb-gold_510.jpeg',
      quantity: 1,
    },
    {
      id: 2,
      title: 'iPhone X',
      description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ... ',
      price: 899,
      discountPercentage: 17.94,
      rating: '4.44',
      stock: 34,
      brand: 'Apple',
      alt: 'iphone 10',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/IPhone_X%2C_back_and_front%2C_Silver.png',
      quantity: 1,
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: '4.09',
      stock: 36,
      brand: 'Samsung',
      category: 'smartphones',
      alt: 'samsung ch@t',
      thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      image: 'https://images.samsung.com/is/image/samsung/ae_GT-S3353CWAXSG_001_Front?$624_624_PNG$',
      quantity: 1,
    },
    {
      id: 4,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      price: 280,
      discountPercentage: 17.91,
      rating: '4.3',
      stock: 123,
      brand: 'OPPO',
      alt: 'oppo f19',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSp7h7tkmRFHX5ax69twkzbTDnCm_2DurC5PB0oGttDEWg1q23BgUxQZzaXo3l_mpvvFD1NNJpAfLerZ6AfMRhYykfHgjOoag',
      quantity: 1,
    },
    {
      id: 5,
      title: 'Huawei P30',
      description: "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK",
      price: 499,
      discountPercentage: 10.58,
      rating: '4.09',
      stock: 32,
      brand: 'Huawei',
      alt: 'huawei p30',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
      image: 'https://specificationsplus.com/wp-content/uploads/2022/09/Huawei-P100E-Specifications-Plus.jpg',
      quantity: 1,
    },
  ],
  reducers: {
    // update Product Quantity function
    updateProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.find((product) => product.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
    setProductQuantityToZero: (state, action) => {
      const id = action.payload;
      const product = state.find((product) => product.id === id);
      if (product) {
        product.quantity = 0;
      }
    },
  },
});

const { actions, reducer } = cartSlice;
export const { updateProductQuantity, setProductQuantityToZero } = actions;

const store = configureStore({
  reducer: {
    cart: reducer,
  },
});

const CartFunction = () => (
  <Provider store={store}>
    <div className="container my-5">
      <Cart />
    </div>
  </Provider>
);

export default CartFunction;
