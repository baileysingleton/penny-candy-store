/** @jsx jsx **/
import { useDispatch } from "react-redux";
import { receiveProducts } from "./redux/actions";
import { jsx, css } from "@emotion/core";
import Products from "./data/products";
import ProductsList from "./components/ProductList";

const container = css`
  padding-left: 50px;
  padding-right: 50px;
`;

function App() {
  const dispatch = useDispatch();
  dispatch(receiveProducts(Products));
  return (
    <div css={container}>
      <h1>Penny Candy Store</h1>
      <ProductsList />
    </div>
  );
}

export default App;
