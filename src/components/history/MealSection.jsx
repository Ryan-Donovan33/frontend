import React from "react";
import styled from "styled-components";

export default function MealSection({ title, meals, ...props }) {
  const SectionTitle = styled.div`
    font-weight: bold;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: 5px;
  `;
  const MealTitle = styled.div`
    margin: 10px 0;
    cursor: pointer;
    background: #f2f4ff;
    padding: 20px 10px;
    border-radius: 10px;
  `;

  const AddButton = styled.div`
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    font-weight: bold;
    color: #4864e6;
    cursor: pointer;
  `;

  return (
    <div className="meal-section">
      <SectionTitle>{title}</SectionTitle>
      {meals.length ? meals.map(meal => {
        return <MealTitle onClick={()=>{props.history.push(`update/${meal.food_eaten_id}`)}} key={meal.food_eaten_id}>{meal.name}</MealTitle>;
      }) : <MealTitle>No {title} yet!</MealTitle> }
      <AddButton
        onClick={e => {
          e.preventDefault();
          props.history.push("add");
        }}
      >
        Add Food
      </AddButton>
    </div>
  );
}
