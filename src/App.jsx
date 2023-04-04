import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice';
const App = () => {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(increment())}>increment by 1</button>
      {value}
      <button onClick={()=>dispatch(decrement())}>Decrement by 1</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>increment by 5</button>
    </div>
  )
}

export default App