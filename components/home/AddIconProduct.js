import react, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { AddIcon, TrushICon, AddblueIcon, DecreaseIcon } from "./icons/Icons";
import { useRouter } from "next/router";

export const AddIconProduct = ({
  AddtoCart,
  AddProduct,
  DeleteProduct,
  removeProduct,
  products,
  productFromCart,
  AddInSabad,
  ...item
}) => {
  const [addStyle, SetaddStyle] = useState(false);
  const [count, Setcount] = useState(1);
  const [deleteitem, Setdeleteitem] = useState(false);

  const router = useRouter();

  const showdeleteItem = () => {
    Setdeleteitem(!deleteitem);
  };

  return (
    <div>
      <AddtoCard
        onClick={() => {
          SetaddStyle(!addStyle);
        }}
      >
        <PlusICon
          onClick={() => {
            AddtoCart();
          }}
        >
          <Add>
            <AddIcon />
          </Add>
        </PlusICon>
      </AddtoCard>
      {/* )} */}

      <AddtoCard>
        {addStyle ? (
          <>
            <PlusICon props>
              <BlueAdd onClick={() => AddProduct()}>
                <AddblueIcon fill="#179bbf" />
              </BlueAdd>
              <Number>
                <span>{productFromCart}</span>
              </Number>

              {productFromCart && productFromCart == 1 ? (
                <Button onClick={showdeleteItem}>
                  <TrushICon fill="#179bbf" />
                </Button>
              ) : (
                <DecreaseStyle onClick={() => removeProduct()}>
                  <DecreaseIcon fill="#179bbf" />
                </DecreaseStyle>
              )}
            </PlusICon>
          </>
        ) : (
          ""
        )}
      </AddtoCard>
      {/* {deleteitem ? <DeleteProduct /> : null} */}

      {deleteitem ? (
        <Container>
          <Wrapper>
            <QusetionBox>
              <p>آیا از حذف این کالا اطمینان دارید؟</p>
              <div>
                <Buttonid
                  onClick={() => {
                    Setdeleteitem(!deleteitem);
                  }}
                >
                  خیر
                </Buttonid>
                <Buttonid
                  mode="btn"
                  onClick={() => {
                    SetaddStyle(!addStyle);
                    Setdeleteitem(!deleteitem);
                    DeleteProduct();
                  }}
                >
                  بله
                </Buttonid>
              </div>
            </QusetionBox>
          </Wrapper>
        </Container>
      ) : null}
    </div>
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 1500;
  inset: 0px;
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: -1;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  inset: 0px;
  overflow: hidden;
`;

const QusetionBox = styled.div`
  width: 100%;

  max-width: 354px;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px 32px 24px;
  margin-top: 10px;
  border: 1px solid #fff;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
  line-height: 3rem;
  position: absolute;

  text-align: center;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  p {
    font-size: 16px;
    text-align: center;
  }
  button {
    font-family: Vazir;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.75;
    color: #3f51b5;
    border: ${(p) =>
      p.mode == "btn" ? "1px solid rgba(63, 81, 181, 0.5)" : ""};
    padding: 5px 15px;
    background-color: #fff;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    cursor: pointer;
    min-width: 64px;
  }
`;

const Buttonid = styled.button`
  border: ${(p) =>
    p.mode == "btn" ? "1px solid rgba(63, 81, 181, 0.5)" : "none"};
  margin-right: ${(p) => (p.mode ? "15px" : "")};
  &:hover {
    border: ${(p) => (p.mode == "btn" ? "1px solid #3f51b5" : "none")};

    background-color: rgba(63, 81, 181, 0.04);
  }
`;

const AddtoCard = styled.div`
  position: absolute;
  right: -1px;
  top: -1px;
  z-index: 15;
  display: flex;
  align-items: center;
`;
export const PlusICon = styled.div`
  display: flex;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 10px;
  align-items: center;
  justify-content: center;

  border: ${(p) =>
    p.props ? "1px solid rgb(178, 178, 178)" : "1px solid #179bbf"};
  background-color: ${(p) => (p.props ? "#fff" : "#179bbf")};

  z-index: 15;
  height: 50px;
  padding: 0px 5px;
`;

const Add = styled.div`
  width: 20px;
  height: 20px;
`;

export const Button = styled.div`
  width: 24px;
  height: 24px;
  //  display: flex;
  //  align-items: center;
`;
export const Number = styled.div`
  color: #179bbf;
  padding: 0px 12px;
  font-size: 15px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
`;
export const BlueAdd = styled.div`
  font-size: 24px;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
`;

export const DecreaseStyle = styled.div`
  height: 24px;
  width: 24px;
  font-size: 24px;
  display: flex;
  align-items: center;
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
