import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

import { BarLabels } from '~/lib/utils';
import type { BarLabelsType } from '~/lib/utils';

const Labels = ({ items }: { items: BarLabelsType }) => {
  return (
    <Flex marginTop="1rem" gap="2rem">
      {items.map(({ id, bg, text }) => (
        <Flex
          fontWeight="500"
          fontSize="14px"
          color="#979797"
          key={id}
          gap="5px"
          alignItems="center"
        >
          <Box
            borderRadius="4px"
            border="1px solid #000"
            width="20px"
            height="20px"
            background={bg}
          />
          {text}
        </Flex>
      ))}
    </Flex>
  );
};

const BarChart = () => {
  const bg = useColorModeValue('hsla(0, 0%, 80%, 1)', 'hsla(0, 0%, 18%, 1)');
  return (
    <Box
      padding="15px 20px"
      borderRadius="10px"
      background={bg}
      width="45%"
      height="250px"
      border="1px dashed #84CC16"
    >
      <Text marginBottom="1.5rem" fontWeight="600">
        Available for projects
      </Text>
      <Flex flexDirection="column" gap="1rem" paddingY="1rem">
        <Box
          borderRadius="10px"
          width="60%"
          height="20px"
          background="linear-gradient(90deg, hsla(150, 58%, 50%, 1) 0%, hsla(150, 58%, 30%, 1) 100%)"
        >
          <Text
            height="100%"
            display="flex"
            justifyContent="end"
            marginRight="1rem"
            alignItems="center"
            fontSize="12px"
            fontWeight="bolder"
            fontStyle="italic"
          >
            60%
          </Text>
        </Box>
        <Box
          borderRadius="10px"
          width="10%"
          height="20px"
          background="linear-gradient(90deg, hsla(199, 100%, 50%, 1) 0%, hsla(199, 100%, 30%, 1) 100%)"
        >
          <Text
            height="100%"
            display="flex"
            justifyContent="end"
            marginRight="1rem"
            alignItems="center"
            fontSize="12px"
            fontWeight="bolder"
            fontStyle="italic"
          >
            10%
          </Text>
        </Box>
        <Box
          borderRadius="10px"
          width="30%"
          height="20px"
          background="linear-gradient(90deg, hsla(47, 100%, 40%, 1) 0%, hsla(47, 100%, 30%, 1) 100%)"
        >
          <Text
            height="100%"
            display="flex"
            justifyContent="end"
            marginRight="1rem"
            alignItems="center"
            fontSize="12px"
            fontWeight="bolder"
            fontStyle="italic"
          >
            30%
          </Text>
        </Box>
      </Flex>
      <Labels items={BarLabels} />
    </Box>
  );
};

export default BarChart;
