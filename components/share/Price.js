import react from "react";
import styled, { css } from "styled-components";

export const Price = ({ children, cross }) => {
  return (
    <div>
      <MainWrapper cross={cross}>
        {" "}
        {numberWithCommas(children)} ریال
      </MainWrapper>
    </div>
  );
};

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
console.log(numberWithCommas(123345678));

const MainWrapper = styled.div`
  ${(p) =>
    p.cross &&
    css`
      text-decoration: line-through;
      opacity: 0.4;
      font-size: 12px;
      font-weight: 600;
    `};
`;
