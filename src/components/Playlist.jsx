import React from 'react';

const songs = [
    { title: "Painted in Blue", artist: "Soul Canvas", genre: "Neo-Soul", duration: "5:55" },
    { title: "Tidal Drift", artist: "Echoes of the Sea", genre: "Ambient", duration: "8:02" },
    { title: "Fading Shadows", artist: "The Emberlight", genre: "Alternative Rock", duration: "3:01" },
    { title: "Cosmic Drift", artist: "Solar Flare", genre: "Psychedelic Rock", duration: "5:01" },
    { title: "Urban Serenade", artist: "Midnight Groove", genre: "Jazz", duration: "4:54" },
    { title: "Whispers in the Wind", artist: "Rust & Ruin", genre: "Folk", duration: "6:13" },
    { title: "Electric Fever", artist: "Neon Jungle", genre: "EDM", duration: "8:41" },
    { title: "Edge of the Abyss", artist: "Steel Horizon", genre: "Metal", duration: "2:27" },
    { title: "Golden Haze", artist: "Velvet Waves", genre: "Indie Pop", duration: "3:15" },
    { title: "Shatter the Silence", artist: "Thunderclap Echo", genre: "Rock", duration: "8:22" },
];

export default function Playlist({ onSongSelect, currentSong }) {
    return (
      <div className="p-4 bg-gray-light rounded-md">
        <h1 className="text-black text-xl font-bold p-2">Playlist</h1>
        <div className="space-y-2">
            {songs.map((song) => {
                const isSelected = currentSong && currentSong.title === song.title;
                console.log(`Song: ${song.title}, Is Selected: ${isSelected}`);

                return (
                <div
                    key={song.title}
                    // className="flex justify-between items-center mt-2 hover:bg-purple-300 active:bg-blue-300 cursor-pointer"
                    className={`flex justify-between items-center mt-2 cursor-pointer ${
                        isSelected ? 'bg-yellow-200' : 'hover:bg-purple-300 active:bg-blue-300'
                    }`}
                    onClick={() => {
                        console.log(`Song selected: ${song.title}`);
                        onSongSelect(song);
                    }}
                >
                    <div className="w-1/2">
                        <h2 className="text-black text-md font-semibold pl-2">{song.title}</h2>
                        <p className="text-gray font-semibold pl-2">{song.artist}</p>
                    </div>
                    <div className="w-1/2 text-gray font-semibold text-right pr-2">{song.duration}</div>
                </div>
                );
            })}
        </div>
      </div>
    );
}
