import React from 'react'

const favouriteReducer = (state, action) => {
    switch(action.type){
        case "TOGGLE_HEART":
            if(state.includes(action.payload)){
                return state.filter((id)=>id!==action.payload);
            }else {
                return [...state, action.payload];
            }
            default:
                return state;
    }
 
};

export default favouriteReducer
