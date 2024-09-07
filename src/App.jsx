import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
// import PlayListItem from "./components/PlayListItem";
import PlayList from "./components/Playlist";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <CurrentlyPlaying />
      {/* <PlayListItem /> */}
      <PlayList />
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
