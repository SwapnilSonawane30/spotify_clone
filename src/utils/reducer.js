import { reducerCases } from "./Constants";

export const initialState = {
  token: null,
  playlists: [],
  userInfo:null,
  selectedPlayListId:"2OLSNVJ7PY7hOJEyj7L4RZ",
  selectedPlayList:null,
  currentlyPlaying:null,
  playerState:false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case reducerCases.SET_USERS:{
        return{
            ...state,
            userInfo:action.userInfo,
        }
    }
    case reducerCases.SET_PLAYLIST:{
        return{
            ...state,
            selectedPlayList:action.selectedPlayList,
        }
    }
    case reducerCases.SET_PLAYING:{
        return{
            ...state,
            currentlyPlaying:action.currentlyPlaying,
        }
    }
    case reducerCases.SET_PLAYER_STATE:{
        return{
            ...state,
            playerState:action.playerState,
        }
    }
    default:
      return state;
  }
};

export default reducer;
