import React from "react";
import styled, { css } from "styled-components";
import Space from "../components/share/Space";

export default function Currentpage({ pageData }) {
  return (
    <Container>
      {pageData &&
        pageData.length > 0 &&
        pageData.map((page, index) => {
          let numberpage = index + 1;
          return <>{numberpage}</>;
        })}
    </Container>
  );
}

const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #179bbf;
  color: #fff;
`;
