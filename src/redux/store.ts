import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';
import myAdsReducer from './myAdsSlice';
import authReducer from './authSlice';
import dataReducer from './dataSlice';
import locationReducer from './locationSlice'

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    myAds: myAdsReducer,
    auth: authReducer,
    data: dataReducer,
    location: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
