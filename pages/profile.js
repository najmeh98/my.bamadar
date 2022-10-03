import router from "next/router";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  ArrowrightIcon,
  BoxIcon,
  CallIcon,
  Mobile,
  QusestionIcon,
  Term,
} from "../components/home/icons/Icons";
import { desktop, mobile, tablet } from "../components/home/utils/media";

export default function Profile() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    let loginToken = localStorage.getItem("token");
    if (loginToken) {
      setLogin(true);
    }
  }, []);

  return (
    <Back>
      <Wrapper type>
        <p style={{ fontWeight: "bold", padding: "12px 24px" }}>
          {" "}
          پروفایل کاربری
        </p>
        <Container>
          <Quick_access>
            <Button_access>
              <Button>
                <CallIcon />
              </Button>
              <span> تماس با پشتیبانی</span>
            </Button_access>

            <Button_access>
              <Button>
                <QusestionIcon />
              </Button>
              <span> آموزش کار با مادر </span>
            </Button_access>

            <Button_access>
              <Button>
                <BoxIcon />
              </Button>
              <span> آخرین سفارشات</span>
            </Button_access>
          </Quick_access>

          <div style={{ width: "100%" }}>
            <User_info>
              <Img>
                <img src="man.svg" alt="man" />
              </Img>

              {login ? (
                <>
                  <Info>
                    <p>شماره موبایل : </p>

                    <span>09165254139</span>
                  </Info>
                  <Hr />

                  <Info>
                    <p> نام و نام‌خانوادگی :</p>

                    <span>سارا لازبفلا</span>
                  </Info>
                  <Hr />

                  <Info type="column">
                    <p> آدرس:</p>

                    <span>دزفول - اپاذت - پلاک ۶۷</span>
                    <Hr />
                  </Info>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "red",
                      textAlign: "left",
                      paddingLeft: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      router.push({
                        pathname: "/order",
                        query: { userInfo: true },
                      });
                    }}
                  >
                    ویرایش اطلاعات
                  </p>
                </>
              ) : (
                <Login onClick={() => router.push("/login")}>
                  <ArrowrightIcon />
                  <p style={{ padding: "12px 24px" }}>
                    ورود به سامانه و ثبت اطلاعات
                  </p>
                </Login>
              )}
            </User_info>
          </div>
        </Container>

        <Hr />
        <App_term>
          <Mobile />
          <span>نصب اپلیکیشن</span>
        </App_term>
        <Hr />
        <App_term>
          <Term />
          <span>قوانین و مقررات</span>
        </App_term>

        <Hr />
      </Wrapper>
    </Back>
  );
}

export const Wrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 50px;
  width: 100%;
  margin: auto;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  p {
    color: #818181;
    font-size: 14px;
  }
`;

const Back = styled.div`
  ${desktop(css`
    background: rgb(245, 245, 245);
    min-height: 100vh;
  `)}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  justify-content: space-between;

  // align-items: center;
  /* p {
    padding: 12px 24px;
    color:#818181 ;
    font-weight: bold;
    font-size: 1rem;

} */

  ${desktop(css`
    display: flex;
    flex-direction: row-reverse;
  `)}
`;

const Quick_access = styled.div`
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 15px;
  border-radius: 10px;
  //  width: 100%;
  padding: 8px 16px;
  margin: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  ${desktop(css`
    //grid-template-columns: repeat(1, 1fr);

    display: flex;
    flex-direction: column-reverse;
    max-width: 200px;
    width: 100%;
  `)}
`;

const Button_access = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 0.8rem;
    margin-top: 5px;
    text-align: center;
  }
`;

const Button = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const User_info = styled.div`
  line-height: 2rem;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 15px;
  border-radius: 10px;
  padding: 16px;
  margin: 15px;
  display: block;
  //  flex-direction: column;
  align-items: center;
  //justify-content: center;
  background-color: #fff;
  span {
    text-align: left;
  }
  ${desktop(css`
    // width: 100%;
  `)}
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
`;

const Login = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
  padding: 0px 16px;
  p {
    line-height: 1.5;
    font-weight: 400;
    font-size: 1rem;
  }
`;

const App_term = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 15px;
  cursor: pointer;
  span {
    padding-right: 8px;
  }
`;

const Hr = styled.div`
  //height: 1px;
  border-top: 1px solid lightgray;
  width: 100%;
  //color: #818181;
`;

const Info = styled.div`
  display: ${({ type }) => (type == "column" ? "" : "flex")};
  flex-direction: ${({ type }) => (type == "column" ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  text-align: right;
  padding: 15px;
`;
