import React, { useState } from 'react';
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <MusicPlayer 
        currentSong={currentSong} 
        onSongSelect={setCurrentSong} 
      />
      <Footer />
    </div>
  );
}

export default App;
