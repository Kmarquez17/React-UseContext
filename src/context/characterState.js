import React, { useReducer } from "react";
import axios from "axios";
import characterContext from "./characterContext";
import characterReducer from "./characterReducer";
import { GET_CHARACTERS } from "../types/index";

const CharacterState = (props) => {
  const initialState = {
    characters: [],
  };

  const [state, dispatch] = useReducer(characterReducer, initialState);

  const getCharacters = async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/"
      );

      dispatch({
        type: GET_CHARACTERS,
        payload: response.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <characterContext.Provider
      value={{
        characters: state.characters,
        getCharacters,
      }}
    >
      {props.children}
    </characterContext.Provider>
  );
};

export default CharacterState;
