/** @jsx jsx **/
import { useSelector } from "react-redux";
import { css, jsx } from "@emotion/core";
import { CartItem } from "./CartItem";
import { getCart } from "../redux/selectors";

const cartContainer = css`
  align-items: center;
  width: 400px;
  position: absolute;
  right: 0;
  background-color: pink;
`;

const list = css`
  padding-left: 0;
`;

const listItem = css`
  list-style-type: none;
`;

const header = css`
  font-size: 28px;
  color: white;
  font-weight: bold;
  padding: 10px;
`;

export default function Cart() {
  const cart = useSelector(getCart);
  let total = 0;
  cart.forEach(element => {
    total += element.inCart * element.price;
  });

  return (
    <div css={cartContainer}>
      <p css={header}>Cart {`($${total.toFixed(2)})`}</p>
      <ul css={list}>
        {cart.map(item =>
          item.inCart ? (
            <li key={item.id} css={listItem}>
              <CartItem key={item.id} {...item} />{" "}
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}
