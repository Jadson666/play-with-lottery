import { wrapper } from '../store'
import 'bootstrap/dist/css/bootstrap.min.css';

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)
