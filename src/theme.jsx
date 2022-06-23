import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
});
const theme = extendTheme({
    semanticTokens: {
        colors: {
            text: {
                default: '#072227',
                _dark: '#00C5A1',
            },
        },
        radii: {
            button: '12px',
        },
    },
    colors: {
        black: '#072227',
    },
    fonts: {
        heading: `'Rubik', sans-serif`,
        body: `'Roboto', sans-serif`
    },
    breakpoints,
});
export default theme;
