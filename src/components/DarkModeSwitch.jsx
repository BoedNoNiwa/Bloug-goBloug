import { useColorMode, IconButton, Tooltip } from '@chakra-ui/react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

function DarkModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    
    return (
    <Tooltip label={isDark ? "Nox!" : "Lumos!"} bg={isDark ? "#F7FAFC" : "#072227"}>      
      <IconButton 
      position="fixed" 
      top={4} right={4} 
      icon={isDark ? <BsMoonStarsFill /> : <BsSunFill />} 
      aria-label="Toggle Theme" 
      onClick={toggleColorMode}
      color="#00C5A1" 
      bg={isDark ? "gray.700" : "gray.200"}
      />
    </Tooltip>
    );
};

export default DarkModeSwitch
