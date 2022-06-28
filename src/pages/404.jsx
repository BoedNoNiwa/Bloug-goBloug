import { Text, Box, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from '../components'

export default function FourOhFour() {
  return <>
  <Container height="100vh">
    <Head>
        <title>AND THESE PROMISES BROKEN DEEP BELOW</title>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/949216626715279391/953555857524789288/Amogus.png" />
    </Head>
    <Box margin="auto" textAlign="center" textColor="black" _dark={{color: "white"}}>
        <Heading fontSize="8xl">404</Heading>
        <Text marginBottom="2">Page Not Found | Lost In The Echo</Text>
        <Box marginBottom="3" borderRadius='full' bg='cyan.600' width="64" marginX="auto" height='0.5'><span></span></Box>
        <Link href={`/`}>
            <Text cursor="pointer" textDecor="underline" color="blue.400" _hover={{color: "cyan.400"}}>Go Back</Text>
        </Link>
    </Box>
  </Container>
  </>
}