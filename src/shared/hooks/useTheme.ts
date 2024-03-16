/* eslint-disable no-underscore-dangle */

'use client';

import { useCallback, useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(
    typeof window === 'undefined' ? 'light' : window.__theme || 'light',
  );

  const toggleTheme = useCallback(() => {
    const newValue = theme === 'light' ? 'dark' : 'light';
    window?.__setPreferredTheme(newValue);
  }, [theme]);

  useEffect(() => {
    window.__onThemeChange = setTheme;
  }, []);

  return { theme, toggleTheme };
}
