import React from 'react'
import Navbar from './Navbar'
import DarkModeSwitch from './DarkModeSwitch'
import NavBtn from './NavBtn'
import { useBreakpointValue } from '@chakra-ui/react'

function Layout({ children }) {
    const navVar = useBreakpointValue({base: <NavBtn />, md: <Navbar />})
  return (
    <>
        {navVar}
        <DarkModeSwitch />
        {children}
    </>
  )
}

export default Layout