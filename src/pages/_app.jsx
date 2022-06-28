import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import '../styles/style.css'
import "@fontsource/rubik/500.css";
import "@fontsource/roboto/500.css";
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout >
          <Component {...pageProps}/>
      </Layout>
    </ChakraProvider>);
}
export default MyApp;
