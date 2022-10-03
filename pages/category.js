import { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import router, { useRouter } from "next/router";
import { Config, config } from "../components/home/utils/main";
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
import Space from "../components/share/Space";
import { CartContext } from "../components/CartContext";
import { Pagination } from "../components/Pagination";

const Category = () => {
  const [product, Setproduct] = useState([]);
  const [pageData, SetpageData] = useState([]);

  const { query, push } = useRouter();
  const router = useRouter();
  const id = router.query.id;
  const q = query.q;
  console.log({ query });
  //

  let [action, setAction] = useState(undefined);
  let [page, setPage] = useState(undefined);

  const { AddProduct, removeProduct, DeleteProduct, products, AddtoCart } =
    useContext(CartContext);

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
    // if (!page) return;
    // ادرس کانفیک رو مطابق وبسایت بامادر تغییر دادم
    // https://www.bamadar.com/data

    let url = `https://www.bamadar.com/data/api/get_products?category=${action}`;
    if (page) {
      url += "&page=" + page;
    }

    console.log({ url, page });
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data.meta);
        Setproduct(response.data.data);
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
        {product &&
          product.length > 0 &&
          product.map((pages, index) => {
            let productFromCart = products.find((p) => p.id === pages.id);
            productFromCart && console.log(productFromCart.balance);
            return (
              <InnerRow key={index}>
                <AddIconProduct
                  {...pages}
                  AddtoCart={() => AddtoCart(pages)}
                  AddProduct={() => AddProduct(pages.id)}
                  DeleteProduct={() => DeleteProduct(pages.id)}
                  removeProduct={() => removeProduct(pages.id)}
                  productFromCart={productFromCart && productFromCart.balance}
                />

                {/* <img src={image == "empty" ? "no image.png" : apiAdd + image} /> */}
                <div
                  onClick={() => {
                    router.push({
                      pathname: "/products",
                      query: { id: pages.id },
                    });
                  }}
                >
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
            );
          })}
      </Wrapper>

      <Space vertical={20} />
      <Pagination
        maxpage={pageData.last_page}
        currentpage={page ? page : pageData.currentpage}
        setPage={setPage}
        page={page}
        // url={url}
      />
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
