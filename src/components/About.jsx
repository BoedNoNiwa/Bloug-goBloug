import { Box, Heading, Text, chakra, useBreakpointValue } from '@chakra-ui/react'

function About({ author }) {
  const padSize = useBreakpointValue({base: "50", md: "40", sm: "10"})

  return (
    <Box paddingX={padSize} marginY="24" textAlign="left" alignSelf="start" _dark={{color: "white"}}>
        <Heading>About Me</Heading>
        <Text>{author.name}</Text>
      
    </Box>
  )
}

export default About