import { Flex, Box, Image, Text, Icon } from '@chakra-ui/react'
import Link from 'next/link';
import { FaSpotify } from 'react-icons/fa'
import { motion } from 'framer-motion'
import useSWR from "swr"

function SpotifyNowPlay({ cardWidth, picSize, textSize, boxHeight }) {

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotifyNowPlay', fetcher);

  return (
    <Link href={data?.songUrl}>
      <a rel='noopener noreferrer' target="_blank">
        <Flex as={motion.div}     
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1 }}
        transition='0.1s linear' width={cardWidth} height={boxHeight} borderRadius="xl" justifyContent="space-between" 
        _dark={{border: "1px solid", borderColor:"cyan.500", _hover: {background: "#00262C"}}}>
          <Box>
            {data?.isPlaying ? (
              <Image borderTopStartRadius="xl" borderBottomStartRadius="xl" boxSize={picSize}
              src={data?.albumImageUrl}
              alt={data?.album} 
              />
            ) 
            : 
            (
              <Icon as={FaSpotify} boxSize={picSize} color="green.300" />
            )
            }
          </Box>
          <Box textAlign="center" marginY="auto" marginX="auto">
              <Text fontSize={textSize}>
              {data?.isPlaying ? data?.title : 'Not Listening'}
              </Text>
              <Text>
              {data?.isPlaying ? data?.artist : ''}
              </Text>
          </Box>
        </Flex>
      </a>
    </Link>
  )
}

export default SpotifyNowPlay