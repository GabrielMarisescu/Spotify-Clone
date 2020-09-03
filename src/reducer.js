export const initialState = {
  user: null,
  playlists: [],
  discover_weekly: [],
  playing: false,
  item: null,
  token: "",
  discover_weeklyimg: "",
  tracks: [],
};

const reducer = (state, action) => {
  console.log(action);
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

    default:
      return state;
  }
};

export default reducer;
