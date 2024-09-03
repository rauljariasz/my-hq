import { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';

const DarkModeButton = () => {
  const html = document.querySelector('html');
  const [darkmode, setDarkmode] = useState<boolean>(true);

  useEffect(() => {
    if (!html) {
      return;
    }

    // Verifica si el elemento HTML ya tiene la clase 'dark'
    if (html.classList.contains('dark')) {
      setDarkmode(true);
    } else {
      setDarkmode(false);
    }
  }, [html]);

  if (!html) {
    return;
  }

  const handleClick = () => {
    if (darkmode) {
      setDarkmode(false);
      html.classList.remove('dark');
    } else {
      setDarkmode(true);
      html.classList.add('dark');
    }
  };
  return (
    <button
      className='inline-flex h-12 w-12 animate-shimmer items-center justify-center rounded-full border dark:border-slate-800 bg-[linear-gradient(110deg,#fff,45%,#e1e1e1e1,55%,#fff)] bg-[length:200%_100%] font-medium text-black transition-colors focus:outline-none focus:ring-2 dark:focus:ring-black focus:ring-offset-2 dark:focus:ring-offset-slate-50 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] border-gray-400 focus:ring-white focus:ring-offset-black fixed left-6 bottom-6 z-[1000]'
      onClick={handleClick}
    >
      {darkmode ? (
        <MdLightMode className='w-6 h-6 text-white' />
      ) : (
        <MdDarkMode className='w-6 h-6 text-[#6694b3]' />
      )}
    </button>
  );
};

export default DarkModeButton;
