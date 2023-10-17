const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
};

const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
    phoneMax: 550,
    tabletMax: 1100,
    laptopMax: 1500,
};

const QUERIES =  {
    phones: `(max-width: ${BREAKPOINTS.phoneMax}px)`,
    tablets: `(max-width: ${BREAKPOINTS.tabletMax}px)`,
    laptops: `(max-width: ${BREAKPOINTS.laptopMax}px)`,
};

export {
    COLORS,
    WEIGHTS,
    QUERIES,
};
