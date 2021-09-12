
import 'normalize.css';
import '../scss/global.scss';
import BasicLayout from '../layouts/BasicLayout';
function MyApp({ Component, pageProps }) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  )
}

export default MyApp
