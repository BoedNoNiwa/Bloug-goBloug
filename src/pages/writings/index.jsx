import { Text, Box, SlideFade, Icon, useColorModeValue } from "@chakra-ui/react";
import { Container, Footer, PostCard } from "../../components";
import { HiPencilAlt } from 'react-icons/hi'
import { motion } from "framer-motion";
import { getPosts } from "../../services";
import Head from "next/head";

function index({ posts }) {

  const hoverBg = useColorModeValue('', '#00262C')

  return (
    <Container height="100vh">
      <Head>
        <title>Writings | Bloug Blog</title>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/949216626715279391/953555857524789288/Amogus.png" />
      </Head>

        <SlideFade in={true} offsetY="3em" delay={0.3}>
          <Text marginTop='24' marginBottom={`10`} textAlign="center" fontSize="4xl">
                Writings
              <Icon as={HiPencilAlt} marginLeft='3' w={7} h={7} color="#008E6E" />
          </Text>
          <Box marginTop="10" marginX="auto" paddingX="5">
            {posts.map((post, index) => (
            <Box _hover={{backgroundColor: hoverBg}} marginY="5" paddingY="3" paddingX="3" borderRadius="2xl" as={motion.div}       
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 1.05 }}
            transition='0.1s linear'>
              <PostCard key={index} post={post.node}/>
            </Box>
            ))}
          </Box>
        </SlideFade>
        <Footer />
  </Container>);
};


export default index

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
        props: { posts }
    };
}