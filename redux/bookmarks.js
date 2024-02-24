import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      const existingBookmark = state.find(
        (bookmark) => bookmark.article_id === action.payload.article_id
      );
      if (!existingBookmark) {
        state.push(action.payload);
      }
    },
    removeBookmark: (state, action) => {
      const index = state.findIndex(
        (bookmark) => bookmark.article_id === action.payload
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default bookmarkSlice.reducer;
export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
