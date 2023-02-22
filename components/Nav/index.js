import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import logoImg from '../../public/icons/logo_lg.png';
import darkImg from '../../public/icons/night.png';
import lightImg from '../../public/icons/light.png';

const Nav = () => {
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
    <nav className="flex items-center h-14 bg-black text-white justify-between sm:justify-center">
      <Link href="/" className="ml-2">
        <Image
          alt="logo"
          src={logoImg}
          width="120"
          className="inline-block min-w-[120px]"
        />
      </Link>
      <ul className="hidden sm:flex items-center mx-auto justify-center gap-12 flex-grow">
        <li>
          <Link
            href="/tested-cars"
            className="hover:border-b-2 hover:font-bold transition-all"
          >
            Voitures testées
          </Link>
        </li>
        <li>
          <Link
            href="/calculator"
            className="hover:border-b-2 hover:font-bold transition-all"
          >
            Calculateur
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:border-b-2 hover:font-bold transition-all"
          >
            À propos
          </Link>
        </li>
      </ul>

      <div className="w-32 hidden sm:flex justify-end">
        <button
          className="w-8 h-8 p-1 bg-white/50 dark:bg-black/50 mr-4"
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        >
          {currentTheme === 'dark' ? (
            <Image alt="light-mode" src={lightImg} />
          ) : (
            <Image alt="dark-mode" src={darkImg} />
          )}
        </button>
      </div>
      <div className="w-16 h-16  flex justify-center items-center sm:hidden">
        <button className="bg-green-500 "></button>
      </div>
    </nav>
  );
};

export default Nav;
