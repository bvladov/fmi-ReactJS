import { GET_THREADS } from "../actions/types";

const initialState = {
  threads: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_THREADS:
      return {
        ...state,
        threads: action.payload
      };
    default:
      return state;
  }
}
