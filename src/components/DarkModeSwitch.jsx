import { useColorMode, IconButton, Tooltip } from '@chakra-ui/react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

function DarkModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    
    return (
    <Tooltip label={isDark ? "Nox!" : "Lumos!"} bg={isDark ? "#F7FAFC" : "#072227"}>      
      <IconButton position="fixed" top={4} right={4} icon={isDark ? <BsMoonStarsFill /> : <BsSunFill />} aria-label="Toggle Theme" colorScheme="cyan" onClick={toggleColorMode}/>
    </Tooltip>
    );
};

export default DarkModeSwitch
