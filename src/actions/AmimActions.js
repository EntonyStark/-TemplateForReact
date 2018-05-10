import * as types from "./../constants/ActionTypes";

const {
  SET_ANIMATE,
} = types

export const setAnimate = ( payload ) => {
  return {
    type: SET_ANIMATE,
    payload
  };
};
