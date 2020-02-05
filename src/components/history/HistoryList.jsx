import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import MealSection from './MealSection';


const ListCard = styled.div`
  background: white;
  padding: 10px 20px;
  box-sizing: border-box;
  background: white;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 10px 0;
  height: calc(100vh - 300px);
  overflow-y: scroll;
  scroll-behavior: smooth;

    &::-webkit-scrollbar {
        width: 5px;
        border-radius: 5px;
      }
       
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background: #F2F4FF;
        width: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
        width: 5px;
        background-color: #4BD6F2;
      }
`

function HistoryList(props){
    return (
        <div className="history-list">
            <ListCard>
            <MealSection {...props} title="Breakfast" meals={props.foodEaten.filter(meal=>{return meal.category == 1})}/>
            <MealSection {...props} title="Lunch" meals={props.foodEaten.filter(meal=>{return meal.category == 2})}/>
            <MealSection {...props} title="Dinner" meals={props.foodEaten.filter(meal=>{return meal.category == 3})}/>

            </ListCard>
        </div>
    );
};


export default connect(state=>{
    return{
        foodEaten: state.foodEaten
    }
})(HistoryList);