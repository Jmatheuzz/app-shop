
const initialState = {authToken: null, message: null};

  export default (state = initialState, action: {type: string, payload: Object}) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          authToken: action.payload,
        };
      case 'LOGIN_FAILURE':
        return {
          message: action.payload,
        };
      case 'OPEN_APP':
        return {
          ...state,
          authToken: action.payload,
        };
      case 'LOGOUT':
        return {
          authToken: null,
        };
      default:
        return state;
    }
};
