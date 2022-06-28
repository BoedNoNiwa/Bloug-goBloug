import { Flex, Container, chakra, Icon, Tooltip, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaTwitter, FaRegEnvelope, FaDiscord } from 'react-icons/fa';
import { motion } from "framer-motion"

function Footer() {

  const [toggleTooltip, setToggleTooltip] = useState(false)
  const [discordTooltip, setToggleDiscordTooltip] = useState(false)
  function tooltipClick() {
    navigator.clipboard.writeText('bprayoga1927@gmail.com');
    setToggleTooltip(true)
  }
  function discordToggle() {
    navigator.clipboard.writeText('BoedNoNiwa.#5046');
    setToggleDiscordTooltip(true)
  }

  
    return (
      <Container as="footer" paddingY="5" paddingX="5" marginTop="10" textAlign="center">
        <chakra.h1 fontSize="xl">Come By And Say Hi!</chakra.h1>
        <Flex justifyContent="space-evenly" marginX="auto" marginTop="2" width="36">
          <Flex as={motion.div} whileHover={{y: -3}} whileTap={{y: -3}}>
            <Tooltip label={toggleTooltip ? "Email Copied!" : "Click Me To Copy My Email"}>
              <span onClick={tooltipClick} >
                <Icon cursor="pointer" _hover={{color: "#00C5A1"}} _dark={{color: "GrayText", _hover: {color: "#00C5A1"}}} as={FaRegEnvelope} boxSize="6" />
              </span>
            </Tooltip>
          </Flex>
          <Link href={`https://github.com/BoedNoNiwa`}>
            <a target="_blank" rel="noopener noreferrer">
            <Flex as={motion.div} whileHover={{y: -3}} whileTap={{y: -3}}>
                <Tooltip label="Check Out My Other Projects!">
                    <span>
                      <Icon cursor="pointer" _hover={{color: "#00C5A1"}} _dark={{color: "GrayText", _hover: {color: "#00C5A1"}}} as={FaGithub} boxSize="6" />
                    </span>
                </Tooltip>
              </Flex>
            </a>
          </Link>
          <Link href={`https://twitter.com/BoedNoNiwa`}>
            <a target="_blank" rel="noopener noreferrer">
            <Flex as={motion.div} whileHover={{y: -3}} whileTap={{y: -3}}>
                <Tooltip label="Follow Me On Twitter!">
                    <span>
                      <Icon cursor="pointer" _hover={{color: "#00C5A1"}} _dark={{color: "GrayText", _hover: {color: "#00C5A1"}}} as={FaTwitter} boxSize="6" />
                    </span>
                </Tooltip>
              </Flex>
            </a>
          </Link>
          <Flex as={motion.div} whileHover={{y: -3}} whileTap={{y: -3}}>
            <Tooltip label={discordTooltip ? "Username Copied!" : "Shoot Me A DM"}>
              <span onClick={discordToggle} >
                <Icon cursor="pointer" _hover={{color: "#00C5A1"}} _dark={{color: "GrayText", _hover: {color: "#00C5A1"}}} as={FaDiscord} boxSize="6" />
              </span>
            </Tooltip>
          </Flex>
        </Flex>
        <chakra.p fontSize="sm" color="GrayText">© Bintang Prayoga 2022</chakra.p>
        <Box borderRadius='full' bg='cyan.600' width="44" marginX="auto" height='0.5'><span></span></Box>
      </Container>
  )}

  export default Footer
  