import { useBreakpointValue, SimpleGrid, Text, Icon } from '@chakra-ui/react'
import { About, Container, DarkModeSwitch, Footer, Navbar, NavBtn, SpotifyNowPlay, SpotifyRecent } from "../../components";
import { CgMediaLive } from 'react-icons/cg'
import { BsMusicNote } from 'react-icons/bs';
import Head from 'next/head';

function index() {
  const navVar = useBreakpointValue({base: <NavBtn/>, md: <Navbar />})
  const cardWidth = useBreakpointValue({base: "2xs", md: "20rem" })
  const picSize = useBreakpointValue({ base: "3.4rem", md: "6.85rem" })
  const boxHeight = useBreakpointValue({ base: "14", md: "28" })
  const textSize = useBreakpointValue({ base: "sm", md: "xl" })

  return (


    <Container height="100vh">
      <Head>
        <title>About | Bloug goBloug</title>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/949216626715279391/953555857524789288/Amogus.png" />
      </Head>
      {navVar}
      <DarkModeSwitch />
      <About />
      <Container as="footer" paddingY="5" paddingX="5" marginTop="10" textAlign="center">
        <SimpleGrid columns={[1, null, 2]} gap={4} fontSize="sm" _dark={{color: "white"}} color="black" textAlign="left">
          <Text>
           <Icon as={CgMediaLive} /> Now Listening
            <SpotifyNowPlay textSize={textSize} boxHeight={boxHeight} picSize={picSize} cardWidth={cardWidth} />
          </Text>
          <Text>
           <Icon as={BsMusicNote} /> Recently Played
            <SpotifyRecent textSize={textSize} boxHeight={boxHeight}  picSize={picSize} cardWidth={cardWidth} />
          </Text>
        </SimpleGrid>
      </Container>
      <Footer />
  </Container>
  )
}

export default index