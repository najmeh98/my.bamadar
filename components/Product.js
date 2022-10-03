import react, { useContext, useEffect, useState } from "react";
import { config } from "./home/utils/main";
import {
  InnerRow,
  ProductCard,
  Right,
  Name,
  SellandDiscount,
  Discountstyle,
} from "./Homeproduct";
import styled, { css } from "styled-components";
import { Row } from "../pages";
import { Price } from "./share/Price";
import { useRouter } from "next/router";
import { AddIconProduct } from "./home/AddIconProduct";
import { CartContext } from "./CartContext";

export const Product = ({ subproduct }) => {
  const router = useRouter();

  const { AddProduct, removeProduct, AddtoCart, DeleteProduct, products } =
    useContext(CartContext);

  const id = router.query.id;
  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Row>
        <Container>
          {subproduct &&
            subproduct.related &&
            subproduct.related.map((data, index) => {
              let productFromCart = products.find((p) => p.id === data.id);
              return (
                <SubRow key={index}>
                  <InnerRow>
                    <AddIconProduct
                      AddtoCart={() => AddtoCart(data)}
                      AddProduct={() => AddProduct(data.id)}
                      DeleteProduct={() => DeleteProduct(data.id)}
                      removeProduct={() => removeProduct(data.id)}
                      productFromCart={
                        productFromCart && productFromCart.balance
                      }
                    />
                    <>
                      <ProductCard>
                        {data.images == null ? (
                          <img
                            src="no image.png"
                            width="120px"
                            height="120px"
                            alt="no image"
                          />
                        ) : (
                          <img src={config + data.images.thumb} alt="images" />
                        )}
                      </ProductCard>
                      <Right>
                        <Name>{data.name}</Name>
                        <SellandDiscount>
                          <div>
                            {data.price != data.sell_price ? (
                              <>
                                <Price>{data.sell_price}</Price>
                                <Price cross>{data.price}</Price>
                              </>
                            ) : (
                              <Price>{data.sell_price}</Price>
                            )}
                          </div>
                          {data.discount !== 0 && (
                            <Discountstyle>{data.discount}%</Discountstyle>
                          )}
                        </SellandDiscount>
                      </Right>
                    </>
                  </InnerRow>
                </SubRow>
              );
            })}
        </Container>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(245, 245, 245);
  height: 100%;
  align-items: center;
  display: flex;
`;

const Container = styled.div`
  width: 3000px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  display: flex;
`;

const SubRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  margin-top: 15px;
`;
