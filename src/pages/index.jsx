import Head from 'next/head';
import { getPosts } from '../services';
import { Container, Navbar, DarkModeSwitch, LandingPage, PostCard, Footer, NavBtn } from '../components';
import { Box, Text, SlideFade, useColorModeValue, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';


const Index = ({ posts }) => {
    const [slide, setSlide] = useState(false);
    const hoverBg = useColorModeValue('', '#00262C')
    const navVar = useBreakpointValue({base: <NavBtn/>, md: <Navbar />})

    return (
    <Container height="100vh">
      <Head>
        <title>Bloug goBloug</title>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/949216626715279391/953555857524789288/Amogus.png" />
      </Head>

      {navVar}
      <DarkModeSwitch />
      <LandingPage />
        <SlideFade in={slide} onTouchMove={() => setSlide(true)} onMouseEnter={() => setSlide(true)} offsetY="3em" delay={0.1}>
          <Text textAlign="center" marginTop='36' fontSize="4xl" >Writings</Text>
          <Box marginTop="20" marginX="auto" paddingX="5">
            {posts.slice(0, 5).map((post, index) => (
            <Box _hover={{backgroundColor: hoverBg}} marginY="5" paddingY="5" paddingX="3" borderRadius="2xl" as={motion.div}       
            whileHover={{ scale: 1.1 }}
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
export default Index;

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
        props: { posts }
    };
}
