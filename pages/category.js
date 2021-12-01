import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import router, { useRouter } from "next/router";
import { Config, config } from "../components/home/utils/main";
import { Image } from "next/image";
import { Product } from "../components/Product";
import {
  Discountstyle,
  InnerRow,
  Name,
  ProductCard,
  Right,
  SellandDiscount,
} from "../components/Homeproduct";
import { AddIconProduct } from "../components/home/AddIconProduct";
import { Price } from "../components/share/Price";
import Currentpage from "./currentpage";
import Space from "../components/share/Space";

const Category = () => {
  const [products, Setproducts] = useState([]);
  const [pageData, SetpageData] = useState([]);

  const { query, push } = useRouter();
  const router = useRouter();
  const id = router.query.id;
  const q = query.q;
  console.log({ query });
  //

  let [action, setAction] = useState(undefined);
  let [page, setPage] = useState(undefined);

  console.log({ page, action });
  useEffect(() => {
    if (!query) return;
    if (query.action) {
      setAction(query.action);
    }
    if (query.page) {
      setPage(query.page);
    }
  }, [query]);

  console.log({ page, action });

  useEffect(() => {
    if (!action) return;
    //  if (!page) return;
    // ادرس کانفیک رو مطابق وبسایت بامادر تغییر دادم
    // https://www.bamadar.com/data

    let url = `https://www.bamadar.com/data/api/get_products?category=${action}`;
    if (page) {
      url += "&page=" + page;
    }

    console.log({ url });
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data.meta);
        Setproducts(response.data.data);
        SetpageData(response.data.meta);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
        } else if (error.request) {
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, [action, page]);
  return (
    <Container>
      <Wrapper>
        {products &&
          products.length > 0 &&
          products.map((pages, index) => (
            <InnerRow key={index}>
              <AddIconProduct />

              {/* <img src={image == "empty" ? "no image.png" : apiAdd + image} /> */}
              <div>
                <ProductCard>
                  {pages.images == null ? (
                    <img
                      src="no image.png"
                      width="120px"
                      height="120px"
                      alt="no image"
                    />
                  ) : (
                    <img
                      alt="images"
                      src={config + pages.images.thumb}
                      width="120px"
                      height="100%"
                    />
                  )}
                </ProductCard>

                <Right>
                  <Name>{pages.name}</Name>
                  {/* <Measure> */}
                  {/* قیمت: {pages.price} */}
                  <SellandDiscount>
                    <div>
                      {pages.price != pages.sell_price ? (
                        <>
                          <Price item={page} discount={pages.discount}>
                            {pages.sell_price}
                          </Price>

                          <Price cross>{pages.price}</Price>
                        </>
                      ) : (
                        <>
                          <Price>{pages.sell_price}</Price>
                        </>
                      )}
                    </div>
                    {pages.discount !== 0 && (
                      <Discountstyle>{pages.discount}%</Discountstyle>
                    )}
                  </SellandDiscount>
                </Right>
              </div>
            </InnerRow>
          ))}
      </Wrapper>

      <Currentpage pageData={pageData.per_page} />
      <Space vertical={60} />
    </Container>
  );
};

export default Category;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  margin: auto;
  flex-direction: column;
`;
