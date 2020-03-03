/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useDispatch } from "react-redux";
import { addToCart, removeInventory, updatePrice } from "../redux/actions";
import { useState } from "react";

// so make it like, take in the prop id. Then call the reducer with the prop, so we can reduce on submit.

const AddButton = css`
  background-color: skyblue;
  border: 2px solid skyblue;
  padding: 5px;
  margin-top: 5px;
  color: white;
  font-size: 24px;
  &:hover {
    background-color: lightsteelblue;
    border: 2px solid lightsteelblue;
  }
`;

const input = css`
  background-color: skyblue;
  color: white;
  outline: none;
  padding: 5px;
  font-size: 16px;
`;

const label = css`
  font-size: 20px;
`;

export default function AddToCart(props) {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(value);
        if (value > props.inStock) {
          alert(
            `Sorry, but the Penny Candy Store only has ${props.inStock} ${props.name} in stock.`
          );
          return false;
        }
        dispatch(addToCart(props.id, value));
        dispatch(removeInventory(props.id, value));
        dispatch(updatePrice(props.id));
        setValue(0);
      }}
    >
      <label css={label}>
        Add To Cart:
        <input
          css={input}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          disabled={props.inStock > 0 ? false : true}
        />
      </label>
      <input
        css={AddButton}
        type="submit"
        value={props.inStock > 0 ? "Add To Cart" : "Out Of Stock"}
        disabled={props.inStock > 0 ? false : true}
      />
    </form>
  );
}
