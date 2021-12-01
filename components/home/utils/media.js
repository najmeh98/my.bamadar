import { css } from "styled-components";

export const mobile = (inner) => css`
  @media (max-width: 800px) {
    ${inner};
  }
`;

export const notmobile = (inner) => css`
  @media (max-width: 500px) {
    ${inner};
  }
`;
export const desktop = (body) => css`
  @media (min-width: 1024px) {
    ${body};
  }
`;
export const largeDescktop = (body) => css`
  @media (min-width: 1400px) {
    ${body};
  }
`;

export const tablet = (inner) => css`
  @media (max-width: 1170px) {
    ${inner};
  }
`;
