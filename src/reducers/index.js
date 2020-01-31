import { bindActionCreators } from "redux";

const initialState = {
  gigaPet: {
    nickname: "MrHatBirb",
    health: 100
  }
};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default petReducer;
