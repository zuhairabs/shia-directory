import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { GlobalStyleProps } from '@chakra-ui/theme-tools';

import { config } from './config';

export const theme = extendTheme({
  fonts: {
    heading: 'Plus Jakarta Sans, sans-serif',
    body: 'Plus Jakarta Sans, sans-serif',
  },
  components: {
    // Button: {
    // }
    Checkbox: {
      baseStyle: {
        control: {
          background: '#2b2b2b',
          _checked: {
            backgroundColor: 'brand.500',
          },
        },
      },
    },
    Radio: {
      baseStyle: {
        control: {
          _hover: {
            background: '#2b2b2b',
            borderColor: 'brand.500',
          },
          _checked: {
            background: 'brand.500',
            borderColor: 'brand.500',
            _hover: {
              background: 'brand.500',
              borderColor: 'brand.500',
            },
          },
        },
      },
    },
  },
  config,
  colors: {
    brand: {
      500: '#84CC16', // Adjust the shade as needed
    },
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: mode('#eee', '#1d1d1d')(props),
      },
    }),
  },
});
