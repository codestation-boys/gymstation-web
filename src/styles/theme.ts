import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
  colors: {
    brand: {
      50: "#18171B",
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.50",
        color: "gray.50",
      },
    },
  },
});
