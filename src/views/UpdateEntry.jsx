import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { Card, FormInput, PrimaryButton, FormSelect, FormSelectOption, SecondaryButton } from "../components/GeneralStyling";
import TitleBar from "../components/layout/TitleBar";
import Navbar from "../components/layout/Navbar";
import {apiCall} from '../utils/apiCall'
import {updateFood} from '../actions/index'


function UpdateEntry(props){

    const [food, setFood] = useState({});

    useEffect(()=>{
        apiCall().get(`/auth/user/${props.id}/pet/${props.pet_id}/foods/${props.match.params.id}`)
        .then(res=>{
            console.log(res)
            setFood(res.data);
        }).catch(err=>{
            console.log(err)
        })
    }, [props.id, props.match.params.id, props.pet_id])

    const handleChange = e =>{
        setFood({
            ...food,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault()
        apiCall().put(`/auth/user/${props.id}/pet/${props.pet_id}/foods/${props.match.params.id}`, {food})
        .then(res=>{
            props.updateFood(res.data);
            props.history.goBack();
        }).catch(err=>{
            console.log(err)
        })
    }

    const deleteFood = () =>{
        apiCall().delete(`/auth/user/${props.id}/pet/${props.pet_id}/foods/${props.match.params.id}`)
        .then(res=>{
            props.updateFood(res.data);
            props.history.goBack();
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className="update-entry">
            <Navbar />
            <div className="container">
            <TitleBar {...props} title="Update Entry" />

            <Card style={{height: 'calc(100vh - 200px)', paddingTop: '50px'}}>
                <form onSubmit={handleSubmit}>
                    <FormInput value={food.name} onChange={handleChange} placeholder="Food Title" name="title" />
                    <FormSelect onChange={handleChange} name="category" defaultValue={food.category_id}>
                        <FormSelectOption value="" disabled hidden>Category</FormSelectOption>
                        <FormSelectOption value="1" >Breakfast</FormSelectOption>
                        <FormSelectOption value="2" >Lunch</FormSelectOption>
                        <FormSelectOption value="3" >Dinner</FormSelectOption>
                    </FormSelect>
                    <PrimaryButton type="submit">Update Entry</PrimaryButton>
                    <SecondaryButton onClick={deleteFood} type="button">Delete</SecondaryButton>
                </form>
            </Card>
            </div>
        </div>
    )
}


export default connect(state=>{
    return {
        id: state.id,
        pet_id: state.pet_id
    }

},{updateFood})(UpdateEntry);