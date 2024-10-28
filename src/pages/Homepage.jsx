import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import DigiPic from '../assets/images/computer-laptop-notebook-pen.jpg';
const Homepage = () => (
  <Box
    maxW='7xl'
    mx='auto'
    px={{
      base: '0',
      lg: '12',
    }}
    py={{
      base: '0',
      lg: '12',
    }}
  >
    <Stack
      direction={{
        base: 'column-reverse',
        lg: 'row',
      }}
      spacing={{
        base: '0',
        lg: '20',
      }}
    >
      <Box
        width={{
          lg: 'sm',
        }}
        transform={{
          base: 'translateY(-50%)',
          lg: 'none',
        }}
        bg={{
          base: useColorModeValue('red.50', 'gray.700'),
          lg: 'transparent',
        }}
        mx={{
          base: '6',
          md: '8',
          lg: '0',
        }}
        px={{
          base: '6',
          md: '8',
          lg: '0',
        }}
        py={{
          base: '6',
          md: '8',
          lg: '12',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            lg: '10',
          }}
        >
          <Stack
            spacing={{
              base: '2',
              lg: '4',
            }}
          >
            <Heading
              size='lg'
              color={useColorModeValue('black.500', 'black.300')}
            >
              Notes-Taking Application
            </Heading>
          </Stack>
          <HStack spacing='3'>
            <Link
              as={ReactLink}
              to='/login'
              color={useColorModeValue('black.500', 'black.300')}
              fontWeight='bold'
              fontSize='lg'
              letterSpacing={2}
              px='2'
              py='2'
              rounded='md'
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.100', 'gray.900'),
              }}
            >
              Login
              <Icon
                alignSelf={'centre'}
                w={10}
                color={useColorModeValue('black.500', 'black.300')}
                as={FaArrowRight}
              />
            </Link>
          </HStack>
        </Stack>
      </Box>
      <Flex flex='1' overflow='hidden'>
        <Image
          src={DigiPic}
          alt='Lovely Image'
          fallback={<Skeleton />}
          maxH='450px'
          minW='300px'
          objectFit='cover'
          flex='1'
        />
      </Flex>
    </Stack>
  </Box>
);

export default Homepage;
