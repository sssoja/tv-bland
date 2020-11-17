export type Colors =
  | keyof typeof colorCodes
  | {
      copyOne: string;
      copyTwo: string;
      error: string;
      primary: string;
      secondary: string;
      accentPrimary: string;
    };

const colorCodes = {
  black: "#000000",
  athensGray: "#f4f4f6",
};

const colors = {
  ...colorCodes,
  copyOne: colorCodes["athensGray"],
  copyTwo: colorCodes["black"],
};

const breakpoints: string[] = ["319px", "424px", "767px", "1023px"];

const fontSizes = {
  0: 10,
  1: 12,
  2: 14,
  3: 16,
  4: 20,
  5: 30,
  6: 40,
  7: 50,
  8: 60,
  9: 70,
  10: 80,
};

const space = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
};

const fonts = {
  primary: "NunitoBold, sans-serif",
};

const borders = {};

export const fontWeights = {
  light: 300,
  regular: 400,
  bold: 600,
};

export const zIndexes = {
  behind: -1,
  inFront: 1,
  overlay: 1300,
};

const theme = {
  space,
  fonts,
  fontSizes,
  borders,
  breakpoints,
  colors,
};

export default theme;
