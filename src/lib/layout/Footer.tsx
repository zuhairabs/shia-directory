import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
      marginBottom="2rem"
    >
      <Text fontSize="xs">
        &copy;{' '}
        <Link href="https://zuhairabs.github.io" isExternal>
          Syed Zuhair Abbas
        </Link>{' '}
        - {new Date().getFullYear()}
      </Text>
    </Flex>
  );
};

export default Footer;
