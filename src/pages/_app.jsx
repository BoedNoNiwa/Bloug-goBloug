import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import '../styles/style.css'
import "@fontsource/rubik/500.css";
import "@fontsource/roboto/500.css";
import Layout from '../components/Layout';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
    return (
    <ChakraProvider resetCSS theme={theme}>
      <NextSeo 
        title="Bintang Prayoga"
        titleTemplate="Bintang Prayoga"
        defaultTitle="Bintang Prayoga"
        description="on learning react developer with big dreams!"
        canonical="https://bloug-gobloug.vercel.app/"
      />
      <Layout >
          <Component {...pageProps}/>
      </Layout>
    </ChakraProvider>);
}
export default MyApp;
