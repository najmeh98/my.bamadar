import styled, { css } from "styled-components";
import { SearchInput } from "./home/SearchInput";
import { desktop, mobile, tablet } from "./home/utils/media";
import Image from "next/image";
export const BackImage = () => {
  return (
    <Wrapper>
      <Images>
        <GiftImg>
          <ImageDetails
            src="purplepic.png"
            alt="img"
            width="570px"
            height="335px"
          />
        </GiftImg>

        <Container>
          <Img>
            <ImageDetails src="bg.png" alt="img" width="250px" height="160px" />
          </Img>
          <Img>
            <ImageDetails
              src="freedelivery.jpg"
              alt="img"
              width="250px"
              height="160px"
            />
          </Img>
        </Container>
      </Images>
    </Wrapper>
  );
};

const ImageDetails = ({ height, width, src, alt }) => {
  return <img src={src} alt={alt} height={height} width={width} />;
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  margin: auto;
  background-color: rgba(226, 232, 240, 0.4);
  img {
    border-radius: 4px;
  }
  ${desktop(css`
    background-color: #fff;
  `)}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
`;

const Img = styled.div`
  padding: 3px;
  height: 100%;
  width: 100%;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  img {
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    border-radius: 4px;
    border-color: rgb(226, 232, 240);
    ${desktop(css`
      width: 395px;
      height: 260px;
    `)}
    ${mobile(css`
      width: 200px;
      height: 140px;
    `)}
  }
`;

const Images = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 20px 10px;
  cursor: pointer;
  justify-content: center;
  // width: calc(100% + 16px);
`;
const GiftImg = styled.div`
  padding: 0px 0px 0px 12px;
  max-height: 100%;
  max-width: 100%;
  img {
    ${desktop(css`
      width: 910px;
      height: 536px;
    `)}
  }
`;

const Imag = styled.img`
  ${desktop(css`
    width: 810px;
    height: 536px;
  `)}
  ${mobile(css`
    width: 450px;
    height: 300px;
  `)}
`;
