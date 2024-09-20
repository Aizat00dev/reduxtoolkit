import { createSlice } from "@reduxjs/toolkit";
  


export const Counter = createSlice({

    name: 'counter',

    initialState:{
        count: 0
    },

    reducers:{
        increment:(state) => {
            state.count += 1
        },

        decrement:(state) => {
            state.count -= 1
        },

        multByAmount:(state, action) =>{
            state.count *= action.payload
        }
    }
})
export const { increment, decrement, multByAmount } = Counter.actions;
export default Counter.reducer;
