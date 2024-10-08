import { useEffect, useState } from "react"
import { Theme } from "../constants/themeConstants"
import { applyTheme, getSavedTheme, getSystemTheme, saveTheme } from "../../utils/themeUtils"

export const useTheme = () => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(
        (getSavedTheme() as Theme) || (getSystemTheme() as Theme)
      );

    useEffect(() => {
        applyTheme(currentTheme)
        saveTheme(currentTheme)
    }, [currentTheme])

    const toggleTheme = () => {
        setCurrentTheme(prevTheme => prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
      };
    
      const setTheme = (newTheme: Theme) => {
        setCurrentTheme(newTheme);
      };

      return { currentTheme, toggleTheme, setTheme };

}