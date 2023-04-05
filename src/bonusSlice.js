import { createSlice } from "@reduxjs/toolkit";

const bonusSlice = createSlice({
  name: "bonus",
  initialState : {
    bonus :1
  },
  reducers: {
    incrementBonus: (state) => {
      state.bonus += 1;
    },
  },
});

export default bonusSlice.reducer;
export const { incrementBonus } = bonusSlice.actions;
