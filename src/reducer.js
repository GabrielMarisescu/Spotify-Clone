export const initialState = {
  user: null,
  playlists: [],
  discover_weekly: [],
  playing: false,
  item: "",
  token: "",
  discover_weeklyimg: "",
  tracks: [],
  device_id: [],
  escapetoken: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };
    case "SET_DISCOVER_WEEKLY":
      return { ...state, discover_weekly: action.discover_weekly };
    case "SET_DISCOVER_WEEKLYimg":
      return { ...state, discover_weeklyimg: action.discover_weeklyimg };
    case "SET_TRACK":
      return { ...state, tracks: action.tracks };
    case "SET_ITEM":
      return { ...state, tracks: action.item };
    case "SET_PLAYING":
      return { ...state, playing: true };
    case "SET_DEVICEID":
      return { ...state, device_id: action.device_id };
    case "SET_ESCAPETOKEN":
      return { ...state, escapetoken: action.escapetoken };

    default:
      return state;
  }
};

export default reducer;
