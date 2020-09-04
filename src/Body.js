import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [
    { discover_weekly, discover_weeklyimg, tracks, device_id },
    dispatch,
  ] = useStateValue();

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
        device_id: device_id,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((res) => {
          dispatch({
            type: "SET_ITEM",
            item: res.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:3zd1l900iuTVVJoD92lYE0`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img
          src={
            discover_weeklyimg
              ? discover_weeklyimg
              : "https://image.slidesharecdn.com/copyofspotifydiscoverweekly-170701234254/95/spotify-discover-weekly-the-machine-learning-behind-your-music-recommendations-1-638.jpg?cb=1498952892"
          }
          alt="PlaceHolder"
        />
        <div className="body_infoText">
          <strong>Playlist </strong>
          <h2>Discover Weekly</h2>
          <p>
            {discover_weekly?.description
              ? discover_weekly?.description
              : "Description will go here"}
          </p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body_shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {tracks &&
          tracks.map((item) => (
            <SongRow
              track={item.track}
              playSong={playSong("3zd1l900iuTVVJoD92lYE0")}
            />
          ))}
      </div>
    </div>
  );
}

export default Body;
