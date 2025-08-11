import { Loader2, Upload } from "lucide-react";
import { useRef, type ChangeEvent, type DragEvent } from "react";


type PDFUploadProps = {
  onPdfUpload: (file: File) => void;
  isLoading: boolean;
};

const PDFUpload = ({ onPdfUpload, isLoading }: PDFUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onPdfUpload(file);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === 'application/pdf') {
      onPdfUpload(file);
    }
  };

  return (
    <div 
      className="flex-1 flex flex-col items-center justify-center p-8 text-center"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {isLoading ? (
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
          <p className="text-lg font-medium">Processing your PDF...</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">This might take a moment for larger documents.</p>
        </div>
      ) : (
        <>
          <div className="border-4 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-12 flex flex-col items-center space-y-4">
            <Upload className="w-16 h-16 text-gray-400 dark:text-gray-500" />
            <h2 className="text-2xl font-bold">Upload your PDF</h2>
            <p className="text-gray-500 dark:text-gray-400">Drag & drop your file here, or click to browse.</p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
            >
              Browse Files
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PDFUpload;

