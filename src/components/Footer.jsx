import { Box, Text, Image, Flex } from '@chakra-ui/react';
import logo from '../assets/openai.png';

const Footer = () => {
  return (
    <Box position='absolute' bottom='10px'>
      <Flex justifyContent='center' alignItems='center'>
        <Image src={logo} marginRight={1} />
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};
export default Footer;