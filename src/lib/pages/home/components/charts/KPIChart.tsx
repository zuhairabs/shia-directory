import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

import { KPILabels, KPIData, calculateSize } from '~/lib/utils';
import type { BarLabelsType, KPIDataType } from '~/lib/utils';

const Labels = ({ items }: { items: BarLabelsType }) => {
  return (
    <Flex gap="2rem">
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

const Bubbles = ({ data }: { data: KPIDataType }) => {
  return (
    <Flex position="relative" align="center" justify="center" height="140px">
      {data.map((profession, index) => (
        <Box
          width={`${calculateSize(profession.percentage).width * 1.5}px`}
          height={`${calculateSize(profession.percentage).height * 1.5}px`}
          position="absolute"
          top={profession.top}
          left={profession.left}
          key={profession.id}
          borderRadius="full"
          bg={profession.bg}
          p={4}
          m={2}
          zIndex={10 - index}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontWeight="bold"
            fontStyle="italic"
            textAlign="center"
            fontSize="sm"
          >
            {profession.percentage}%
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

const KPIChart = () => {
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
        Top Professions
      </Text>
      <Bubbles data={KPIData} />
      <Labels items={KPILabels} />
    </Box>
  );
};

export default KPIChart;
