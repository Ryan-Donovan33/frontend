const initialState = {
    id: localStorage.getItem('user_id'),
    pet_id: localStorage.getItem('pet_id'),
    pet_name: "Loading...",
    health: 10,
    foodEaten: []

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
      return {
        ...state,
        foodEaten: []
      }
      case "DELETE_FOOD":
        return {
          ...state,
          foodEaten: []
        }
    case "GET_FOOD":
      return {
        ...state,
        foodEaten: action.payload
      }
    case "ADD_USER":
      return{
        ...state,
        id: action.payload
      }
    case "SET_PET_INFO":
      return {
        ...state,
        pet_id: action.payload
      }
    case "GET_PET_INFO":
      return {
        ...state,
        pet_name: action.payload.pet_name,
        health: action.payload.health,
        pet_id: action.payload.id

      }
    default:
      return state;
  }
};

export default petReducer;
