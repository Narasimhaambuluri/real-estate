import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    currentUser: null,
  },
  reducers: {
    signinStart: (state) => {
      state.loading = true;
    },
    signinSuccess: (state, action) => {
      (state.loading = false), (state.currentUser = action.payload);
    },
    signinFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { signinSuccess, signinFailure, signinStart } = userSlice.actions;

export default userSlice.reducer;
