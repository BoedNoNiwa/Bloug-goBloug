import { Flex } from '@chakra-ui/react';
function Container(props) {
    return (
    <Flex direction="column" alignItems="center" justifyContent="flex-start" bg="white" color="black" _dark={{
            bg: 'gray.800',
            color: '#00C5A1',
        }} transition="all 0.15s ease-out" {...props}/>)
};

export default Container

