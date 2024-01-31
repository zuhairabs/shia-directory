import { Box, Heading } from '@chakra-ui/react';

const Greetings = () => {
  return (
    <Box alignItems="center" gap="15px">
      <Box
        width="100%"
        position="fixed"
        top="1rem"
        left="0"
        right="0"
        mx="auto"
        alignItems="center"
        gap="15px"
        zIndex="-1"
      >
        <Heading
          position="relative"
          textAlign="center"
          fontFamily="'Anton', sans-serif;"
          fontWeight="800"
          fontSize="8rem"
          color="#84CC16"
          zIndex="-2"
        >
          SHIA DIRECTORY
        </Heading>
        <Box
          position="absolute"
          width="100%"
          height="100%"
          bottom="0"
          left="0"
          right="0"
          mx="auto"
          zIndex="-1"
          boxShadow="inset 0px -5px 0 0px rgba(29, 29, 29, 0.6), 
          inset 0px -10px 20px 0px rgba(29, 29, 29, 0.7), 
          inset 0px -40px 40px 0px rgba(29, 29, 29, 0.8), 
          inset 0px -60px 60px 0px rgba(29, 29, 29, 0.9),
          inset 0px -100px 140px 0px rgba(29, 29, 29, 0.9)"
        />
      </Box>
    </Box>
  );
};

export default Greetings;
