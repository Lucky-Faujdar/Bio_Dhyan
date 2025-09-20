import { useState } from "react";
import { Search, History } from "lucide-react";

export default function ImageGeneratorPage() {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Image Generator
        </h1>

        {/* Option Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveTab("history")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
              activeTab === "history"
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
            }`}
          >
            <History size={18} />
            Select from History
          </button>

          <button
            onClick={() => setActiveTab("search")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
              activeTab === "search"
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
            }`}
          >
            <Search size={18} />
            Search
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 border rounded-xl bg-gray-50">
          {activeTab === "history" ? (
            <div className="text-center text-gray-600">
              <p>No images in history yet.</p>
              <p className="text-sm mt-1">Your generated images will appear here.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter prompt to search..."
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
                Generate Image
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
