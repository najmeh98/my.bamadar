const { default: styled } = require("styled-components");

export const BackgroundImage = styled.img`
  background-position: center;
  background: url("bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  z-index: -1;
`;
