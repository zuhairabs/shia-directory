import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Flex width="100%" padding="2rem" margin="0" transition="0.5s ease-out">
        <Meta />
        <Header />
        <Box as="main" width="full">
          {children}
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Layout;
