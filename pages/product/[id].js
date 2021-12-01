import axios from "axios";
import { useRouter } from "next/router";
import react, { useEffect, useState } from "react";
import { config } from "../../components/home/Product";
import { Layout } from "../../components/Layout";
import styled, { css } from "styled-components";
import { InputBox } from "../../components/home/InputBox";
import Image from "next/image";
//import img from "../public/bg.png";
const Product = () => {
  //console.log(product);
  const [proPromo, setproPromo] = useState([]);
  const [related, Setrelated] = useState([]);
  const router = useRouter();
  const id = router.query.id;
  console.log("/product/" + id);

  console.log(proPromo);

  useEffect(() => {
    // getPromo();
    axios
      .get(`https://www.bamadar.com/data/api/product/${id}`)
      .then(function (response) {
        // handle success
        setproPromo(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, [id]);

  return (
    <div>
      <InputBox />
      <Container>
        <Wrapper>
          <Image
            src="/chips.jpeg"
            alt="chips"
            width="300px"
            height="300px"
            style={{ borderRadius: "20px" }}
          />
        </Wrapper>
        <Product_name>
          <Title>
            <p>سوپر چیپس چی توز </p>
          </Title>

          <Productoption>
            <Productoption_left>افزدون به سبد</Productoption_left>
            <Price>
              <Top_price>730,000 ریال</Top_price>
              <Off_price>10%</Off_price>
            </Price>
          </Productoption>
        </Product_name>
      </Container>
    </div>
  );
};

export default Product;
const Container = styled.div`
  display: block;
  margin: 20% auto;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Wrapper = styled.div`
  background-color: #e6e6e6;
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Product_name = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const Title = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 9px 0px;
  margin: 20px 0px;
  padding: 6px 0px;
  letter-spacing: normal;
  p {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
  }
`;
const Price = styled.div`
  border: 1px solid rgb(230, 230, 230);
  border-radius: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  direction: rtl;
  max-width: 50%;
  flex-basis: 50%;
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
`;
const Top_price = styled.div`
  padding: 5px 25px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
`;

const Off_price = styled.div`
  background: rgb(236, 59, 79);
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  padding: 3px 5px;
  width: 30%;
  display: flex;
  align-items: flex-end;
  text-align: end;
  color: #fff;
`;
const Productoption = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 16px 5px;
  width: 100%;
`;

const Productoption_left = styled.div`
  border-radius: 30px;
  font-size: 16px;
  color: #fff;
  background-color: #179bbf;
  padding: 0px 5px;
  width: 135px;
  height: 30px;
  border: 1px solid #179bbf;
`;
