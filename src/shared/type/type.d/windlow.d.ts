interface Window {
  __theme: TTheme;
  __onThemeChange: (theme: TTheme) => void;
  __setPreferredTheme: (theme: TTheme) => void;
}
