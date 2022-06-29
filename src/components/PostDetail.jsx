import { Box, Heading, Text, Link, Image, Stack } from '@chakra-ui/react';
import moment from 'moment';
import parse from 'html-react-parser';

function PostDetail({ post }) {
  
    return (
      <Box textAlign="left" marginX="10" marginTop="24">
        <Box>
          <Heading>{post.title}</Heading>
          <Stack direction="row">
            <Text color="#007455">{moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')} • {' '}
            <Link href={`/about`}>
              {post.publishedBy.name}
            </Link> 
          </Text>
          <Image src={post.publishedBy.picture} alt={post.publishedBy.name} boxSize="5" borderRadius="full" />
        </Stack>
      </Box>
      <Box>
        <Text _dark={{ color: 'white' }} letterSpacing="wide">
          {parse(post.content.html)}
        </Text>
      </Box>
    </Box>
    );
};
export default PostDetail;