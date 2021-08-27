import App from "next/app";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Head from "next/head";
import { ToastContainer as ToastContainerBase } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import theme from "../styles/theme";

const ToastContainer = styled(ToastContainerBase).attrs({
  // custom props
})`
  .Toastify__toast {
    border-radius: 0;
  }
  .Toastify__toast--error {
    background-color: ${theme.colors.primary};
  }
  .Toastify__toast--info {
    background-color: #1bbdd6;
  }
`;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kool Koalas</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer position="top-center" hideProgressBar={true} />
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
