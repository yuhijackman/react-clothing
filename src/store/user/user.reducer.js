const USER_ACTION_TYPES = { SET_CURRENT_USER: "SET_CURRENT_USER" };

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null
};

// Reducerが持つ初期の値は、ContextではuseContextの引数にセットしていた
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
