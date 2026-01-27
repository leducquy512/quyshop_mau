import './App.css'
import Welcome from './Welcome'; 

function App() {
  return (
    <>
      <div className="txt-name">
        <Welcome name="Tấn Phát" />
      </div>

      <div>
        <h2>Sở thích: Nghe nhạc, Anime/Manga</h2>
        <h2>Lớp: 26.SP.IT3</h2>
      </div>
    </>
  );
}

export default App;