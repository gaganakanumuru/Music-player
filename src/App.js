import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <MusicPlayer />
    </div>
  );
}

export default App;
