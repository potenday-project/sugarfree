import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: 0,
    nickname: "",
    imgUrl: "",
    tags: [],
  },

  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.nickname = action.payload.nickname;
      state.imgUrl = action.payload.imgUrl;
      state.tags = action.payload.tags;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
