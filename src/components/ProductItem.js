/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AddToCart from "./AddToCart";

const container = css`
  border: 1px solid skyblue;
  margin: 5px;
  padding: 5px;
  box-shadow: 5px 2px skyblue;
  display: flex;
  height: 300px;
  width: 300px;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const title = css`
  font-size: 24px;
`;

const imageContainer = css`
  width: 150px;
  height: 150px;
  overflow: hidden;
`;

const image = css`
  max-width: 150px;
`;

const inStock = css``;

export function ProductItem(props) {
  let quantity = 0;
  return (
    <div css={container}>
      <p css={title}>{props.name}</p>
      <div css={imageContainer}>
        <img css={image} src={props.photoUrl} alt="no picture found" />
      </div>
      <p css={inStock}>In Stock: {props.inStock}</p>
      <AddToCart id={props.id} />
    </div>
  );
}
