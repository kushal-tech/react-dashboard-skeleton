import ActionTypes from 'constants/ActionTypes';

const AppActions = {
  addLoader(isLoader, message) {
    return {
      type: ActionTypes.SHOW_LOADER,
      isLoader,message,
    }
  },
};

export default AppActions;
