import { useEffect, type ReactNode } from "react";
import { THEME_KEY, useTheme, type Theme } from "../hooks/useTheme";

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_KEY) as Theme;
    if (!localTheme) {
      localStorage.setItem(THEME_KEY, "dark");
      return setTheme("dark");
    }
    setTheme(localTheme);
  }, []);

  if (!theme) return <div>Loading</div>;
  return <>{children}</>;
};

export default ThemeProvider;
