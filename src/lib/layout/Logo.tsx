import { Box, Image } from '@chakra-ui/react';

import LogoImg from '../assets/img/logo.png';

const Logo = () => {
  return (
    <Box
      width="50px"
      height="50px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="30px"
      transition="0.5s ease-out"
    >
      <Image src={LogoImg} />
    </Box>
  );
};

export default Logo;
