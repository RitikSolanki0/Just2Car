import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';
import myAdsReducer from './myAdsSlice'
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    myAds: myAdsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
