import "../styles/globals.css";
import Header from "../components/Header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,700&family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
