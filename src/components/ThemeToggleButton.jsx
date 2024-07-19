import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className='px-4 py-2 rounded-lg focus:outline-none focus:ring'
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggleButton;
