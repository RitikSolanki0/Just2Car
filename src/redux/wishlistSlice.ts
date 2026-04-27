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
//       // ID को सुरक्षित तरीके से चेक करें (String में बदल कर)
//       // const index = state.items.findIndex(
//       //   (item) => String(item.id) === String(action.payload.id)
//       // );
//         const itemID = action.payload._id || action.payload.id;
//         const index = state.items.findIndex(
//         (item) => (item._id || item.id) === itemID
//         );

//       if (index >= 0) {
//         state.items.splice(index, 1);
//         console.log("Removed from wishlist:", action.payload.id);
//       } else {
//         state.items.push(action.payload);
//         console.log("Added to wishlist:", action.payload.id);
//       }
//     },
//   },
// });

// export const { toggleWishlist } = wishlistSlice.actions;
// export default wishlistSlice.reducer;



















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
//     // --- 1. पूरे एरे को एक साथ सेट करने के लिए (API से डेटा आने पर) ---
//     setWishlist: (state, action: PayloadAction<any[]>) => {
//       state.items = action.payload;
//     },

//     // --- 2. एक सिंगल आइटम को ऐड या रिमूव करने के लिए (Toggle) ---
//     toggleWishlist: (state, action: PayloadAction<any>) => {
//       // ID को सुरक्षित तरीके से चेक करें (_id या id)
//       const itemID = action.payload._id || action.payload.id;
      
//       const index = state.items.findIndex(
//         (item) => (item._id || item.id) === itemID
//       );

//       if (index >= 0) {
//         // अगर पहले से है तो हटा दो
//         state.items.splice(index, 1);
//         console.log("Removed from wishlist Redux:", itemID);
//       } else {
//         // अगर नहीं है तो जोड़ दो
//         state.items.push(action.payload);
//         console.log("Added to wishlist Redux:", itemID);
//       }
//     },
//   },
// });

// // दोनों को एक्सपोर्ट करें
// export const { toggleWishlist, setWishlist } = wishlistSlice.actions;
// export default wishlistSlice.reducer;






















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
//     // --- 1. फिक्स: एरे को सेट करते समय null वैल्यूज़ को फ़िल्टर करें ---
//     setWishlist: (state, action: PayloadAction<any[]>) => {
//       if (Array.isArray(action.payload)) {
//         state.items = action.payload.filter(item => item !== null && item !== undefined);
//       }
//     },

//     // --- 2. फिक्स: टॉगल लॉजिक में सेफ्टी चेक ---
//     toggleWishlist: (state, action: PayloadAction<any>) => {
//   const incomingId = action.payload.carId || action.payload._id || action.payload.id;

//   const index = state.items.findIndex((item) => {
//     const existingId = item.carId || item._id || item.id;
//     return String(existingId) === String(incomingId);
//   });

//   if (index >= 0) {
//     state.items.splice(index, 1);
//   } else {
//     state.items.push(action.payload);
//   }
// },
//   },
// });

// export const { toggleWishlist, setWishlist } = wishlistSlice.actions;
// export default wishlistSlice.reducer;















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
    // पूरे एरे को सेट करने के लिए (API Sync के लिए)
    setWishlist: (state, action: PayloadAction<any[]>) => {
      if (Array.isArray(action.payload)) {
        state.items = action.payload.filter(item => item !== null);
      }
    },

    toggleWishlist: (state, action: PayloadAction<any>) => {
      const incomingId = action.payload.carId || action.payload._id || action.payload.id;

      const index = state.items.findIndex((item) => {
        const existingId = item.carId || item._id || item.id;
        return String(existingId) === String(incomingId);
      });

      if (index >= 0) {
        state.items.splice(index, 1);
        console.log("Removed from Redux:", incomingId);
      } else {
        state.items.push(action.payload);
        console.log("Added to Redux:", incomingId);
      }
    },
  },
});

export const { toggleWishlist, setWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;