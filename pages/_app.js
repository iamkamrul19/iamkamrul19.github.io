import Head from "next/head";
import Header from "../components/Header/Header";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Front-End Developer | Expert in HTML, CSS, and JavaScript</title>
        <meta
          name="description"
          content="As a front-end developer, I specialize in creating visually stunning and user-friendly websites using HTML, CSS, and JavaScript. With a strong background in design and a focus on delivering the best possible user experience, I am dedicated to helping my clients achieve their online goals."
        />
        <meta
          name="keywords"
          content="front-end developer, HTML, CSS, JavaScript, responsive design, user experience, web design, web development, mobile-friendly"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />\
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
