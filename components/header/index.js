import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import logoImg from '../../public/icons/logo_lg.png';
import darkImg from '../../public/icons/night.png';
import lightImg from '../../public/icons/light.png';

const Header = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  if (!mounted) {
    return null;
  }

  return (
    <header className={className}>
      <Link href="/" className="ml-2">
        <Image
          alt="logo"
          src={logoImg}
          width="120"
          className="inline-block min-w-[120px]"
        />
      </Link>
      <div className="ml-auto mr-2">
        <button
          className="w-8 h-8 p-1 bg-white/50 dark:bg-black/50"
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        >
          {currentTheme === 'dark' ? (
            <Image alt="light-mode" src={lightImg} />
          ) : (
            <Image alt="dark-mode" src={darkImg} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
