const initialState = {
    id: Date.now(),
    nickname: "MrHatBirb",
    health: 10,
    foodEaten: [{id: 1, title: 'Food'}]

};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FOOD":
      console.log(state)
      return {
       ...state,
       health: state.health + 30,
       foodEaten: [action.payload, ...state.foodEaten]
      }
    default:
      return state;
  }
};

export default petReducer;
