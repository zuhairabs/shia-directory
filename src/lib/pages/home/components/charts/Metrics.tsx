import {
  Box,
  Grid,
  // Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Metrics = ({ label, value }: { label: string; value: string }) => {
  const bg = useColorModeValue('hsla(0, 0%, 80%, 1)', 'hsla(0, 0%, 18%, 1)');

  return (
    <Box
      padding="15px 20px"
      borderRadius="10px"
      background={bg}
      width="21%"
      height="100px"
      border="1px dashed #84CC16"
    >
      <Grid alignItems="center" templateColumns="1fr 1fr">
        <Text
          display="flex"
          justifyContent="start"
          fontWeight="500"
          fontSize="14px"
        >
          {label}
        </Text>
        <Text
          display="flex"
          justifyContent="end"
          fontFamily="DM Serif Display, serif;"
          fontWeight="800"
          fontSize="50px"
        >
          {value}
        </Text>
      </Grid>
    </Box>
  );
};

export default Metrics;
