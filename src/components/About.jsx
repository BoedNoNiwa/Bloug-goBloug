import { Box, Text, useBreakpointValue } from '@chakra-ui/react'

function About({ author }) {
  const padSize = useBreakpointValue({base: "50", md: "40", sm: "10"})

  return (
    <Box width="5xl" paddingX={padSize} marginY="24" textAlign="left" alignSelf="start" _dark={{color: "white"}}>
      <Box marginBottom="5">
        <Text fontSize="3xl">👋About Me</Text>  
        <Box borderRadius='full' bg='cyan.600' width="44" marginBottom="3" height='0.5'><span></span></Box>
        <Text letterSpacing="wide">{author.bio}</Text>
      </Box>
      <Box marginBottom="5">
        <Text fontSize="3xl">🤔Thonking</Text>  
        <Box borderRadius='full' bg='cyan.600' width="44" marginBottom="3" height='0.5'><span></span></Box>
        <Text letterSpacing="wide">{author.bio}</Text>
      </Box>
      <Box marginBottom="5">
        <Text fontSize="3xl">👋About Me</Text>  
        <Box borderRadius='full' bg='cyan.600' width="44" marginBottom="3" height='0.5'><span></span></Box>
        <Text letterSpacing="wide">{author.bio}</Text>
      </Box>
    </Box>
  )
}

export default About