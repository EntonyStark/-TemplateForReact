import * as types from "./../constants/ActionTypes";

const {
  TOGGLE_LANGUAGE
} = types

export const toggleLang = ( payload ) => {
  return {
    type: TOGGLE_LANGUAGE,
    payload
  };
};

