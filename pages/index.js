import { Header } from "../components/home/header";
import Head from "next/head";
import { SearchInput } from "../components/home/SearchInput";
import styled, { css } from "styled-components";
import { BackgroundImage } from "../components/BackgroundImage";
import { BackImage } from "../components/Image";
//import { Home } from "../components/Home";
//import { Product } from "../components/home/Product";
import { SubTitel } from "../components/SubTitel";
import { Categories } from "../components/Categories";
import { config } from "../components/home/utils/main";
import react, { useEffect, useState } from "react";
import axios from "axios";
//import { Footer } from "../components/home/Footer";
import { desktop, mobile, tablet } from "../components/home/utils/media";
import { Products } from "./products";
import { MainWrapper, MainRow } from "./Style";
import { InputBox } from "../components/home/InputBox";
import { FooterIcon } from "../components/home/FooterIcon";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { Homeproduct } from "../components/Homeproduct";
function HomePage() {
  const [cats, SetCats] = useState([]);
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://my.bamadar.com/api/all_categories`)
      .then(function (response) {
        // handle success

        console.log(response.data);
        SetProducts(response.data);
      })

      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, []);

  return (
    <>
      {/* <Header /> */}
      {/* <Layout> */}
      <BackImage />
      <Row>
        <Wrapper>
          <Image src="promo.jpg" alt="promo" />

          <Homeproduct />
        </Wrapper>
      </Row>
      <SubTitel />

      <MainRow>
        <MainWrapper>
          {products &&
            products.length != 0 &&
            products.map((list, index) => (
              <Categories
                key={list.id}
                image={list.image}
                name={list.name}
                apiAdd={config}
              />
            ))}
        </MainWrapper>
      </MainRow>
      {/* </Layout> */}
      {/* <FooterIcon /> */}
    </>
  );
}

export default HomePage;

export const Row = styled.div`
  width: 900px;
  // height: 250px;
  height: 330px;
  // max-width: 1700px;
  border: 1px solid white;
  overflow: scroll;
  overflow-y: hidden;
  border: none;
  display: grid;
  cursor: pointer;
  justify-content: space-between;
  margin-top: -5px;
  direction: rtl;
  ${mobile(css`
    max-width: 100%;
  `)};
  ${desktop(css`
    width: 100%;
  `)};
  ${tablet(css`
    width: 100%;
  `)}
`;

const Wrapper = styled.div`
  // width: 19000px;
  height: 330px;
  border: 1px solid white;
  border: none;
  background-color: darkblue;
  // color: rgb(38, 38, 38);
  //overflow: hidden;
  display: flex;
`;
const Image = styled.img`
  float: right;
  height: 100%;
  margin: 0%;
`;
