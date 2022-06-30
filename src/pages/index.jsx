import Head from 'next/head';
import { getPosts } from '../services';
import { Container, Footer, LandingPage, PostCard } from '../components';
import { Text, SlideFade, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { HiPencilAlt } from 'react-icons/hi';

const Index = ({ posts }) => {
    const [slide, setSlide] = useState(false);
    
    return (
    <Container height="100vh">
      <Head>
        <title>Bloug goBloug</title>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/949216626715279391/953555857524789288/Amogus.png" />
      </Head>

      <LandingPage />
        <SlideFade in={slide} onTouchMove={() => setSlide(true)} onMouseEnter={() => setSlide(true)} offsetY="3em" delay={0.1}>
          <Text marginTop='24' marginBottom={`10`} textAlign="center" fontSize="4xl">
                Writings
              <Icon as={HiPencilAlt} marginLeft='3' w={7} h={7} color="#008E6E" />
          </Text>
            {posts.slice(0, 3).map((post, index) => (
              <PostCard key={index} post={post.node}/>
            ))}
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
