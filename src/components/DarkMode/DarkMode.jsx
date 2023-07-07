import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

const DarkMode = () => {
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    const dark = localStorage.getItem('dark');

    if (dark === 'active') {
      setIsDark('active');
      document.documentElement.classList.add('dark');
    } else {
      setIsDark('inactive');
      document.documentElement.classList.remove('dark');
    }
  }, []);


  const setupMode = (mode) => {
    if (mode === 'active') {
      localStorage.setItem('dark', 'inactive');
      document.documentElement.classList.remove('dark');
      setIsDark('inactive');
    }

    if (mode === 'inactive') {
      localStorage.setItem('dark', 'active');
      document.documentElement.classList.add('dark');
      setIsDark('active');
    }
  }

  if (isDark === 'inactive') {
    return (
      <section className="p-2 bg-stone-50 border border-solid border-black rounded-full cursor-pointer">
        <BsFillSunFill
          onClick={() => setupMode('inactive')}
          className="fill-stone-950 text-lg hover:fill-amber-700"
        />
      </section>
    )
  }

  if (isDark === 'active') {
    return (
      <section className="p-2 bg-stone-50 border border-solid border-black rounded-full cursor-pointer">
        <BsFillMoonStarsFill
          onClick={() => setupMode('active')}
          className="fill-stone-950 text-lg hover:fill-blue-950"
        />
      </section>
    )
  }
}

export default DarkMode;