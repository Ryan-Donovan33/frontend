import React, {useState} from "react";
import { connect } from "react-redux";
import {addFood} from '../actions/'
import { Card, FormInput, PrimaryButton, FormSelect, FormSelectOption, SecondaryButton } from "../components/GeneralStyling";
import Navbar from "../components/layout/Navbar";
import TitleBar from "../components/layout/TitleBar";
import {apiCall} from '../utils/apiCall';

function AddEntry(props) {

  const [food, setFood] = useState({})

  const handleChange = e =>{
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    })
    console.log(food)
  }

  const handleSubmit = e =>{
    e.preventDefault();
    if (food.name && food.category_id){

      apiCall().post(`/auth/user/${props.id}/pet/${props.pet_id}/foods/`, {name: food.name, category_id: food.category_id}).then(res=>{
        props.addFood(res.data);
        console.log(food, res.data)
        props.history.goBack()
      })


    } else {
      alert('this is empty you fool')
    }
  }

  return (
    <div className="add-entry">
      <Navbar />
      <div className="add-entry-content container">
      <TitleBar {...props} title="Add Entry" />

        <Card style={{height: 'calc(100vh - 200px)', paddingTop: '50px'}}>
        <form onSubmit={handleSubmit}>
            <FormInput name="name" onChange={handleChange} placeholder="Food Name" type="text"/>
            <FormSelect name="category_id" onChange={handleChange} defaultValue=""  placeholder="Category">
            <FormSelectOption value="" disabled hidden>Category</FormSelectOption>
            <FormSelectOption value="1" >Breakfast</FormSelectOption>
            <FormSelectOption value="2" >Lunch</FormSelectOption>
            <FormSelectOption value="3" >Dinner</FormSelectOption>
            </FormSelect>
            <PrimaryButton>Add Entry</PrimaryButton>
            <SecondaryButton onClick={(e)=>{
              e.preventDefault();
              props.history.goBack()
            }}>Cancel</SecondaryButton>
        </form>
            
        </Card>
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    id: state.id,
    pet_id: state.pet_id
  };
}, {addFood: addFood})(AddEntry);
