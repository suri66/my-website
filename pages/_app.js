import Header from '../components/core/Header/Header';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="main-app">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
