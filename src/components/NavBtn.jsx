import { Flex, Menu, MenuButton, MenuList, MenuItem, IconButton, Button} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { SiWebpack } from 'react-icons/si'
import { FaHome, FaPen } from 'react-icons/fa'
import { BsPersonCircle } from 'react-icons/bs'
import Link from 'next/link'

function NavBtn() {
  return (
    <Flex position="absolute" top={4} left={4}>
        <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                _dark={{backgroundColor: "#1A202C"}}
                colorScheme={'teal'}
                >
                    <IconButton as={HamburgerIcon} />
            </MenuButton>
            <MenuList>
                <Link href={`/`}>
                    <MenuItem icon={<FaHome />}  >
                        Home
                    </MenuItem>
                </Link>
                <Link href={`/writings`}>
                    <MenuItem icon={<FaPen />}>
                        Writings
                    </MenuItem>
                </Link>
                <Link href={`/projects`}>
                    <MenuItem icon={<SiWebpack />}>
                        Projects
                    </MenuItem>
                </Link>
                <Link href={`/about`}>
                    <MenuItem icon={<BsPersonCircle />}>
                        About
                    </MenuItem>
                </Link>
            </MenuList>
        </Menu>
    </Flex>
  )
}

export default NavBtn