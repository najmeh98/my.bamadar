import react, { useEffect, useState } from "react";
import { desktop, mobile, tablet } from "./home/utils/media";
import styled, { css } from "styled-components";
import axios from "axios";
import router from "next/router";
export const Categories = ({ key, name, image, apiAdd }) => {
  return (
    <>
      <InnerRow
        onClick={() => {
          router.push({ pathname: "/sub_Categories" });
        }}
      >
        <Image src={apiAdd + image} alt="images" />
        <Name>{name}</Name>
      </InnerRow>
    </>
  );
};
const MainWrapper = styled.div`
  direction: rtl;
  // width: 2000px;
  //  height: 250px;
  border: 1px solid white;
  border: none;
  //  background: white;
  //overflow: scroll;
`;
const MainRow = styled.div`
  width: 1550px;
  margin-top: 4%;

  //height: 250px;
  border: none;
  // overflow-y: hidden;
  direction: rtl;
  overflow: scroll;
  justify-content: space-between;
  ${mobile(css`
    max-width: 99%;
  `)};
  ${desktop(css`
    max-width: 100%;

    margin-top: 2%;
  `)};
  ${tablet(css`
    max-width: 100%;
  `)}
`;
const InnerRow = styled.div`
  float: right;

  direction: rtl;
  width: 102px;
  padding: 0px 2px;
  height: 100px;
  margin: 60px 18px;

  border-radius: 10px;
  background-color: white;
  margin-left: 7px;
  margin-top: 10px;
  border: none;
  background-color: #ecedef;
  ${desktop(css`
    margin-left: 7px;
    // margin: 20px 18px;
  `)};
`;

const Image = styled.img`
  width: 90%;
  height: 100%;
  text-align: center;
  padding: 4px;
  cursor: pointer;
`;

const Name = styled.div`
  display: block;
  text-align: center;
  font-size: 12px;
  color: #000;
  word-spacing: 1px;
  // margin-top: -12px;
`;
