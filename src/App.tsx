import { useState } from "react";
import Header from "./components/Header"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className={`flex flex-col h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* <main className="flex-1 flex flex-col items-center justify-center p-4 overflow-hidden">
        <div className="w-full max-w-4xl h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
          {!isPdfUploaded ? (
            <PDFUpload onPdfUpload={handlePdfUpload} isLoading={isLoading} />
          ) : (
            <>
              <ChatHeader fileName={"sample-document.pdf"} onReset={resetChat} />
              <ChatWindow messages={messages} isLoading={isLoading} />
              <ChatInput
                userInput={userInput}
                setUserInput={setUserInput}
                onSubmit={handleSubmit}
                isLoading={isLoading}
              />
            </>
          )}
           {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
        </div>
      </main> */}
    </div>
  )
}

export default App
