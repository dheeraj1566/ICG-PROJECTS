import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [lyrics, setLyrics] = useState("");

    function searchLyrics() {
      if (artist.trim() === "" || song.trim() === "") {
          setLyrics("Please provide both artist and song name.");
          return;
      }
  
      axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
          .then((res) => {
              setLyrics(res.data.lyrics || "Lyrics not found.");
          })
          .catch((err) => {
              console.error("Error fetching lyrics:", err.response || err.message);
              if (err.response && err.response.status === 404) {
                  setLyrics("Lyrics not found for the given artist and song.");
              } else {
                  setLyrics("Error fetching lyrics. Please try again later.");
              }
          });
  }
  

    return (
        <div className="App">
            <h1>Lyrics Finder 🎵</h1>

            <input
                className="inp"
                type="text"
                placeholder="Artist name"
                onChange={(e) => setArtist(e.target.value)}
            />
            <input
                className="inp"
                type="text"
                placeholder="Song name"
                onChange={(e) => setSong(e.target.value)}
            />
            <button className="btn" onClick={searchLyrics}>
                🔍 Search
            </button>
            <hr />
            <pre>{lyrics}</pre>
        </div>
    );
}

export default App;
