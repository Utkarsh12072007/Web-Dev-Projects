import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = CounterSlice.actions
export const incrementByAmountAsyn = (amount) =>(dispatch)=>{
  setTimeout(()=>{
    dispatch(incrementByAmount(amount));
  },2000)
}
export default CounterSlice.reducer