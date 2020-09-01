import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();
function App() {
  const [token, SetToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      SetToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => console.log("hello", user));
    }
  }, []);
  return <div className="App">{token ? <Player /> : <Login />} </div>;
}

export default App;
