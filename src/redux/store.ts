import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';
import myAdsReducer from './myAdsSlice'

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    myAds: myAdsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
