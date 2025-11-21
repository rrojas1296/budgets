import { create } from "zustand";

export type Theme = "dark" | "light";
export const THEME_KEY = "theme_key_app";

interface ITheme {
  theme?: Theme;
  setTheme: (theme: Theme) => void;
}

export const useTheme = create<ITheme>((set) => ({
  setTheme: (theme) => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);
    return set((state) => ({ ...state, theme }));
  },
}));
