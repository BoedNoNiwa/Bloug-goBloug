import { Heading, Box, Text, SlideFade, Button, ButtonGroup, useColorModeValue, useBreakpointValue } from '@chakra-ui/react'
import { CgMediaLive } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'


function ProjectCard({ project }) {

  const cardBg = useColorModeValue('white', "#1A2027")
  const cardHover = useColorModeValue('gray.200', '#00262C')
  const textColor = useColorModeValue('#072227', 'white')
  const textHover = useColorModeValue('#072227', '#00C5A1')
  const btnSize = useBreakpointValue({base: "xs", md: "sm"})

  const [open, setOpen] = useState(false)

  function btnOpen() {
    setOpen(prevSetOpen => !prevSetOpen)
  }

  return (
    <Box as={motion.div}       
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 1 }}
    transition='0.1s linear'
    bg={cardBg}
    color={textColor}
    _hover={{backgroundColor: cardHover, color: textHover}}
    height="36"
    borderRadius="xl"
    paddingY="3"
    onClick={btnOpen}
    cursor="pointer">
      <Box paddingX="3"> 
        <Heading fontSize="xl" marginBottom="3">{project.title}</Heading>
        <Text fontSize="sm">{project.excerpt}</Text>
          <SlideFade in={open} delay={0.18}>
            <ButtonGroup size={btnSize} marginTop="5" display={open ? "block" : "none"}>
              <Link href={project.repoSlug}>
                <a rel='noopener noreferrer' target="_blank">
                  <Button size={btnSize} colorScheme='teal' leftIcon={<BsGithub />}>Repositories</Button>
                </a>
              </Link>
              <Link href={project.demoSlug}>
                <a rel='noopener noreferrer' target="_blank">
                  <Button size={btnSize} colorScheme='teal' variant="outline" leftIcon={<CgMediaLive />}>Demo</Button>
                </a>
              </Link>
            </ButtonGroup>
          </SlideFade>
      </Box>
    </Box>
  )
}

export default ProjectCard