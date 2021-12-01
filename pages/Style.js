import styled, { css } from "styled-components";
import { desktop, mobile, tablet } from "../components/home/utils/media";

export const MainRow = styled.div`
  width: 1000px;
  // margin-top: 4%;
  // height: 450px;
  border: none;
  //overflow-y: hidden;
  direction: rtl;
  overflow-y: hidden;
  overflow-x: scroll;
  justify-content: space-between;
  ${mobile(css`
    max-width: 99%;
    //  overflow-y: hidden;
  `)};
  ${desktop(css`
    width: 100%;
    // max-width: 120%;
    //  margin-top: 2%;
  `)};
  ${tablet(css`
    max-width: 100%;
  `)}
`;

export const MainWrapper = styled.div`
  direction: rtl;
  width: 1500px;
  height: 400px;
  border: 1px solid white;
  border: none;
  background: white;

  // overflow: hidden;
`;
