
import { LS_THEME_KEY, Theme } from '../model/constants/themeConstants';
import { Themes } from '../model/types/themeProvider';

export const applyTheme = (theme: Themes): void => {
  const root = document.documentElement;

  root.classList.remove(Theme.DARK, Theme.LIGHT);
  root.classList.add(theme);
};


export const getSavedTheme = (): Themes | null => {
    const storedTheme = localStorage.getItem(LS_THEME_KEY)
    return storedTheme as Themes | null
};

export const saveTheme = (theme: Theme): void => {
  localStorage.setItem(LS_THEME_KEY, theme);
};
  

export const getSystemTheme = (): Theme => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? Theme.DARK : Theme.LIGHT;
};