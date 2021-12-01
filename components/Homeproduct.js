import axios from "axios";
import react, { createContext, useEffect, useState, useContext } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { config, Configurl } from "../components/home/utils/main";
import { Price } from "./share/Price";
import { useRouter } from "next/router";
//import { AddIcon } from "./home/icons/Icons";
import { AddIconProduct } from "./home/AddIconProduct";
import { CartContext } from "./CartContext";
//import Recommendedproducts from "./Recommended-products";

export const Homeproduct = () => {
  const [cats, SetCats] = useState([]);

  const router = useRouter();

  let value = useContext(CartContext);
  console.log("context=", value);
  const {
    AddProduct,
    products,
    removeProduct,
    DeleteProduct,
    AddtoCart,
    balance,
  } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`https://my.bamadar.com/api/get_promotions`)
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        SetCats(response.data.data);
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

  useEffect(() => {
    let newdata = localStorage.getItem("list");
    // SetCats(newdata);
    console.log(newdata);
  }, []);

  return (
    <>
      {cats &&
        cats.length != 0 &&
        cats.map((item, index) => {
          let productFromCart = products.find((p) => p.id === item.id);
          productFromCart && console.log(productFromCart.balance);
          return (
            <Total key={item.id}>
              <InnerRow>
                <AddIconProduct
                  {...item}
                  AddtoCart={() => AddtoCart(item)}
                  AddProduct={() => AddProduct(item.id)}
                  DeleteProduct={() => DeleteProduct(item.id)}
                  removeProduct={() => removeProduct(item.id)}
                  products={products}
                  productFromCart={productFromCart && productFromCart.balance}
                />

                <div
                  onClick={() => {
                    router.push({
                      pathname: "/products",
                      query: { id: item.id },
                    });
                  }}
                >
                  <ProductCard>
                    {item.images == null ? (
                      <Image
                        src="/no image.png"
                        alt="no image"
                        width="120px"
                        height="120px"
                      />
                    ) : (
                      <Image
                        src={config + item.images.thumb}
                        alt="product image"
                        width="120px"
                        height="100%"
                      />
                    )}
                  </ProductCard>

                  <Right>
                    <Name>{item.name}</Name>
                    {/* <Measure> */}
                    {/* قیمت: {price} */}
                    <SellandDiscount>
                      <div>
                        {item.price !== item.sell_price ? (
                          <>
                            <Price item={item} discount={item.discount}>
                              {item.sell_price}
                            </Price>

                            <Price cross>{item.price}</Price>
                          </>
                        ) : (
                          <>
                            <Price>{item.sell_price}</Price>
                          </>
                        )}
                      </div>
                      {item.discount !== 0 && (
                        <Discountstyle>{item.discount}%</Discountstyle>
                      )}
                    </SellandDiscount>
                  </Right>
                </div>
              </InnerRow>
              {/* <Recommendedproducts /> */}
            </Total>
          );
        })}
    </>
  );
};

const Total = styled.div`
  display: flex;
  float: right;
  direction: rtl;
`;

export const InnerRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  position: relative;
  //float: right;
  padding: 8px;
  width: 165px;
  height: 250px;
  max-height: 100%;
  margin: 20px 11px;
  border: 1px solid rgb(218, 218, 218);
  box-shadow: rgba(0, 0, 0, 0.05) -5px 10px 20px 0px;
  border-radius: 9px;
  background-color: white;
  margin-left: 14px;
  font-size: 15px;
  justify-content: center;
  flex-wrap: nowrap;
  cursor: pointer;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  height: 124px;
  width: 145px;
  z-index: 0;
  img {
    overflow: hidden;
    display: block;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 100%;
    max-width: 100%;
    text-align: center;
  }
`;

const Image = styled.img`
  // margin-left: 65%;
  float: right;
  height: 100%;
  margin: 0%;
`;
export const Right = styled.div`
  display: grid;
  text-align: right;
  // padding-top: 9px;
  font-size: 12px;
  // padding-right: 5px;
  direction: rtl;
  //flex-grow: 1;
  align-items: center;
  font-size: 15px;
  font-family: ${(p) => p.theme.fontFamily};
`;
const Measure = styled.div`
  padding: 15 px;
`;

export const Name = styled.div`
  font-family: ${(p) => p.theme.fontFamily};
  font-size: 13px;
  display: grid;
  align-items: center;
  text-align: right;
  height: 42px;
  overflow: hidden;
  padding: 0px 5px;

  line-height: 1.5;
  word-spacing: 1.2px;
`;

export const Discountstyle = styled.div`
  background-color: #ed484e;
  border: 1px solid #ed484e;
  border-radius: 8px;
  color: #fff;
  width: 45px;
  height: 22px;
  text-align: center;
  display: block;
  align-items: center;
  margin-top: -10px;
`;
export const SellandDiscount = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;
