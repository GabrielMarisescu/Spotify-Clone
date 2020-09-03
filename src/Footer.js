import React from "react";
import "./Footer.css";
import PlayCircleOutLineIcon from "@material-ui/icons/PlayCircleOutline";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlayListPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://images-na.ssl-images-amazon.com/images/I/51bTZzlFFmL._AC_.jpg"
          alt="Eminem Not Afraid"
        />
        <div className="footer_songInfo">
          <h4>Not Afraid</h4>
          <p>Eminem</p>
        </div>
      </div>
      ;
      <div className="footer__center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutLineIcon className="footer_icon" fontSize="large" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      ;
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid>
            <PlayListPlayIcon />
          </Grid>

          <Grid item>
            <VolumeDownIcon />
          </Grid>

          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
      ;
    </div>
  );
}

export default Footer;
