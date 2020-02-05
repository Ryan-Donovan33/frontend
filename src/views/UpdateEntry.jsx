import React, {useState} from 'react';
import {connect} from 'react-redux';
import { Card, FormInput, PrimaryButton, FormSelect, FormSelectOption, SecondaryButton } from "../components/GeneralStyling";
import TitleBar from "../components/layout/TitleBar";


function UpdateEntry(props){

    const [food, setFood] = useState({});

    const handleChange = e =>{
        setFood({
            ...food,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(food)
    }

    return(
        <div className="update-entry">
            <div className="container">
            <TitleBar {...props} title="Update Entry" />

            <Card>
                <form onSubmit={handleSubmit}>
                    <FormInput onChange={handleChange} placeholder="Food Title" name="title" />
                    <FormSelect onChange={handleChange} name="category" defaultValue="Category">
                        <FormSelectOption value="" disabled hidden>Category</FormSelectOption>
                        <FormSelectOption value="1" >Category 1</FormSelectOption>
                        <FormSelectOption value="2" >Category 2</FormSelectOption>
                        <FormSelectOption value="3" >Category 3</FormSelectOption>
                    </FormSelect>
                    <PrimaryButton type="submit">Update Entry</PrimaryButton>
                    <SecondaryButton onClick={()=>{props.history.goBack()}} type="button">Delete</SecondaryButton>
                </form>
            </Card>
            </div>
        </div>
    )
}


export default connect(state=>{
    return {

    }

},{})(UpdateEntry);