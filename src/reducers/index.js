const initialState = {
    id: localStorage.getItem('user_id'),
    pet_id: '',
    pet_name: "Loading...",
    health: 10,
    foodEaten: [{id: 1, name: 'Sample Entry', category_id: "1"}]

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
    case "GET_FOOD":
      console.log(state)
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
