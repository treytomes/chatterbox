import { createSlice } from '@reduxjs/toolkit';
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UAParser } from 'ua-parser-js';

// Define the type for the platform's state
interface PlatformState extends UAParser.IResult {}

// Initial state for the platform (you can modify this as needed)
const initialState: PlatformState = UAParser(navigator.userAgent);

const platformSlice = createSlice({
  name: 'platform',
  initialState,
  reducers: {
  //   setPlatform: (state: PlatformState, action: PayloadAction<PlatformState>) => {
  //     state.name = action.payload.name;
  //     state.version = action.payload.version;
  //     state.isMobile = action.payload.isMobile;
  //   },
  //   resetPlatform: () => initialState,
  },
});

// // Export the actions for use in components
// export const { setPlatform, resetPlatform } = platformSlice.actions;

// Export the reducer for configuration in the store
export default platformSlice.reducer;
