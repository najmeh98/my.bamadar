import react, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import Categorybox from "../components/Categorybox";
import {
  desktop,
  mobile,
  notmobile,
  tablet,
} from "../components/home/utils/media";

const Sub_categories = () => {
  const [subCat, SetsubCat] = useState([]);

  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    //    if (!id) return;
    axios
      .get(`https://www.bamadar.com/data/api/all_categories`)
      .then(function (response) {
        console.log(response.data);
        SetsubCat(response.data);
        setmetaCat(response.meta);
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

  return (
    <Container>
      <Wrapper>
        <CardsList>
          {subCat &&
            subCat.length != 0 &&
            subCat.map((item, index) => (
              /* <CardsItem> */
              <Categorybox
                key={index}
                item={item}
                arrayItem={item.sub_categories}
              />

              /* </Wrapper> */
            ))}
        </CardsList>
      </Wrapper>
    </Container>
  );
};
export default Sub_categories;

const Container = styled.div`
  width: 100%;
  padding: 30px;
`;

const Wrapper = styled.div`
  margin: auto;
`;

const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-gap: 20px;
  margin: 10px;
  ${desktop(css`
    grid-template-columns: repeat(4, 1fr);
  `)}
  ${tablet(
    css`
      grid-template-columns: repeat(3, 1fr);
    `
  )}
  ${notmobile(
    css`
      grid-template-columns: repeat(1, 1fr);
    `
  )}
  ${mobile(
    css`
      grid-template-columns: repeat(2, 1fr);
    `
  )}
`;

const CardsItem = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px;
  padding: 5px;
  display: flex;
  flex-flow: row-reverse;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  line-height: 1.8rem;

  p {
    font-size: 0.8rem;
    text-align: right;
    vertical-align: middle;
  }
`;

const ListItem = styled.div`
  display: block;
  text-align: start;
  align-items: flex-start;
  justify-content: space-between;
  p {
    cursor: pointer;
  }
`;

const Icon = styled.div`
  width: 1em;
  // vertical-align: middle;
  display: inline-block;
  //align-items: flex-end;
  cursor: pointer;
  height: 1em;
  margin-left: 8px;
  font-size: 0.6rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const SubCategories = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 150px;

  img {
    justify-self: center;
  }
  p {
    text-align: center;
    font-size: 0.8rem;
    // font-weight: bold;
  }
`;

const MoreIcon = styled.div`
  display: flex;
  align-items: center;
  color: rgb(23, 155, 191);
  font-size: 0.8rem;
  text-align: center;
  cursor: pointer;
  span {
    height: auto;
    transition-duration: 300ms;
  }
`;
const Muticontainer = styled.div``;
