import React from "react";
import { css } from "@emotion/react";
import RiseLoader from "react-spinners/CircleLoader";

//css
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const LoadingComponentSmall = () => {
  return <RiseLoader color="red" loading={true} css={override} size={20} />;
};

export default LoadingComponentSmall;
