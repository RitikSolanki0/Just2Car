// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface WishlistState {
//   items: any[];
// }

// const initialState: WishlistState = {
//   items: [],
// };

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     toggleWishlist: (state, action: PayloadAction<any>) => {
//       const index = state.items.findIndex(item => item.id === action.payload.id);
//       if (index >= 0) {
//         // अगर पहले से है तो हटा दो
//         state.items.splice(index, 1);
//       } else {
//         // अगर नहीं है तो जोड़ दो
//         state.items.push(action.payload);
//       }
//     },
//   },
// });

// export const { toggleWishlist } = wishlistSlice.actions;
// export default wishlistSlice.reducer;













// src/redux/wishlistSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistState {
  items: any[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<any>) => {
      // ID को सुरक्षित तरीके से चेक करें (String में बदल कर)
      // const index = state.items.findIndex(
      //   (item) => String(item.id) === String(action.payload.id)
      // );
        const itemID = action.payload._id || action.payload.id;
        const index = state.items.findIndex(
        (item) => (item._id || item.id) === itemID
        );

      if (index >= 0) {
        state.items.splice(index, 1);
        console.log("Removed from wishlist:", action.payload.id);
      } else {
        state.items.push(action.payload);
        console.log("Added to wishlist:", action.payload.id);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;