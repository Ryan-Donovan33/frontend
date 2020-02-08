import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MealSection from './MealSection';
import {apiCall} from '../../utils/apiCall'
import {getFood} from '../../actions'

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
		background: #f2f4ff;
		width: 5px;
	}

	&::-webkit-scrollbar-thumb {
		width: 5px;
		background-color: #4bd6f2;
	}
`;
function HistoryList(props) {

	useEffect(() => {
		apiCall()
			.get(`/auth/user/${props.id}/pet/${localStorage.getItem('pet_id')}/foods`)
			.then(res=>{
				console.log(res)
				props.getFood(res.data)
			})
			.catch((err) => console.log('error', err));
	}, []);

	return (
		<div className="history-list">
			<ListCard>
					<MealSection
						{...props}
						title="Breakfast"
						meals={props.foodEaten.filter((meal) => {
							return meal.category_id === 1;
						})}
					/>
					<MealSection
						{...props}
						title="Lunch"
						meals={props.foodEaten.filter((meal) => {
							return meal.category_id === 2;
						})}
					/>
					<MealSection
						{...props}
						title="Dinner"
						meals={props.foodEaten.filter((meal) => {
							return meal.category_id === 3;
						})}
					/>

			</ListCard>
		</div>
	);
}

export default connect((state) => {
	return {
		foodEaten: state.foodEaten,
		pet_id: state.pet_id,
		id: state.id,

	};
}, {getFood})(HistoryList);
