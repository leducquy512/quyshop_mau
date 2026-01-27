import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './welcome';

function App() {
  return (
    <>
    <div className="background">
      <div className="name">
        <Welcome name="Tấn Phát" />
      </div>

      <div>
        <h2>Sở thích: Nghe nhạc, Anime/Manga</h2>
        <h2>Lớp: 26.SP.IT3</h2>
      </div>
      </div>
    </>
  );
}

export default App;