import React, {useState} from "react";
import { connect } from "react-redux";
import {addFood} from '../actions/'
import { Card, FormInput, PrimaryButton, FormSelect, FormSelectOption, SecondaryButton } from "../components/GeneralStyling";
import Navbar from "../components/layout/Navbar";
import TitleBar from "../components/layout/TitleBar";

function AddEntry(props) {

  const [food, setFood] = useState({})

  const handleChange = e =>{
    setFood({
      ...food,
      id: Date.now(),
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault();
    props.addFood(food);
    props.history.goBack()
  }

  return (
    <div className="add-entry">
      <Navbar />
      <div className="add-entry-content container">
      <TitleBar {...props} title="Add Entry" />

        <Card style={{height: 'calc(100vh - 200px)', paddingTop: '50px'}}>
        <form onSubmit={handleSubmit}>
            <FormInput name="title" onChange={handleChange} placeholder="Food Name" type="text"/>
            <FormSelect name="category" onChange={handleChange}  placeholder="Category">
            <FormSelectOption value="" disabled hidden>Category</FormSelectOption>
            <FormSelectOption value="1" >Category 1</FormSelectOption>
            <FormSelectOption value="2" >Category 2</FormSelectOption>
            <FormSelectOption value="3" >Category 3</FormSelectOption>
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
  return {};
}, {addFood: addFood})(AddEntry);
