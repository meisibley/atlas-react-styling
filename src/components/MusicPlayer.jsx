import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
    return <div>
        <div className="flex">
            <div className="max-w-md mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:w-1/2 lg:w-1/2">
                <CurrentlyPlaying />
                <div className="md:hidden lg:hidden">
                    <Playlist className="w-full h-auto" />
                </div>
            </div>
            <div className="hidden md:block lg:block md:w-1/2 lg:w-1/2">
                <Playlist className="w-full h-auto md:w-1/2 lg:w-1/2" />
            </div>
        </div>
    </div>
}
