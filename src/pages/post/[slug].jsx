import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { DarkModeSwitch, Navbar, NavBtn, PostDetail, Footer } from "../../components";
import { getPostDetails, getPosts } from "../../services";

const PostDetails = ({ post }) => {
    const navVar = useBreakpointValue({base: <NavBtn/>, md: <Navbar />})
    return (
    <>
        <Head>
          <title>{post.title} - Blog goBloug</title>
          <link rel="icon" href="https://cdn.discordapp.com/attachments/949216626715279391/953555857524789288/Amogus.png" />
        </Head>
      <Flex direction="column" alignItems="start" justifyContent="flex-start" color="black" _dark={{ color: '#00C5A1' }} 
      transition="all 0.15s ease-out">
        {navVar}
        <DarkModeSwitch />
        <PostDetail post={post}/>
        <Footer />
      </Flex>
    
    </>);
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
