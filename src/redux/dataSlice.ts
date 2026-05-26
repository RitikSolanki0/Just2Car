import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  brands: any[];
  banners: any[];
  topModels: any[];
  isStaticDataLoaded: boolean; // Isse pata chalega ki data aa chuka hai
}

const initialState: DataState = {
  brands: [],
  banners: [],
  topModels: [],
  isStaticDataLoaded: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setStaticData: (state, action: PayloadAction<{ brands: any[], banners: any[], topModels: any[] }>) => {
      state.brands = action.payload.brands;
      state.banners = action.payload.banners;
      state.topModels = action.payload.topModels;
      state.isStaticDataLoaded = true; // Data lock ho gaya
    },
  },
});

export const { setStaticData } = dataSlice.actions;
export default dataSlice.reducer;