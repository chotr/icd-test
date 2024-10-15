import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const fonsize = extendTheme({
  "12": "3.08vw", // 12px tại viewport 390px
  "14": "3.59vw", // 14px
  "16": "4.10vw", // 16px
  "18": "4.62vw", // 18px
  "20": "5.13vw", // 20px
  "24": "6.15vw", // 24px
  "28": "7.18vw", // 28px
  "32": "8.21vw", // 32px

});

const colors = extendTheme({
  main: "#F98F29",
  black01: "#333333",
  gray01: "#A1A1A1",
  gray02: "#C7C7C7"
});
const pxToVw = (px: number, viewportWidth: number = 390): string => {
  const vw = (px / viewportWidth) * 100;
  return `${vw}vw`;
};

const fonts = extendTheme({
  fonts: {
    body: `Roboto', sans-serif`,
    html: `Roboto', sans-serif`,
  },
})

const theme = extendTheme({
  breakpoints,
  fonsize,
  pxToVw,
  fonts,
  colors,
});

export default theme;
