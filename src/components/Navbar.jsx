import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import Link from 'next/link';

function Navbar() {
    return (
    <Flex as="nav" gap="5" marginTop="4" alignSelf="center">
        <Flex as={motion.div} whileHover={{y: -4}} whileTap={{y: -4}}>
            <Link href={`/`}>
                Home
            </Link>
        </Flex>
        <Flex as={motion.div} whileHover={{y: -4}} whileTap={{y: -4}}>
            <Link href={`/writings`}>
                Writings
            </Link>
        </Flex>
        <Flex as={motion.div} whileHover={{y: -4}} whileTap={{y: -4}}>
            <Link href={`/projects`}>
                Projects
            </Link>
        </Flex>
        <Flex as={motion.div} whileHover={{y: -4}} whileTap={{y: -4}}>
            <Link href={`/about`}>
                About
            </Link>
        </Flex>
    </Flex>);
};
export default Navbar;
