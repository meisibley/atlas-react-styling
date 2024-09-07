import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";

export default function CurrentlyPlaying() {
  return <div>
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControl />
    </div>
}
