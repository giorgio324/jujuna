import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonTextColor = theme === 'light' ? 'text-gray-800' : 'text-gray-200';

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-lg focus:outline-none focus:ring flex items-center space-x-2 ${buttonTextColor}`}
    >
      {theme === 'light' ? (
        <>
          <FaMoon />
          <span>Dark</span>
        </>
      ) : (
        <>
          <FaSun />
          <span>Light</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggleButton;
