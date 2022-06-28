import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { PostDetail, Footer, Container } from "../../components";
import { getPostDetails, getPosts } from "../../services";

const PostDetails = ({ post }) => {
    return (
    <Container>
        <Head>
          <title>{post.title} - Blog goBloug</title>
          <link rel="icon" href="https://cdn.discordapp.com/attachments/949216626715279391/953555857524789288/Amogus.png" />
        </Head>
      <Flex direction="column" alignItems="start" justifyContent="flex-start" color="black" _dark={{ color: '#00C5A1' }} 
      transition="all 0.15s ease-out">
        <PostDetail post={post}/>
      </Flex>
    <Footer />
    </Container>);
};
export default PostDetails;
export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
        props: {
            post: data
        }
    };
}
export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: false
    };
}
