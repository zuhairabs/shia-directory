import { Box, Flex, Tooltip } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from '~/lib/layout/Logo';
import { sidebar } from '~/lib/utils';

// import ThemeToggle from './ThemeToggle';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Flex
      position="fixed"
      flexDirection="column"
      justifyContent="space-between"
      width="80px"
      height="85vh"
      background="#2F3C33"
      borderRadius="40px"
    >
      <Flex
        justifyContent="center"
        alignItems="flex-end"
        marginTop="1rem"
        height="10%"
        onClick={() => navigate('/')}
        cursor="pointer"
      >
        <Logo />
      </Flex>
      <Flex
        flexDirection="column"
        as="header"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
        height="90%"
      >
        {sidebar.map((item) => {
          return (
            <Tooltip
              padding="0.5rem 1rem"
              borderRadius="4px"
              hasArrow
              label={item.title}
              placement="right"
            >
              <Box
                key={item.id}
                as="button"
                background={
                  item.route === location.pathname ? '#84CC16' : '#38483D'
                }
                width="50px"
                height="50px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="30px"
                transition="0.5s ease-out"
                onClick={() => navigate(item.route)}
                boxShadow={
                  item.route === location.pathname
                    ? '0px 4px 15px #28302a'
                    : 'unset'
                }
                _hover={{
                  background: '#28302a',
                }}
              >
                {item.icon()}
              </Box>
            </Tooltip>
          );
        })}
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="flex-end"
        marginBottom="1rem"
        height="10%"
      >
        {/* <ThemeToggle /> */}
      </Flex>
    </Flex>
  );
};

export default Header;
