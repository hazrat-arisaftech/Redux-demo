import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Name {
  name: string;
}

const initialState: Name = {
  name: "",
};

export const counterSlice = createSlice({
  name: "userSlicer",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = action.payload;
    },
    deleteName: (state) => {
      state.name = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeName, deleteName } = counterSlice.actions;

export default counterSlice.reducer;
