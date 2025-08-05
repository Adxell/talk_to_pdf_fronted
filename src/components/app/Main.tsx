import { useState } from "react";
import type { Message } from "../types/Message";
import ErrorMessage from "../common/ErrorMessage";
import ChatInput from "../chat/ChatInput";
import ChatWindow from "../chat/ChatWindow";
import ChatHeader from "../chat/ChatHeader";
import PDFUpload from "../pdf/PDFUpload";



const Main = () => {

  const [isPdfUploaded, setIsPdfUploaded] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handlePdfUpload = (file: File) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsPdfUploaded(true);
      setIsLoading(false);
    }, 1500);
  };

  const resetChat = () => {
    setIsPdfUploaded(false);
    setMessages([]);
  };
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', text: 'Hello! I am your PDF assistant. What would you like to know about the document?' },
    { id: '2', role: 'user', text: 'What is the main topic of this document?' },
    { id: '3', role: 'assistant', text: 'The main topic appears to be about advancements in renewable energy sources.' },
  ]);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim()) return;
        
        const userMessage: Message = { id: Date.now().toString(), text: userInput, role: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setUserInput('');
        setIsLoading(true);

        // Simulate a bot response
        setTimeout(() => {
        const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: 'This is a simulated response based on your question.',
            role: 'assistant',
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
        }, 1000);
    };
    return (
      <main className="flex-1 flex flex-col items-center justify-center p-4 overflow-hidden">
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
      </main>
    )
}

export default Main;