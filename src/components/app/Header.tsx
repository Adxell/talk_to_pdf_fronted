import type { Dispatch, SetStateAction } from 'react';
import { Bot } from "lucide-react";
import DarkModeToggle from "../common/DarkModeToggle";

type HeaderProps = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ isDarkMode, setIsDarkMode }: HeaderProps) => (
  <header className="flex-shrink-0 w-full flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
    <div className="flex items-center space-x-3">
      <Bot className="w-8 h-8 text-blue-500" />
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">PDF Chat AI</h1>
    </div>
    <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
  </header>
);

export default Header;
