import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
// import PlayListItem from "./components/PlayListItem";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      {/* <PlayListItem /> */}
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
