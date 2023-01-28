import {
  SET_SEARCH_HISTORY,
  SET_LOCATIONS,
} from "../actionTypes"


import dummyData from '../../dataset.json'
import { transformAddress } from '../../utils/transformAddress'

export const setSearchHistory = (payload) => {
  return {
    type: SET_SEARCH_HISTORY,
    payload,
  }
}

export const setLocations = (payload) => {
  return {
    type: SET_LOCATIONS,
    payload,
  }
}

export const addSearchHistory = (newSearchHistory) => async (dispatch, getState) => {
  const currentSearchHistory = getState().searchHistory
  const combinedSearchHistory = [...currentSearchHistory, newSearchHistory]
  dispatch(setSearchHistory(combinedSearchHistory)) 
}

export const getLocation = () => async (dispatch, getState) => {
  const locations = transformAddress(dummyData.data)
  dispatch(setLocations(locations))
}

export const getSearchHistory = () => async (dispatch, getState) => {

  dispatch(setSearchHistory(dummyData.data))
}
