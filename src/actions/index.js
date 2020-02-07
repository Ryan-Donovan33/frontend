export const addFood = (data) =>{
    return {
        type: "ADD_FOOD",
        payload: data
    }
}
export const updateFood = (data) =>{
    return {
        type: "UPDATE_FOOD",
        payload: data
    }
}
export const deleteFood = (data) =>{
    return {
        type: "DELETE_FOOD",
        payload: data
    }
}
export const getByFood = (data) =>{
    return {
        type: "GET_FOOD_BY_DATE",
        payload: data
    }
}
export const addUser = (data) =>{
    return {
        type: "ADD_USER",
        payload: data
    }
}