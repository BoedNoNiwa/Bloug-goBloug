import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import '../styles/style.css'
import "@fontsource/rubik/500.css";
import "@fontsource/roboto/500.css";

function MyApp({ Component, pageProps }) {
    return (<ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps}/>
    </ChakraProvider>);
}
export default MyApp;
