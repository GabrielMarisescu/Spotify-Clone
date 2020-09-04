import React from "react";
import "./Login.css";
import { LoginUrl } from "./spotify";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{ token }, dispatch] = useStateValue();
  function dispatchthis() {
    dispatch({
      type: "SET_ESCAPETOKEN",
      escapetoken:
        "BQDsGmtriVcj8vGD5uhflt4h4xm383j7ImII9DRa9HKLGRm9-oWXIpqnwz2CTaicrHY9kfBZRQ2n6JzAzirBNiZ4Acp6TOgdYCROGH87-QYVqz3vFZ6W3yyb4mXyU-JWpBNK2AgVEY2G4StwFQfdySIJogY",
    });
  }
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <a href={LoginUrl}> LOGIN WITH SPOTIFY</a>
      <button href={LoginUrl} onClick={() => dispatchthis()}>
        NO LOGIN
      </button>
    </div>
  );
}

export default Login;
