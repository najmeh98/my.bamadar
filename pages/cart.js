import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import CartBox from "../components/CartBox";
import { CartContext } from "../components/CartContext";
import { Alertcartbox, TrushCartbox } from "../components/home/icons/Icons";
import { mobile, tablet } from "../components/home/utils/media";
import ClearAll from "../components/ClearAll";

export default function Cart() {
  const { products, AddProduct, removeProduct, DeleteProduct } =
    useContext(CartContext);
  const [deleteitem, Setdeleteitem] = useState(false);
  const showdeleteItem = () => {
    Setdeleteitem(!deleteitem);
    DeleteProduct();
  };
  return (
    <Wrapper>
      <p style={{ padding: "10px 28px 10px 10px", color: "#818181" }}>
        سبد خرید
      </p>
      <Container>
        <Icon>
          <Alertcartbox />
        </Icon>
        <Message>
          <span> زمان دریافت سفارش</span>
          {/* <br /> */}
          <p style={{ color: "#818181" }}>
            {" "}
            مدت زمان ثبت سفارش تا دریافت سفارش 2ساعت خواهد بود
          </p>
        </Message>
      </Container>

      {products.length != 0 ? (
        <>
          <WrapperCart>
            {products &&
              products.length != 0 &&
              products.map((item, index) => {
                let productFromCart = products.find((p) => p.id === item.id);
                console.log(productFromCart && productFromCart.balance);
                return (
                  <>
                    <CartBox
                      {...item}
                      productFromCart={productFromCart.balance}
                      AddProduct={() => AddProduct(item.id)}
                      removeProduct={() => removeProduct(item.id)}
                      DeleteProduct={() => DeleteProduct(item.id)}
                    />
                  </>
                );
              })}
          </WrapperCart>

          <p
            style={{
              fontSize: "0.9rem",
              padding: "10px 18px",
              fontWeight: "bold",
            }}
          >
            {" "}
            توضیحات سفارش
          </p>
          <Textarea
            rows="3"
            placeholder="توضیحات سفارش خود را وارد کنید"
          ></Textarea>

          <ClearAll />
        </>
      ) : (
        <>
          <Image>
            <img
              src="./EmptyCart.svg"
              alt="emptycart"
              width="320px"
              height="180px"
            />
          </Image>
          <Text>سبد خرید شما خالی است</Text>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  background: rgb(245, 245, 245);
  height: calc(100vh - 80px);
`;

const Container = styled.div`
  display: flex;
  padding: 10px 16px;
  border-radius: 4px;
  background-color: rgb(232, 244, 253);
`;
const WrapperCart = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 8px;
  ${tablet(css`
    grid-template-columns: repeat(2, 1fr);
  `)}
  ${mobile(css`
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  `)}
`;
const Icon = styled.div`
  margin-left: 10px;
  display: flex;
  padding: 7px 0;
  margin-right: 12px;
`;

const Message = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  span {
    padding-bottom: 6px;
    font-weight: 500;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  padding-left: 20px;
`;

const Text = styled.p`
  margin: auto;
  justify-content: center;
  display: flex;
`;

const Textarea = styled.textarea`
  width: 100%;
  text-align: right;
  padding: 8px 18px 5px 0px;
  font-size: 0.8rem;
  font-family: ${(p) => p.theme.fontFamily};
  border: none;
  outline: none;
  letter-spacing: 0.7px;
`;

const DeleteAll = styled.div`
  padding: 18px;
  cursor: pointer;
  display: flex;
  p {
    padding-right: 8px;
    color: red;
  }
`;
