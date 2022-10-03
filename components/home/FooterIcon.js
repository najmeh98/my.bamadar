import styled, { css } from "styled-components";
import {
  PersonIcon,
  HomeIcon,
  CategoriesIcon,
  ContactIcon,
  ShopIcon,
} from "./icons/Icons";
import router, { useRouter } from "next/router";

export const FooterIcon = () => {
  // window.onscroll = function () {};
  return (
    <>
      <Row>
        <Wrapper>
          <Footerpart path="/" title="خانه" image={<HomeIcon />} />

          <Footerpart
            path="/sub_Categories"
            title="دسته بندی"
            image={<CategoriesIcon />}
          />

          <Footerpart
            path="/"
            title=" پشتیبانی آنلاین"
            image={<ContactIcon />}
          />

          <Footerpart path="/cart" title=" سبد خرید " image={<ShopIcon />} />

          <Footerpart
            path="/profile"
            title=" پروفایل "
            image={<PersonIcon />}
          />
        </Wrapper>
      </Row>
      <div style={{ height: "45px" }}></div>
    </>
  );
};

const Footerpart = ({ title, path, image }) => {
  return (
    <BottomNav
      onClick={() => {
        router.push(path);
      }}
    >
      {image}
      <span>{title}</span>
    </BottomNav>
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
