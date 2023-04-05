import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { incrementBonus } from "./bonusSlice";
const App = () => {
  const value = useSelector((state) => state.counter.value);
  const bonus = useSelector((state) => state.bonus.bonus);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
      {value}
      <button onClick={() => dispatch(increment())}>increment by 1</button>
      <br />
      <br />
      <button onClick={() => dispatch(incrementByAmount(5))}>
        increment by 5
      </button>

      <button onClick={()=>dispatch(incrementBonus)}>increment bonus</button>
      <p>{bonus}</p>
    </div>
  );
};

export default App;
