/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AddToCart from "./AddToCart";

const container = css`
  border: 2px solid skyblue;
  padding: 40px;
  box-shadow: 5px 2px skyblue;
  display: flex;
  height: 500px;
  width: 300px;
  margin: 10px;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  &:hover {
    box-shadow: 5px 2px yellow;
    border: 2px solid yellow;
  }
`;

const title = css`
  font-size: 24px;
`;

const imageContainer = css`
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

const image = css`
  max-width: 150px;
`;

const detail = css`
  font-size: 20px;
`;
export function ProductItem(props) {
  let quantity = 0;
  return (
    <div css={container}>
      <p css={title}>{props.name}</p>
      <div css={imageContainer}>
        <img css={image} src={props.photoUrl} alt="no picture found" />
      </div>
      <p css={detail}>In Stock: {props.inStock}</p>
      <p css={detail}>Price Per Unit: ${props.price}</p>
      <AddToCart id={props.id} inStock={props.inStock} name={props.name} />
    </div>
  );
}
