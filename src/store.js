import { configureStore, createSlice } from '@reduxjs/toolkit';

let openWindow = createSlice({
  name: 'openWindow',
  initialState: { id: null }, // Change this line to use an object
  reducers: {
    changeWindow(state, action) {
        state.id = action.payload; // createSlice로 상태를 올바르게 변경하는 방법
      },
  },
});

export let { changeWindow } = openWindow.actions;

export default configureStore({
  reducer: {
    openWindow: openWindow.reducer,
  },
});
