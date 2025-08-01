import { FileText, X } from "lucide-react";

const ChatHeader: React.FC<{ fileName: string | null; onReset: () => void; }> = ({ fileName, onReset }) => (
  <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-t-xl">
    <div className="flex items-center space-x-3 min-w-0">
      <FileText className="w-6 h-6 text-blue-500 flex-shrink-0" />
      <p className="font-medium truncate" title={fileName || ''}>
        {fileName || 'Document'}
      </p>
    </div>
    <button onClick={onReset} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200" aria-label="Close document">
      <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
    </button>
  </div>
);

export default ChatHeader;