import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import moment from 'moment'

function PostCard({ post }) {

    const dateText = useColorModeValue('gray.500', '#007455')
    const hoverBg = useColorModeValue('', '#00262C')

    return (
    <Box>
    <Link href={`/post/${post.slug}`}>
        <a>
            <Box _hover={{backgroundColor: hoverBg}} marginY="5" paddingY="5" paddingX="3" borderRadius="2xl" as={motion.div}       
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.05 }}
                transition='0.1s linear'>
                <Box marginTop="0" maxWidth="3xl" marginBottom="10" cursor="pointer">
                        <Heading fontSize='2xl' color="">{post.title}</Heading>
                        <Text noOfLines={[1, 2]} marginTop={`3`} marginBottom='-8' _dark={{ color: "#AEFEFF" }}>
                            {post.excerpt}
                        </Text>
                </Box>
                <Box borderRadius='full' bg='#354E54' marginBottom='2' height='1.5'><span></span></Box>
                <Box float="right">
                    <Text fontSize="small" fontWeight="bold" color={dateText}>{moment(post.createdAt).format('MMMM Do YYYY')}</Text>
                </Box>
            </Box>
        </a>
    </Link>
    </Box>
    );
};
export default PostCard;
