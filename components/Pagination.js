import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import styled, { css } from "styled-components";

export const Pagination = ({ maxpage, currentpage, setPage, page, url }) => {
  const [isClick, SetisClick] = useState();
  let { query } = useRouter();
  let router = useRouter();
  let pages = [...Array(maxpage).keys()];

  return (
    <Wrapper>
      {pages.map((item, index) => {
        let pageNumber = item + 1;

        return (
          <Container
            key={index}
            onClick={() => {
              router.push({
                pathname: "/category",
                query: { ...query, page: pageNumber },
              });
              setPage(pageNumber);
            }}
            active={page == pageNumber}
          >
            {pageNumber}
          </Container>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin: auto;
  max-width: 1100px;
  width: 100%;
  justify-content: center;
  /* justify-content: space-between; */
`;

const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  color: #179bbf;
  background-color: #fff;
  border: 1px solid #179bbf;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  direction: ltr;

  ${(p) =>
    p.active &&
    css`
      color: #fff;
      background-color: #179bbf;
    `}
`;
