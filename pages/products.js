import Head from "next/head";
import react, { useEffect, useState } from "react";
import { Header } from "../components/home/header";
//import { Product } from "../components/home/Product";
import axios from "axios";
import styled, { css } from "styled-components";
import { desktop, mobile, tablet } from "../components/home/utils/media";
import { Categories } from "../components/Categories";
import { config } from "../components/home/utils/main";
import { useRouter } from "next/router";
//import React, { useState } from "react";
import Image from "next/image";
import { InputBox } from "../components/home/InputBox";
import { CopyIcon, ShareICon } from "../components/home/icons/Icons";
import { Product } from "../components/Product";
import Link from "next/link";

const Products = () => {
  const [subproduct, SetsubProduct] = useState({});
  // const [related, Setrelated] = useState([]);

  console.log("debug", subproduct);
  const router = useRouter();
  const id = router.query.id;

  console.log(router.query.id);

  useEffect(() => {
    //   const subProduct = [];
    if (!id) return;
    axios
      .get(`https://www.bamadar.com/data/api/product/${id}`)
      .then(function (response) {
        console.log(response.data.data);
        SetsubProduct(response.data.data);
        Setrelated(response.data.data.related);
        //  subProduct.push(response.data.data);
        //  SetsubProducts(subProduct);
        //  console.log(subProduct);
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
  }, [id]);

  return (
    <Height>
      {/* <InputBox /> */}
      {subproduct && (
        <Container>
          <Wrapper>
            {subproduct.images == null ? (
              <img
                src="no image.png"
                width="120px"
                height="120px"
                alt="no image"
              />
            ) : (
              <StyleImage
                src={config + subproduct.images.thumb}
                alt="image"
                width="300px"
                height="300px"
                style={{ borderRadius: "20px" }}
              />
              // <img
              //   src={config + subproduct.images.thumb}
              //   width="300px"
              //   height="300px"
              //   style={{ borderRadius: "20px" }}
              // />
            )}
          </Wrapper>
          <Product_name>
            <Title>
              <p> {subproduct.name} </p>
            </Title>

            <Productoption>
              <Price_row>
                <Price>
                  <TopPrice>
                    <SellPrice>{subproduct.sell_price}</SellPrice>
                    <Discount>{subproduct.discount}%</Discount>
                  </TopPrice>

                  <Mainprice>{subproduct.price}</Mainprice>
                </Price>
              </Price_row>
              <AddtoBox>
                <Box>افزدون به سبد</Box>
              </AddtoBox>
            </Productoption>

            <Order>
              <div>
                <span>مقدار سفارش:</span> 0 {subproduct.measurement}
              </div>
              <div>
                <span>برند:</span>
                {subproduct.brand}
              </div>
            </Order>
            <SelectIcon>
              <CopyIcon />
              <ShareICon />
            </SelectIcon>
          </Product_name>
          <div>
            <Link href="/products/${id}">
              <Product subproduct={subproduct} />
            </Link>
          </div>
        </Container>
      )}
    </Height>
  );
};
export default Products;

const Height = styled.div`
  // height: 102 vh;
`;
const Container = styled.div`
  display: block;
  margin: 0px auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  padding-bottom: 15px;
  //height: 930px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 9px 0px;
`;

const Wrapper = styled.div`
  background-color: #e6e6e6;
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Product_name = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const Title = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 9px 0px;
  margin: 20px 0px;
  padding: 6px 0px;
  letter-spacing: normal;
  p {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
  }
`;
const Price = styled.div`
  display: flex;
  flex-wrap: wrap;
  direction: rtl;

  //max-width: 50%;
  flex-basis: 50%;
`;

const TopPrice = styled.div`
  border: 1px solid rgb(230, 230, 230);
  border-radius: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  flex-basis: 100%;
`;

const SellPrice = styled.div`
  display: block;
  /* align-items: center;
  text-align: center;
  justify-content: flex-start; */
  padding: 0px 5px;
  max-width: 60%;
  flex-basis: 60%;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  transform: translateX(-20px);
`;

const Discount = styled.div`
  background: rgb(236, 59, 79);
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  //padding: 0px 5px;
  width: 100%;

  display: block;
  align-items: center;
  text-align: center;
  color: #fff;

  max-width: 40%;
`;
const Productoption = styled.div`
  display: flex;
  //  flex-wrap: wrap;
  align-items: flex-start;
  text-align: center;
  justify-content: space-between;
  padding: 16px 5px;
  width: 100%;
`;
const AddtoBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  max-width: 50%;
  flex-basis: 50%;
`;
const Box = styled.div`
  border-radius: 30px;
  font-size: 16px;
  color: #fff;
  background-color: #179bbf;
  padding: 0px 15px;
  width: 155px;
  height: 30px;
  border: 1px solid #179bbf;
  cursor: pointer;
`;

const StyleImage = styled(Image)`
  border-radius: 20px;
  width: 100%;
`;

const Price_row = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: end; */
  //flex-wrap: wrap;
  width: 100%;
  flex-basis: 100%;
`;

const Mainprice = styled.div`
  color: #000000;
  opacity: 50%;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration: line-through;

  flex-basis: 50%;
`;

const Order = styled.div`
  display: grid;
  align-items: center;
  text-align: right;
  grid-gap: 5px;
  padding: 0px 10px;
  line-height: 32px;
  span {
    text-align: start;
    font-size: 16px;
    color: #62666d;
    padding-left: 10px;
  }
`;

const SelectIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  //text-align: left;
  padding-top: 8px;
  padding: 0px 15px 8px;
`;
