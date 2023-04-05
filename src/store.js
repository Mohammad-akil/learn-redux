import { configureStore } from "@reduxjs/toolkit"; 
import counterReducer from './counterSlice'
import bonusReducer from './bonusSlice'
const store = configureStore({
    reducer : {
        counter : counterReducer,
        bonus : bonusReducer
    }
});

export default store