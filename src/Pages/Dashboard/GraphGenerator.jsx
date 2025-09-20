import { useState } from "react";
import { History, PlusCircle } from "lucide-react";

export default function GraphGeneratorPage() {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Graph Generator
        </h1>

        {/* Option Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveTab("history")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
              activeTab === "history"
                ? "bg-green-500 text-white border-green-500"
                : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
            }`}
          >
            <History size={18} />
            Select from History
          </button>

          <button
            onClick={() => setActiveTab("new")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
              activeTab === "new"
                ? "bg-green-500 text-white border-green-500"
                : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
            }`}
          >
            <PlusCircle size={18} />
            Create New Graph
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 border rounded-xl bg-gray-50">
          {activeTab === "history" ? (
            <div className="text-center text-gray-600">
              <p>No graphs in history yet.</p>
              <p className="text-sm mt-1">Your generated graphs will appear here.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter data or formula..."
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition">
                Generate Graph
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
