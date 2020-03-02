/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const container = css`
  border: 1px solid skyblue;
  margin: 5px;
  padding: 5px;
  box-shadow: 5px 2px skyblue;
  display: inline-block;
`;

const title = css`
  font-size: 16px;
`;

const image = css`
  height: 200px;
  width: auto;
`;

export function ProductItem(props) {
  return (
    <div css={container}>
      <p css={title}>{props.name}</p>
      <img css={image} src={props.photoUrl} alt="no picture found" />
    </div>
  );
}
