
import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    brand: {
      primary: "#417682",
      white: "#FFFFFF",
      black: "#333333",
      light: "#F8FFFC",
      dark: "#585858",
      danger: "#FF0000",
      sucess: "#00DD76",
    },
  },
  styles: {
    global: {
      
      // styles for the `a`
      a: {
        color: "#fff",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});


