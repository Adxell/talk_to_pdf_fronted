import { useState } from "react";
import Header from "./components/app/Header"
import Main from "./components/app/Main";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  return (
    <div className={`flex flex-col h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Main/>
    </div>
  )
}

export default App
