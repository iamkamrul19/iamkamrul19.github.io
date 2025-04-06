import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Kamrul Hasan | Senior Full Stack Developer | MERN Stack Expert
        </title>
        <meta
          name="description"
          content="Kamrul Hasan is a Senior Full Stack Developer specializing in MERN stack development. With expertise in MongoDB, Express.js, React.js, and Node.js, I create robust, scalable web applications. Explore my portfolio and professional journey at imkamrul."
        />
        <meta
          name="keywords"
          content="Kamrul Hasan, Full Stack Developer, MERN Developer, MongoDB, Express.js, React.js, Node.js, Web Development, JavaScript, TypeScript, Next.js, Software Engineer, imkamrul"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Kamrul Hasan" />
        <meta
          property="og:title"
          content="Kamrul Hasan | Senior Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Professional portfolio of Kamrul Hasan - Senior Full Stack Developer specializing in MERN stack development"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imkamrul.github.io" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
