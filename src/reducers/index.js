import { bindActionCreators } from "redux";

const initialState = {
  gigaPet: {
    nickname: "Mr Hat Birb",
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
