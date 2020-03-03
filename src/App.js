/** @jsx jsx **/
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveProducts, receiveCart } from "./redux/actions";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import Products from "./data/products";
import ProductsList from "./components/ProductList";
import Cart from "./components/Cart";
import { useEffect } from "react";
import { getCart } from "./redux/selectors";
import { Global } from "@emotion/core";

const container = css`
  display: flex;
`;

const CartButton = styled.button`
  background-color: lightpink;
  border: 2px solid white;
  float: right;
  color: white;
  font-size: 24px;
  z-index: 9999;
  &:hover {
    background-color: palevioletred;
    border: 2px solid palevioletred;
  }
`;

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Muli");
  body {
    font-family: "Muli", sans-serif;
    margin: 0;
  }
`;

function App() {
  const [showCart, toggleCart] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(receiveProducts(Products));
    dispatch(receiveCart(Products));
  }, [dispatch]);

  const cart = useSelector(getCart);
  let total = 0;
  cart.forEach(element => {
    total += element.inCart;
  });

  return (
    <>
      <Global styles={globalStyles} />
      <CartButton onClick={() => toggleCart(!showCart)}>
        {showCart ? "Hide Cart" : "Show Cart"}
        {`(${total})`}
      </CartButton>
      <h1>Penny Candy Store</h1>
      <div css={container}>
        <ProductsList />
        {showCart && <Cart />}
      </div>
    </>
  );
}

export default App;
