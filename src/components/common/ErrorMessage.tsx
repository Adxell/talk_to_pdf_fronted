import { X } from "lucide-react";

const ErrorMessage: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => (
  <div className="absolute bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-4">
    <span className="font-medium">{message}</span>
    <button onClick={onClose} className="text-red-500 hover:text-red-700">
      <X className="w-5 h-5" />
    </button>
  </div>
);

export default ErrorMessage;