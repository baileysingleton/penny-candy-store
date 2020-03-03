/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { returnItem, putBack } from "../redux/actions";

const container = css`
  border: 2px solid white;
  margin: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  background-color: pink;
  &:hover {
    background-color: lightpink;
  }
`;

const RemoveButton = styled.button`
  background-color: lightpink;
  border: 2px solid white;
  color: white;
  font-size: 24px;
  &:hover {
    background-color: palevioletred;
    border: 2px solid palevioletred;
  }
`;

const productDetail = css`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

const productName = css`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;
export function CartItem(props) {
  const dispatch = useDispatch();
  return (
    <div css={container}>
      <p css={productName}>{props.name}</p>
      <RemoveButton
        onClick={() => {
          dispatch(returnItem(props.id, props.inCart));
          dispatch(putBack(props.id, props.inCart));
        }}
      >
        Return
      </RemoveButton>
      <p css={productDetail}>Price Per Unit: ${props.price}</p>
      <p css={productDetail}>Quantity {props.inCart ? props.inCart : "0"}</p>
      <p css={productDetail}>Cost: ${props.totalPrice}</p>
    </div>
  );
}
