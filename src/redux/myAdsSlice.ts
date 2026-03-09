import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MyAdItem {
  id: string;
  title: string;
  price: string;
  image: any;
  status: 'waiting_inspection' | 'waiting_confirmation' | 'scheduled' | 'approved' | 'rejected';
  inspectionDetails?: { date: string; time: string };
}

const initialState: { ads: MyAdItem[] } = {
  ads: [],
};

const myAdsSlice = createSlice({
  name: 'myAds',
  initialState,
  reducers: {
    addAd: (state, action: PayloadAction<MyAdItem>) => {
      state.ads.unshift(action.payload); // नई कार सबसे ऊपर आएगी
    },
    updateAdStatus: (state, action: PayloadAction<{ id: string; status: any }>) => {
    //   const ad = state.ads.find(a => a.id === action.id);
    const ad = state.ads.find(a => a.id === action.payload.id);
      if (ad) ad.status = action.payload.status;
    }
  },
});

export const { addAd, updateAdStatus } = myAdsSlice.actions;
export default myAdsSlice.reducer;