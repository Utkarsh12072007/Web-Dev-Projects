import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmountAsyn } from './store/reducers/CounterSlice';
const App = () => {
  const counterState = useSelector((state)=> state.counter);
   const dispatch = useDispatch()
  return (
    <>
      <div className='max-w-screen-md mx-44 px-2 py-2 bg-red-400 mt-5'>
        <h1 className='flex justify-center item-center py-2 font-semibold text-2xl'>Counter : {counterState.value}</h1>
      </div>
      <div className='flex justify-center items-center mt-5 flex-col gap-5'>
        <button onClick={()=>dispatch(increment())} className='px-2 py-1 font-semibold text-xl bg-green-300'>Increment</button>
        <button  onClick={()=>dispatch(decrement())} className='px-2 py-1 font-semibold text-xl bg-green-300'>Decrement</button>
        <button  onClick={()=>dispatch(incrementByAmountAsyn(5))}className='px-2 py-1 font-semibold text-xl bg-green-300'>Increment by 5</button>
      </div>
    </>
  )
}

export default App