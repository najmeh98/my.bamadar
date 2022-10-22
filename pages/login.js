import React, { useState } from "react";
import styled, { css } from "styled-components";
import { LetterICon, ValiditionIcon } from "../components/home/icons/Icons";
import { motion } from "framer-motion";
import axios from "axios";
import { Config, config, phoneValidation } from "../components/home/utils/main";
import router from "next/router";
import Space from "../components/share/Space";

function Login() {
  const [mobileNumber, SetmobileNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const [isInVerification, setVerification] = useState(false);

  const onSubmitNumber = () => {
    // if (!phoneValidation(mobileNumber)) {
    //   setError("شماره موبایل وارد شده معتبر نیست");
    //   return;
    // }
    if (mobileNumber.length == 0 || mobileNumber.length < 11) {
      setError("شماره موبایل وارد شده معتبر نیست");
      return;
    }
    setloading(true);
    axios
      .post(
        config + "/api/user/login",
        {
          mobile: mobileNumber,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setVerification(true);
        //setloading(false);
        console.log(res);
        console.log(res.data);

        let message = res && res.data && res.data.message;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });
  };

  const onSubmitVerification = () => {
    if (!verificationCode || verificationCode.length < 4) {
      setError("کد تایید باید ۴ رقم باشد.");
      return;
    }

    setloading(true);
    axios
      .post(
        config + "/api/user/verify",
        {
          mobile: mobileNumber,
          otp: verificationCode,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setloading(false);
        let message = res && res.data && res.data.message;

        console.log(message);
        //message === "welcome" && localStorage.setItem(access);

        const { access_token: token, mobile } = res?.data?.data || {};

        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("MaderCell", mobile);
          console.log(mobile);
          if (message == "welcome") {
            router.push("/");
          } else {
            router.push({ pathname: "/order", query: { userInfo: true } });
          }
        } else {
          setError(error);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <Wrapper>
      <Space vertical={60} />
      {/* <div style={{ height: "40px" }}></div> */}
      <CheckPart>
        <Paper style={{ marginLeft: "-30px" }}>
          <ValiditionIcon />
          <Space vertical={10} />
          <p style={{ color: "#94a5b0", width: "100px" }}>اعتبار سنجی</p>
        </Paper>

        <div
          style={{ position: "relative", marginTop: "-30px", width: "100%" }}
        >
          <div
            style={{
              flexGrow: 1,
              height: "2px",
              backgroundColor: "rgb(226,232,240)",
              top: "0",
              position: "absolute",
              width: "100%",
            }}
          ></div>
          <motion.div
            style={{
              position: "absolute",
              backgroundColor: "red",
              top: "0",
              left: "0",
              width: "0%",
              height: "2px",
            }}
            initial={{ width: 0 }}
            animate={{ width: isInVerification ? "100%" : 0 }}
          />
        </div>

        <Paper style={{ marginRight: "-30px" }}>
          <LetterICon />
          <Space vertical={10} />
          <p style={{ width: "100px" }}>ورود اطلاعات</p>
        </Paper>
      </CheckPart>
      <Container>
        {/* <Space vertical={20} /> */}

        {isInVerification ? (
          // eslint-disable-next-line jsx-a11y/alt-text
          <Image>
            <img src="shield.svg" alt="shield" width="100px" height=" 100px" />
          </Image>
        ) : (
          // eslint-disable-next-line jsx-a11y/alt-text
          <Image>
            <img
              src="rocket.svg"
              alt="rocket"
              width="100px"
              height=" 100px"
              style={{ transform: "rotate(-45deg)", marginTop: "20px" }}
            />
          </Image>
        )}

        <Space vertical={30} />
        <InputWrapper>
          <InputLabel> شماره موبایل :</InputLabel>

          <Input
            type="text"
            maxLength={11}
            value={mobileNumber}
            onChange={(e) => {
              SetmobileNumber(e.target.value);
            }}
          />
        </InputWrapper>

        <p
          style={{
            fontSize: "0.8rem",
            marginTop: "10px",
            lineHeight: "1.5rem",
          }}
        >
          لطفا شماره موبایل خود را وارد کرده و دکمه دریافت کد تایید را بزنید تا
          کد تایید از طریق پیامک برای شما ارسال شود
        </p>

        {isInVerification && (
          <InputWrapper>
            <InputLabel> کد دریافت شده:</InputLabel>

            <Input
              type="text"
              maxLength={4}
              onChange={(e) => {
                setVerificationCode(e.target.value);
              }}
              value={verificationCode}
            />

            <p
              style={{
                fontSize: "0.8rem",
                margin: "10px 0px",
                lineHeight: "1.5rem",
              }}
            >
              پس از دریافت پیامک حاوی کد تایید، کد را وارد کرده و سپس دکمه تایید
              را بزنید
            </p>
          </InputWrapper>
        )}
        {error && <RedText> {error}</RedText>}
        <Button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            onClick={isInVerification ? onSubmitVerification : onSubmitNumber}
          >
            {" "}
            {isInVerification
              ? loading
                ? "در حال تایید..."
                : "تایید کد "
              : loading
              ? "ارسال کد ..."
              : "دریافت کد تایید"}
          </motion.button>
        </Button>
        {isInVerification && (
          <RedText
            style={{
              display: "flex",
              justifyContent: "flex-end",
              cursor: "pointer",
            }}
            onClick={() => {
              setVerification(false);
              SetmobileNumber("");
            }}
          >
            تغییر شماره
          </RedText>
        )}
      </Container>
    </Wrapper>
  );
}
export default Login;

export const Stylepage = styled.div`
  background-color: #f5f5f5;
  padding: 60px 0px;
`;

export const Wrapper = styled.div`
  //padding-top: 60px;
  width: 100%;
  margin: auto;
  //height: 100vh;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 580px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 15px 0px;
  margin: 15px;
  padding: 20px;
  border-radius: 5px;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //  margin: 20px;
  //margin-bottom: 30px;
`;

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const CheckPart = styled.div`
  width: 100%;
  //max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const InputLabel = styled.label`
  position: absolute;
  top: 10%;
  right: 15px;
  color: rgb(86, 118, 139);
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  line-height: 24px;
  text-align: left;
  border-radius: 8px;
  font-weight: 500;
  letter-spacing: 2px;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 5px;
  padding: 5px 8px 5px 30px;
  border: none;
  direction: ltr;
  outline: none;
  font-family: ${(p) => p.theme.fontFamily};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 10px 0px;
  button {
    font-family: ${(p) => p.theme.fontFamily};
    font-size: 1rem;
    border-radius: 8px;
    background: rgb(23, 155, 191);
    padding: 10px 5px;
    border: none;
    color: #fff;
    width: 140px;
    cursor: pointer;
  }
`;

const RedText = styled.p`
  color: red;
  font-size: ${(p) => p.theme.fontSize.small};
`;
