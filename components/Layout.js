import Head from "next/head";
import react from "react";
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
