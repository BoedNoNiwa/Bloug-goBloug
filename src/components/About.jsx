import { Box, Heading, Text, chakra, useBreakpointValue, SimpleGrid } from '@chakra-ui/react'

function About() {
  const padSize = useBreakpointValue({base: "50", md: "40", sm: "10"})

  return (
    <Box paddingX={padSize} marginY="24" textAlign="left" alignSelf="start" _dark={{color: "white"}}>
        <Heading>About Me</Heading>
        <Text>Hello There! My name is <chakra.span bg="#00C5A1" _dark={{color: "black"}}>Bintang Prayoga.</chakra.span>
        {' '}I'm currently studying at SMKN 2 Surabaya and currently learning React environment.
        </Text>
      
    </Box>
  )
}

export default About