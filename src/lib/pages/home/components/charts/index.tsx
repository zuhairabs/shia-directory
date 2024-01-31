import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

import BarChart from '~/lib/pages/home/components/charts/BarChart';
import KPIChart from '~/lib/pages/home/components/charts/KPIChart';
import Metrics from '~/lib/pages/home/components/charts/Metrics';
import { metrics } from '~/lib/utils';

const Charts = () => {
  const bg = useColorModeValue('#eee', '#1d1d1d');

  return (
    <Box background={bg} marginTop="7.5rem">
      <Flex m="2rem 0" wrap="wrap" gap="2rem">
        {metrics.map((m) => (
          <Metrics key={m.id} label={m.title} value={m.value} />
        ))}
      </Flex>
      <Flex wrap="wrap" gap="2rem">
        <BarChart />
        <KPIChart />
      </Flex>
    </Box>
  );
};

export default Charts;
