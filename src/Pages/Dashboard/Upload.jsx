import { useState } from "react";

export default function FileUpload() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <label
        htmlFor="fileInput"
        className="flex flex-col items-center justify-center w-80 h-48 border-2 border-dashed border-gray-400 rounded-2xl cursor-pointer bg-white shadow-md hover:border-blue-500 transition duration-200"
      >
        <svg
          className="w-12 h-12 text-gray-400 mb-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span className="text-gray-600 font-medium">
          {fileName ? fileName : "Upload your file"}
        </span>
        <span className="text-xs text-gray-400">(Images, Videos, Files)</span>
        <input
          id="fileInput"
          type="file"
          accept="image/*,video/*,.pdf,.doc,.docx,.txt"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
    </div>
  );
}

