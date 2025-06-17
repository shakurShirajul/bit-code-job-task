import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};
const roadmapSlice = createSlice({
  name: "roadmap",
  initialState,
  reducers: {
    setRoadmap(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setRoadmap } = roadmapSlice.actions;
export default roadmapSlice.reducer;
