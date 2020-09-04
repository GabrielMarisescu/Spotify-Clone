import React from "react";
import "./SongRow.css";
import { useStateValue } from "./StateProvider";

function SongRow({ track }) {
  const [{ device_id }] = useStateValue();
  return (
    <div className="songRow">
      <img
        src={track.album.images[0].url}
        alt="SomeAlt"
        className="songRow_album"
      />
      <div className="songRow__info">
        <h1> {track.name}</h1>
        {device_id ? console.log(device_id) : console.log("TEST123")}
        <p>
          {" "}
          {track.artists.map((artist) => artist.name).join(", ")}{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
