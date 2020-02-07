const initialState = {
    id: Date.now(),
    pet_id: 1,
    pet_name: "MrHatBirb",
    health: 10,
    foodEaten: [{id: 1, title: 'Food', category: 1}]

};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FOOD":
      return {
       ...state,
       health: state.health + 30,
       foodEaten: [action.payload, ...state.foodEaten]
      }
    case "UPDATE_FOOD":
      console.log('updated');
      break;
    case "DELETE_FOOD":
      console.log('Deleted');
      break;
    case "GET_FOOD_BY_DATE":
      console.log(`content from ${Date}`)
      break;
    case "ADD_USER":
      return{
        ...state,
        id: action.payload
      }
    default:
      return state;
  }
};

export default petReducer;
