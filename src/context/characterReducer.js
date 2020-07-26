import { GET_CHARACTERS } from "../types/index";

export default (state, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    default:
  }
};
