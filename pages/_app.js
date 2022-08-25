import Head from "next/head";
import Header from "../components/Header/Header";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kamrul Hasan | Portfolio</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="fav icon" href="./favicon.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
