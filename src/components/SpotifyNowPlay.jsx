import { Flex, Box, Image, Text, Icon } from '@chakra-ui/react'
import { FaSpotify } from 'react-icons/fa'
import { motion } from 'framer-motion'
import useSWR from "swr"

function SpotifyNowPlay({ cardWidth, picSize, textSize, boxHeight }) {

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotifyNowPlay', fetcher);

  return (
      <a href={data?.isPlaying ? data.songUrl : "https://open.spotify.com/user/q0jf7t2xygjttio2aejixuj7e"} rel='noopener noreferrer' target="_blank">
        <Flex as={motion.div}     
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1 }}
        transition='0.1s linear' width={cardWidth} height={boxHeight} borderRadius="xl" justifyContent="space-between" 
        _dark={{border: "1px solid", borderColor:"cyan.500", _hover: {background: "#00262C"}}}>
          <Box>
            {data?.isPlaying ? 
            (<Image borderTopStartRadius="xl" borderBottomStartRadius="xl" boxSize={picSize} src={data?.albumImageUrl} alt={data?.album} />) 
            : 
            (<Icon as={FaSpotify} boxSize={picSize} color="green.300" />)
            }
          </Box>
          <Box textAlign="center" marginY="auto" marginX="auto" width="3xs">
              <Text fontSize={textSize}>
              {data?.isPlaying ? data?.title : 'Not Listening'}
              </Text>
              <Text color="#00A987">
              {data?.isPlaying ? data?.artist : ''}
              </Text>
          </Box>
        </Flex>
      </a>
  )
}

export default SpotifyNowPlay