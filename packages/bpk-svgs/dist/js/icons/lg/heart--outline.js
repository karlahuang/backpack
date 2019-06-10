import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M17.429 5a1.921 1.921 0 0 1 1.454.6c2.23 2.31.7 5.07-.984 6.983L12 18.575l-5.9-5.993C4.416 10.67 2.887 7.91 5.117 5.6A1.921 1.921 0 0 1 6.57 5a5.6 5.6 0 0 1 3.79 2.061l.031.036.033.033.14.144L12 8.753l1.435-1.479.14-.144.033-.034.031-.035A5.6 5.6 0 0 1 17.429 5m0-2a7.5 7.5 0 0 0-5.29 2.738L12 5.881l-.14-.144A7.502 7.502 0 0 0 6.571 3a3.909 3.909 0 0 0-2.893 1.212c-2.487 2.576-2.238 6.115.938 9.712l-.001.001 6.673 6.778a1 1 0 0 0 1.425 0l6.672-6.778v-.001c3.175-3.597 3.424-7.136.937-9.712A3.91 3.91 0 0 0 17.429 3z" /></svg>);