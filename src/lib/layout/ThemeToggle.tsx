import { Box, Image, Tooltip, useColorMode } from '@chakra-ui/react';

import DarkIcon from '../assets/img/dark.png';
import LightIcon from '../assets/img/light.png';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip
      padding="0.5rem 1rem"
      borderRadius="4px"
      hasArrow
      label={
        colorMode === 'light' ? 'Switch to dark theme' : 'Switch to light theme'
      }
      placement="right"
    >
      <Box
        as="button"
        background="#38483D"
        width="50px"
        height="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="30px"
        transition="0.5s ease-out"
        onClick={toggleColorMode}
        _hover={{
          background: '#28302a',
        }}
      >
        <Image
          filter="invert(1)"
          src={colorMode === 'light' ? DarkIcon : LightIcon}
          width="26px"
          height="26px"
        />
      </Box>
    </Tooltip>
  );
};

export default ThemeToggle;
