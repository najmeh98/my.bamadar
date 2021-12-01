import Head from "next/head";
import react from "react";
//import { Footer } from "./home/Footer";
import { FooterIcon } from "./home/FooterIcon";
import { Header } from "./home/header";
import { InputBox } from "./home/InputBox";
import styled, { css } from "styled-components";
export const Layout = ({ children, title = "فروشگاه اینترنتی با مادر" }) => {
  return (
    <div>
      <Head>
        <title> {title}</title>
        <link rel="icon" href="/IconBamadar.jpg" />
      </Head>
      <header>{/* <InputBox /> */}</header>

      <main>{children}</main>
      {/* <footer>
        <FooterIcon />
      </footer> */}
    </div>
  );
};
