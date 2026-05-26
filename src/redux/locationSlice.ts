import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export const locationSlice = createSlice({
  name: 'location',
  initialState: { currentCity: 'All India' },
  reducers: {
    setGlobalCity: (state, action: PayloadAction<string>) => { state.currentCity = action.payload; },
  },
});
export const { setGlobalCity } = locationSlice.actions;
export default locationSlice.reducer;