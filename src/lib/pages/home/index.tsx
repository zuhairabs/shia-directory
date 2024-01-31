import { Box } from '@chakra-ui/react';

import Charts from '~/lib/pages/home/components/charts';

import Greetings from './components/Greetings';

const Home = () => {
  return (
    <Box marginLeft="8rem">
      <Greetings />
      <Charts />
    </Box>
  );
};

export default Home;
