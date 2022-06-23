import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import moment from 'moment'

function PostCard({ post }) {

    const dateText = useColorModeValue('gray.500', '#007455')

    return (
    <Link href={`/post/${post.slug}`}>
        <a>
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
        </a>
    </Link>
    );
};
export default PostCard;
