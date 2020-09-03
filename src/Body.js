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
    { discover_weekly, discover_weeklyimg, tracks },
    dispatch,
  ] = useStateValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weeklyimg} alt="PlaceHolder" />
        <div className="body_infoText">
          <strong>Playlist </strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description} </p>
        </div>
      </div>
      <div className="body__songs">
        LIST OF SONGS
        <div className="body__icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {tracks.Map((item) => (
          <SongRow track={item} />
        ))}
      </div>
    </div>
  );
}

export default Body;
