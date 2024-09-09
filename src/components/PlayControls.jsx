import React from 'react';
import shuffle from '../assets/repeat-30.jpeg';

export default function PlayControls() {
    const handleSpeed = () => { console.log('Speed clicked'); };
    const handleBack = () => { console.log('Back clicked'); };
    const handlePlay = () => { console.log('Play clicked'); };
    const handleForward = () => { console.log('Forward clicked'); };
    const handleShuffle = () => { console.log('Shuffle clicked'); };

    return (
        <div className="flex justify-around items-center mt-4">
            <button 
                className="p-2 bg-gray-300 hover:bg-gray-400 rounded flex items-center"
                onClick={handleSpeed}
            >
                <span className="text-gray-700">1x</span>
            </button>
            <button 
                className="p-2 bg-gray-300 hover:bg-gray-400 rounded flex items-center"
                onClick={handleBack}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                </svg>
            </button>
            <button 
                className="p-2 bg-gray-300 hover:bg-gray-400 rounded flex items-center"
                onClick={handlePlay}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
            </button>
            <button 
                className="p-2 bg-gray-300 hover:bg-gray-400 rounded flex items-center"
                onClick={handleForward}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                </svg>
            </button>
            <button 
                className="p-2 bg-gray-300 hover:bg-gray-400 rounded flex items-center"
                onClick={handleShuffle}
            >
                <img src={shuffle} alt="Shuffle" className="w-6 h-6" />
            </button>
        </div>
    );
}
