
import { Container, Box, Heading, Image, Text, keyframes, ScaleFade, SlideFade, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes `
  0% { transform: scale(1) rotate(0); border-radius: 50%; }
  25% { transform: scale(1) rotate(72deg); border-radius: 50%; }
  50% { transform: scale(1) rotate(144deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(216deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(360deg); border-radius: 50%; }
`;
const animation = `${animationKeyframes} 1.5s ease-in-out infinite`;

function LandingPage() {

  const gradientScale = useBreakpointValue({md: '72', base: '48'})
  const pictureScale = useBreakpointValue({md: '64', base: '40'})
  const pictureMargin = useBreakpointValue({md: '-16.9em', base: '-44'})

    return (<Container marginY="24" marginX="auto">
      <SlideFade in={true} offsetY="3em" delay={0.45}>
        <ScaleFade in={true} initialScale={0.5} delay={0.6}>
          <Box marginX="auto" as={motion.div} animation={animation} padding="2" bgGradient="linear(to-r, #354E54, #00C5A1)" width={gradientScale} height={gradientScale} display="flex"/>
        </ScaleFade>
          <Image top="0" left="0" right="0" bottom="0" alt="BoedNoNiwa"
          marginTop={pictureMargin} marginX="auto" boxSize={pictureScale} 
          borderRadius="full" src='https://avatars.githubusercontent.com/u/95436721?v=4' position="relative"/>
      </SlideFade>
      <SlideFade in={true} offsetY="3em" delay={0.7}>
          <Heading textAlign="center" marginTop="10" fontSize="3xl">
              BoedNoNiwa.
          </Heading>
          <Box textAlign="center" marginTop="3" fontSize="2xl">
              <Text color="#AEFEFF">Lorem ipsum dolor sit amet.</Text>
              <Text color="#BD0061">Lorem ipsum dolor sit amet.</Text>
              <Text color="#9A69BD">Lorem ipsum dolor sit amet.</Text>
          </Box>
      </SlideFade>

    </Container>);
};
export default LandingPage;
