import { Box, Text, Image, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import useSWR from 'swr'

function SpotifyRecent({ cardWidth, picSize, textSize, boxHeight }) {

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotifyRecent', fetcher);

  return (
      <a href={data?.songUrl} rel='noopener noreferrer' target="_blank">
        <Flex
         as={motion.div}     
         whileHover={{ scale: 1.02 }}
         whileTap={{ scale: 1 }}
         transition='0.1s linear'
         width={cardWidth} height={boxHeight} borderRadius="xl" justifyContent="space-between"
          _dark={{border: "1px solid", borderColor:"cyan.500", _hover: {background: "#00262C"}}}>
            <Box>
                <Image borderTopStartRadius="xl" borderBottomStartRadius="xl" boxSize={picSize} 
                src={data?.albumImageUrl}
                alt={data?.album} 
                />
            </Box>
            <Box textAlign="center" marginY="auto" marginX="auto" maxWidth="3xs">
                <Text fontSize={textSize}>
                  {data?.title}
                </Text>
                <Text color="#00A987">
                  {data?.artist}
                </Text>
            </Box>
        </Flex>
      </a>
  )
}

export default SpotifyRecent  