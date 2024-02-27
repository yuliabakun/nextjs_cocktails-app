import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  authToken: string | null,
  userName: string | null,
};

const initialState: UserState = {
  authToken: null,
  userName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserToken(state, action) {
      state.authToken = action.payload;
    },
  },
});

export const { setUserToken } = userSlice.actions;

export default userSlice.reducer;
