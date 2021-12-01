import react, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { TrushCartbox } from "./home/icons/Icons";
import { CartContext } from "./CartContext";

export default function ClearAll() {
  const [deleteitem, Setdeleteitem] = useState(false);
  const showdeleteItem = () => {
    Setdeleteitem(!deleteitem);
  };
  const { DeleteProduct } = useContext(CartContext);

  return (
    <>
      <DeleteAll onClick={showdeleteItem}>
        <TrushCartbox />
        <p>حذف همه </p>
      </DeleteAll>

      {deleteitem && (
        <Container>
          <Wrapper>
            <QusetionBox>
              <p>آیا از حذف این کالا اطمینان دارید؟</p>
              <div>
                <Buttonid
                  onClick={() => {
                    Setdeleteitem(false);
                  }}
                >
                  خیر
                </Buttonid>
                <Buttonid
                  mode="btn"
                  onClick={() => {
                    Setdeleteitem(!deleteitem);
                    localStorage.setItem("list", "");
                    location.reload();
                  }}
                >
                  بله
                </Buttonid>
              </div>
            </QusetionBox>
          </Wrapper>
        </Container>
      )}
    </>
  );
}
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
const DeleteAll = styled.div`
  padding: 18px;
  cursor: pointer;
  display: flex;
  p {
    padding-right: 8px;
    color: red;
  }
`;
