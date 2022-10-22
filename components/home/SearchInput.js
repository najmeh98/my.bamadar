import react, { useEffect, useState } from "react";
import { SearchIcon } from "./icons/SearchIcon";
import styled, { css } from "styled-components";
import Router from "next/router";
import { mobile, tablet } from "./utils/media";

import axios from "axios";

export const SearchInput = () => {
  const [InputValue, SetInputValue] = useState(" ");
  const [itemList, SetitemList] = useState([]);

  useEffect(() => {
    axios
      .get(`${config}/api/all_categories` + InputValue)
      .then(function (response) {
        console.log(response.data.data);
        SetitemList(response.data.data);
      })
      // axios
      //   .get("https://my.bamadar.com/api/get_promotions")
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // http.ClientRequest in node.js/        console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, [InputValue]);

  return (
    <Dwrap>
      <Wrapper>
        {/* <SearchRounded style={{ fontSize: 25, color: "#808080" }} /> */}
        <IconWrapper>
          {" "}
          <SearchIcon style={{ paddingTop: "10px" }} />
        </IconWrapper>
        <Input
          placeholder="جستجو در"
          value={InputValue}
          onChange={(event) => SetInputValue(event.currentTarget.value)}
        />
        <Title>با مادر</Title>
        {/* <IconWrapper>
          {" "}
          <SearchIcon style={{ paddingTop: "10px" }} />
        </IconWrapper> */}
      </Wrapper>
      {itemList}
    </Dwrap>
  );
};
const IconWrapper = styled.button`
  background: transparent;
  border: none;
  padding: 4px;
  width: 60px;
  // height: 50px;
  text-align: center;
  opacity: 0.5;
  padding-right: 3px;
  cursor: pointer;
  path {
    width: 100%;
  }
`;

const Dwrap = styled.div`
  ${mobile(css`
    align-items: center;
  `)};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(231, 226, 221, 0.3);
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 4%;
  color: #b3c5cd;
  direction: rtl;
  // overflow: hidden;
  position: absolute;
  width: 90%;
  justify-content: space-between;
  padding: 0 15px;

  ${mobile(css`
    width: 85%;
    align-items: center;
  `)};

  ${tablet(css`
    max-width: 90%;
    align-items: center;
  `)};
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  font-size: 25px;
  // padding: 5px 6px;
  display: flex;
  outline: none;
  border-right: none;
  ::placeholder {
    color: lightgry;
  }
  letter-spacing: 0.8px;
`;
const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 60%;
  font-size: 20px;
  color: black;
  margin-left: 40%;
`;
