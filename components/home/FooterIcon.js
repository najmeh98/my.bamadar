import react from "react";

import styled, { css } from "styled-components";
import {
  PersonIcon,
  HomeIcon,
  CategoriesIcon,
  ContactIcon,
  ShopIcon,
} from "./icons/Icons";
import { desktop, mobile } from "./utils/media";
import router, { useRouter } from "next/router";

export const FooterIcon = () => {
  // window.onscroll = function () {};
  return (
    <>
      <Row>
        <Wrapper>
          <BottomNav
            onClick={() => {
              router.push("/");
            }}
          >
            <HomeIcon />
            <span>خانه</span>
          </BottomNav>
          <BottomNav
            onClick={() => {
              router.push("/sub_Categories");
            }}
          >
            <CategoriesIcon />
            <span>دسته بندی</span>
          </BottomNav>
          <BottomNav>
            <ContactIcon />
            <span>پشتیبانی آنلاین</span>
          </BottomNav>
          <BottomNav
            onClick={() => {
              router.push("/cart");
            }}
          >
            <ShopIcon />
            <span>سبد خرید</span>
          </BottomNav>
          <BottomNav
            onClick={() => {
              router.push("/profile");
            }}
          >
            <PersonIcon />
            <span>پروفایل</span>
          </BottomNav>
        </Wrapper>
      </Row>
      <div style={{ height: "45px" }}></div>
    </>
  );
};

const BottomNav = styled.div`
  display: grid;
  grid-gap: 5px;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  justify-items: center;
  cursor: pointer;
  padding-bottom: 5px;
`;

const Wrapper = styled.div`
  //  margin-top: 5px;
  direction: rtl;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0px 15px;
  font-size: ${(p) => p.theme.fontSize.small};
  // padding-bottom: 5px;
  //position: relative;
`;

const Row = styled.div`
  border-top: 1px solid rgb(239, 239, 239);
  position: fixed; //با این مقدار دهی اندازه height عوض میشه؟
  bottom: 0px;
  width: 100%;
  height: 60px;
  padding-bottom: 15px;

  padding-top: 5px;
  background-color: #fff;
  z-index: 1000;
`;

const Home = styled.div`
  display: flex;
  direction: rtl;
  text-align: center;
  justify-content: space-between;
`;
