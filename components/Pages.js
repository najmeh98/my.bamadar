import React, { useState } from "react";
import styled, { css } from "styled-components";

export const Pages = ({ maxpage, currentpage }) => {
  const [isClick, SetisClick] = useState();
  return (
    <div>
      {[...Array(maxpage)].map((item, index) => {
        let pagenumber = index + 1;
        console.log(pagenumber);
        return (
          <>
            <Container
              active={isClick == pagenumber}
              onClick={() => {
                router.push({
                  pathname: "/category",
                  query: { page: currentpage },
                });
                SetisClick(index);
              }}
            >
              {item}
            </Container>
          </>
        );
      })}
    </div>
  );
};
const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #179bbf;
  color: #fff;
  ${(p) =>
    p.active &&
    css`
      color: #179bbf;
      background-color: #fff;
    `}
`;
