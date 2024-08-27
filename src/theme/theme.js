import { extendTheme } from '@chakra-ui/react';

const myTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#b2f5f5', // Culoare de fundal
        color: '#0a2234', // test color
      },
    },
  },

  colors: {
    primary: {
      100: '#008000', // Culoare implicită
      200: '#ffffff', // Culoare implicită
      300: '#0b6c58', // Colorează când linkul este activ
      500: '#cef3ec',
    },
  },

  bg: {
    primary: {
      100: '#6fe1e1',
      200: ' #fc6767',
      300: 'violet',
      500: '#ffffff', // Culoare implicită
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: 'primary.100',
        transition: 'color 0.3s',
        _hover: {
          color: 'primary.200',
        },
        _active: {
          color: 'primary.300',
        },
      },
    },
    Button: {
      variants: {
        changeBg: {
          color: 'primary.100',
          bg: 'primary.200',
          transition: 'color 0,3s, bg 0,3s',
          _hover: {
            color: 'primary.300',
            bg: 'primary.500',
          },
        },
      },
    },
  },
});

export default myTheme;