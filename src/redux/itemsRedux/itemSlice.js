import { createSlice } from "@reduxjs/toolkit";

export const ItemsReducer = createSlice({
  name: "items",
  initialState: { value: [] },

  reducers: {
    setArchive: (state, action) => {
      state.value = action.payload;
    },
    setItems: (state, action) => {
      state.value = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { setArchive ,setItems} =
ItemsReducer.actions;

export default ItemsReducer.reducer;