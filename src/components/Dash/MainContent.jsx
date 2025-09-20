import React from 'react';
import SearchBar from './SearchBar';

const MainContent = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center p-10">
      {/* You can add a title or other components here */}
      <h1 className="text-5xl font-bold font-[font1] tracking-wide text-gray-400 mb-8">Knowledge Explorer</h1>
      <SearchBar />
      {/* Other dashboard content would go here */}
    </main>
  );
};

export default MainContent;