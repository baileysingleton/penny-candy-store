/** @jsx jsx **/
import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";
import { getProducts } from "../redux/selectors";
import { css, jsx } from "@emotion/core";

const productList = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function ProductList() {
  const products = useSelector(getProducts);
  return (
    <div css={productList}>
      {products.map(product => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
}
