import React, { useState, useRef } from 'react';
import screenfull from 'screenfull';

const songs = [
  { id: 1, title: 'Song One', url: '/songs/song1.mp3' },
  { id: 2, title: 'Song Two', url: '/songs/song2.mp3' },
  { id: 3, title: 'Song Three', url: '/songs/song3.mp3' },
];

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const playerRef = useRef(null);

  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(playerRef.current);
    }
  };

  return (
    <div ref={playerRef} className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Music Player</h1>
      <button onClick={toggleFullscreen} className="mb-4 p-2 bg-blue-500 text-white rounded">
        Toggle Fullscreen
      </button>
      <div className="mb-6">
        <ul>
          {songs.map((song) => (
            <li
              key={song.id}
              className="cursor-pointer p-2 border-b hover:bg-gray-200"
              onClick={() => setCurrentSong(song)}
            >
              {song.title}
            </li>
          ))}
        </ul>
      </div>
      {currentSong && (
        <div className="mt-6">
          <h2 className="text-lg font-bold">{currentSong.title}</h2>
          <audio controls className="w-full mt-2">
            <source src={currentSong.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
