import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";
// import PlayListItem from "./PlayListItem";

export default function CurrentlyPlaying({ song }) {
  return (
    <div>
      <CoverArt />
      <SongTitle 
        title={song ? song.title : 'No Song Playing'} 
        artist={song ? song.artist : ''}
      />
      <PlayControls />
      <VolumeControl />
      {/* <PlayListItem 
        title={song ? song.title : 'No Song Item'}
        genre={song ? song.genre : ''}
        duration={song ? song.duration : ''}
      /> */}
    </div>
  );
}
