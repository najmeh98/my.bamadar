import { createGlobalStyle, ThemeProvider } from "styled-components";
//import { Footer } from "../components/home/Footer";
import { Header } from "../components/home/header";
import { InputBox } from "../components/home/InputBox";
import { FooterIcon } from "../components/home/FooterIcon";
import Head from "next/head";
import { CartContextProvider } from "../components/CartContext";

//import "../public/vazir.css";
const GlobalStyle = createGlobalStyle`
  body {
    direction: rtl;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     font-family: Vazir;
    overflow-x:hidden;
    @font-face {
    font-family: Vazir;
    src: url('../fonts/Vazir-Medium-FD.eot');
    src: url('../fonts/Vazir-Medium-FD.eot?#iefix') format('embedded-opentype'),
         url('../fonts/Vazir-Medium-FD.woff2') format('woff2'),
         url('../fonts/Vazir-Medium-FD.woff') format('woff'),
         url('../fonts/Vazir-Medium-FD.ttf') format('truetype');
     font-weight: 500;
    font-style: normal;
    }
  }
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
  }
  .input colorchange {
    background-color: rgb(250, 250, 250);
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
  }
  .input {
    background: #f4f4f4;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
    dark: "#eef3f6",
  },
  fontFamily: "Vazir",
  fontSize: {
    small: "12px",
    normall: "15px",
    medium: "17px",
    Large: "19px",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CartContextProvider>
          <GlobalStyle />

          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, minimum-scale=1"
            />
          </Head>
          <InputBox />

          <Component {...pageProps} />

          <FooterIcon />
        </CartContextProvider>
      </ThemeProvider>
    </>
  );
}
