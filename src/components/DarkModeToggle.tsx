import { Sun, Moon } from "lucide-react";

const DarkModeToggle: React.FC<{ isDarkMode: boolean; setIsDarkMode: (value: boolean) => void }> = ({ isDarkMode, setIsDarkMode }) => (
  <button
    onClick={() => setIsDarkMode(!isDarkMode)}
    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-label="Toggle dark mode"
  >
    {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-500" />}
  </button>
);

export default DarkModeToggle;