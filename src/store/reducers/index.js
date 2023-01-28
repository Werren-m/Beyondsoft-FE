import {
  SET_LOCATIONS,
  SET_SEARCH_HISTORY,
} from "../actionTypes"

const initialState = {
  searchHistory: [],
  locations: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: action.payload,
      }
    case SET_LOCATIONS:
      return {
      ...state,
      locations: action.payload,
    }
    default:
      return state
  }
}

export default reducer