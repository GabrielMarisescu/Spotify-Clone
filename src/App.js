import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./Player";
import { getTokenFromURL } from "./spotify";
import "./App.css";
import Login from "./Login";

const s = new SpotifyWebApi();

function App() {
  const [{ token, escapetoken }, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromURL();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getMyDevices().then((devices) => {
        dispatch({
          type: "SET_DEVICEID",
          device_id: devices,
        });
      });

      s.getPlaylist("37i9dQZEVXcVBkBAqvHDSs").then((response) =>
        dispatch({ type: "SET_DISCOVER_WEEKLY", discover_weekly: response })
      );
      s.getPlaylist("37i9dQZEVXcVBkBAqvHDSs").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLYimg",
          discover_weeklyimg: response.images[0].url,
        })
      );
      s.getPlaylist("37i9dQZEVXcVBkBAqvHDSs").then((response) =>
        dispatch({
          type: "SET_TRACK",
          tracks: response.tracks.items,
        })
      );

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {token || escapetoken ? <Player spotify={s} /> : <Login />}
    </div>
  );
}

export default App;
