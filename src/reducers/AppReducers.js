
import ActionTypes from './../constants/ActionTypes';
const AppReducers = (state = {
  isLoader: false,
  message: ''
}, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_LOADER: {
      return {
        ...state, ...action.payload
      }
      break;
    }
  }
  return state
}

export default AppReducers;
