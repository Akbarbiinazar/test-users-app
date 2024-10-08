
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeMods = 'light' | 'dark' | 'auto';

interface ThemeState {
  theme: ThemeMods;
}

const initialState: ThemeState = {
  theme: 'auto',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMods>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
