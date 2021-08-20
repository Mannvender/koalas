import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ToastContainer as ToastContainerBase } from 'react-toastify'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.min.css'

import theme from '../styles/theme'

const ToastContainer = styled(ToastContainerBase).attrs({
  // custom props
})`
  .Toastify__toast-container {
  }
  .Toastify__toast {
    border-radius: 0;
  }
  .Toastify__toast--error {
    background-color: ${theme.colors.primary};
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
  }
  .Toastify__toast--info {
    background-color: #1bbdd6;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <ToastContainer position='top-center' />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp
