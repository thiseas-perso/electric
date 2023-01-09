import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <header>
      [Header]
      <button
        onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      >
        {currentTheme === 'dark' ? 'light' : 'dark'}
      </button>
    </header>
  );
};

export default Header;
