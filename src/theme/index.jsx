import { extendTheme } from "@chakra-ui/react";
import { darken, mode, whiten } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  colors: {
    lendlab: {
      gray: {
        100: "#F9F9F9",
        200: "#EAEAEC",
        300: "#b7bdc3",
        400: "#787C7F",
        input: "#F3F3F5",
      },
      black: {
        100: "#292D32s",
        200: "#000000",
        heading: "#000",
      },
      white: "#FFFFFF",
      blue: "#1a5cff",
      green: {
        100: "#D9FFD5",
        200: "#031102",
      },
      red: {
        100: "#FFD5D5",
        200: "#EB1D1D",
      },
    },
  },
  fonts: {
    heading: "Basement Grotesque",
    body: "Sk-Modernist",
    mono: "Sk-Modernist",
  },

  styles: {
    global: {
      "::-webkit-scrollbar-thumb": {
        border: "4px solid rgba(0, 0, 0, 0)",
        backgroundClip: "padding-box",
        borderRadius: 9999,
        backgroundColor: "lendlab.gray.300",
      },
      "::-webkit-scrollbar": {
        width: "14px",
      },
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
  sizes: {
    nav: "4.25rem",
  },
  shadows: {
    button: "1px 4px 40px 6px rgba(26,92,255,0.19)",
  },
  fontSizes: {
    1: "11px",
    2: "13px",
    3: "15px",
    4: "17px",
    5: "19px",
    6: "21px",
    7: "27px",
    8: "35px",
    9: "59px",
  },
  components: {
    Button: {
      variants: {
        primary: (props) => ({
          bg: "lendlab.blue",
          color: "lendlab.white",
          borderRadius: 17,
          fontSize: 2,
          fontWeight: "400",
          cursor: "pointer",
          boxShadow: "button",
          _hover: {
            bg: mode(whiten("lendlab.blue", 20), darken("lendlab.blue", 20))(props),
          },
        }),
        secondary: (props) => ({
          border: "1px",
          borderColor: "lendlab.gray.300",
          color: "lendlab.heading",
          borderRadius: 17,
          fontSize: 2,
          fontWeight: "400",
          cursor: "pointer",
          _hover: {
            borderColor: mode(darken("lendlab.gray.300", 20))(props),
          },
        }),
      },
    },
  },
});

export default theme;
