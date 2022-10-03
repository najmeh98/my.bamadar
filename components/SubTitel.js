import react from "react";
import styled, { css } from "styled-components";
import { MoreListIcon } from "./home/icons/Icons";
export const SubTitel = () => {
  return (
    <div>
      <Formaticon>
        {/* <FormatAlignRightIcon
          style={{ color: "lightblue", fontSize: "18px" }}
        /> */}
        <MoreListIcon />
        <Titel> دسته بندی ها</Titel>
      </Formaticon>
    </div>
  );
};

const Formaticon = styled.div`
  direction: rtl;
  float: right;
  margin-top: 15px;
  margin-right: 10px;
  //background-color: black;
`;

const Titel = styled.h2`
  font-size: 18px;
  color: black;
  display: inline;
  align-items: center;
  padding-right: 5px;
  font-weight: 300;
  margin: 5px auto;
`;
const Wrapper = styled.div`
  direction: rtl;
  // flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px 12px;
  width: 23%;
  height: 85px;
  float: right;

  border: none;
  border-radius: 10px;
  background-color: #ecedef;
  img {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  span {
    text-align: center;
    font-size: 14px;
  }
`;
