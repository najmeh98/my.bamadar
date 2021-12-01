import react, { useEffect, useState } from "react";
import { SearchIcon } from "./icons/SearchIcon";
import styled, { css } from "styled-components";
import Router from "next/router";
import { mobile, tablet } from "./utils/media";
import { Image } from "next/image";
export const InputBox = ({ products }) => {
  const [value, Setvalue] = useState("");
  const [itemList, SetitemList] = useState([]);
  const [filterProducts, SetfilterProducts] = useState([]);
  const [Changcolor, Setchangecolor] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      Setchangecolor(true);
    } else {
      Setchangecolor(false);
    }
  };

  //window.addEventListener("scroll", changeNavbarColor);

  // useEffect(() => {
  //   SetfilterProducts(
  //     products.filter((product) => product.name.toLowerCase().includes(value))
  //   );
  // }, [value]);

  return (
    <>
      <Row>
        <Wrapper>
          <SubWrapper>
            <Container>
              <img
                src="/IconBamadar.jpg"
                alt="bamadar"
                width="50px"
                height="50px"
              />
            </Container>

            <div>
              <SearchButton>
                <SearchIcon />
              </SearchButton>
            </div>
            <Input
              className={Changcolor ? "input colorchange" : "input"}
              type="text"
              name="search"
              onChange={(event) => {
                Setvalue(event.currentTarget.value);
              }}
              placeholder="  جستجو در محصول یا برند ..."
            ></Input>
          </SubWrapper>
        </Wrapper>
      </Row>
      <div style={{ height: "80px" }}></div>
    </>
  );
};

const Container = styled.div`
  vertical-align: middle;
  display: flex;
  align-items: center;

  img {
    margin-left: 32px;
    margin-right: 13px;

    background-color: transparent;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  //  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 100%;
  max-width: 1370px;
  margin: auto;
`;

const SearchButton = styled.button`
  border: none;
  background-color: #4fa7ff;
  border-radius: 0 0.375em 0.375em 0;
  color: white;
  position: relative;
  width: 4em;
  height: 3.7em;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Search = styled.div`
  position: fixed;
  top: 0;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background-color: rgb(241, 243, 241);

  width: 65vw;
  max-width: 692px;
  padding: 8px 35px 8px 40px;
  transition: border 0.3s ease-in-out 0s;
  height: 52px;
  border-radius: 0.375em 0 0 0.375em;
  direction: rtl;
  font-size: 1rem;
  line-height: 1.2;
  display: inline-black;
  outline: none;
  border: 0.0625rem solid transparent;

  ::placeholder {
    font-size: ${(p) => p.theme.fontSize.normall};
    font-family: ${(p) => p.theme.fontFamily};
    padding-top: 2%;
    color: #c0c0c0;
  }
  letter-spacing: 0.8px;
  &:hover,
  &:focus {
    border: 1px solid rgb(23, 155, 191);
  }
`;
const Row = styled.div`
  background-color: rgba(255, 255, 255) !important;
  position: fixed;
  z-index: 1200;
  width: 100%;
`;
const Wrapper = styled.div`
  overflow: hidden;
  border-bottom: 0.125rem solid rgb(229, 229, 229);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  transition: all 250ms ease 0s;

  align-items: center;
  direction: rtl;

  span {
    position: absolute;
    font-family: ${(p) => p.theme.fontFamily};
    right: 50%;
    font-size: 20px;
    color: black;
  }

  ${mobile(css`
    width: 100%;
    align-items: center;
  `)};

  ${tablet(css`
    //    max-width: 90%;
    align-items: center;
  `)};
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
