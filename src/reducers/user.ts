import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  id: number;
  name: string;
  email: string;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  id: 0,
  name: "",
  email: "",
  loading: false,
  error: null,
};

interface GetUserSuccessAction {
  id: number;
  name: string;
  email: string;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess(state, action: PayloadAction<GetUserSuccessAction>) {
      state.loading = false;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    getUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getUserStart, getUserSuccess, getUserFailure } =
  userSlice.actions;

export default userSlice.reducer;
