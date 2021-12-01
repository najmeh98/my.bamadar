import React from "react";
import { AddIconProduct } from "./home/AddIconProduct";
import styled, { css } from "styled-components";
import Changecount from "./home/Changecount";
import { Price } from "./share/Price";
import { Config } from "./home/utils/main";
import { mobile } from "./home/utils/media";

export default function CartBox({
  AddProduct,
  DeleteProduct,
  removeProduct,
  productFromCart,
  ...items
}) {
  return (
    <Container>
      <CartStyle>
        <Cart_info>
          {items.images == null ? (
            <img src="/no image.png" alt=" no img" width="65px" height="65px" />
          ) : (
            <img
              src={Config + items.images.thumb}
              alt="box image"
              width="65px"
              height="65px"
            />
          )}
          <p>{items.name}</p>
        </Cart_info>

        <Cart_count>
          <Changecount
            AddProduct={AddProduct}
            DeleteProduct={DeleteProduct}
            removeProduct={removeProduct}
            productFromCart={productFromCart && productFromCart}
          />
          <Text>
            <Price>{items.sell_price * productFromCart}</Price>
          </Text>
        </Cart_count>
      </CartStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartStyle = styled.div`
  border: 0.0625rem solid rgb(229, 229, 229);
  box-shadow: rgb(230 230 230 / 5%) 0px 0px 0px 0px;
  padding: 0.5rem 1rem 1rem;
  border-radius: 0.25rem;
  background-color: #fff;
`;

const Cart_info = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  // justify-content: space-between;
  p {
    padding-right: 10px;
    color: rgb(63, 63, 63);
    font-size: 14px;
  }
`;

const Cart_count = styled.div`
  display: flex;
  align-items: center;
  //  justify-content: space-between;
  padding: 0px 15px;
  margin-top: 15px;
`;

const Text = styled.span`
  font-weight: 600;
  padding-right: 30px;
`;
