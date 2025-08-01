import { Send } from "lucide-react";
import { useEffect, useRef } from "react";

const ChatInput: React.FC<{
  userInput: string;
  setUserInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}> = ({ userInput, setUserInput, onSubmit, isLoading }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [userInput]);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e as any);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex-shrink-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-b-xl">
      <div className="relative">
        <textarea
          ref={inputRef}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question about the PDF..."
          disabled={isLoading}
          rows={1}
          className="w-full pl-4 pr-20 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
        <button
          type="submit"
          disabled={isLoading || !userInput.trim()}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-blue-500 text-white disabled:bg-gray-400 disabled:dark:bg-gray-600 hover:bg-blue-600 transition-colors duration-200"
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
       <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
        Press <kbd className="px-1.5 py-0.5 border border-gray-300 dark:border-gray-600 rounded-md font-sans">Shift + Enter</kbd> for a new line.
      </p>
    </form>
  );
};

export default ChatInput;