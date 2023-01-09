import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
