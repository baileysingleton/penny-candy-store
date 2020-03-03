/** @jsx jsx **/
import { useSelector, useDispatch } from "react-redux";
import { css, jsx } from "@emotion/core";
import { CartItem } from "./CartItem";
import { getCart } from "../redux/selectors";
import styled from "@emotion/styled";
import { checkout } from "../redux/actions";

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

const CheckoutButton = styled.button`
  background-color: lightpink;
  border: 2px solid white;
  color: white;
  font-size: 24px;
  margin-left: 10px;
  &:hover {
    background-color: palevioletred;
    border: 2px solid palevioletred;
  }
`;

export default function Cart() {
  const cart = useSelector(getCart);
  let total = 0;
  cart.forEach(element => {
    total += element.inCart * element.price;
  });
  const dispatch = useDispatch();

  return (
    <div css={cartContainer}>
      <p css={header}>Cart {`($${total.toFixed(2)})`}</p>
      <CheckoutButton
        onClick={() => {
          dispatch(checkout());
        }}
      >
        Checkout
      </CheckoutButton>

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
