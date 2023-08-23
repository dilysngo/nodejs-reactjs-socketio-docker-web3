import Head from "next/head";
import { AppProps } from "next/app";
import Script from "next/script";

const App = (props: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#1FC7D4" />
        <title>Funny Movies</title>
      </Head>
      {<props.Component />}
    </>
  )
}

export default App;