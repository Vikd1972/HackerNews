type ThemeType = {
  color: string;
  background: string;
};

type DefaultThemeType = Record<string, ThemeType>;

const theme: DefaultThemeType = {
  light: {
    color: '#263238',
    background: '#ECEFF1',
  },
  dark: {
    color: '#ECEFF1',
    background: '#263238',
  },
};

export default theme;
