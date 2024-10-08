
import { Button } from "@/shared/ui/Button";

import { useTheme } from "../model/hooks/useTheme";
import { Theme } from "../model/constants/themeConstants";

export const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useTheme();
 
  return (
    <div className="theme-switcher flex gap-2">
      <Button
        onClick={() => setTheme(Theme.LIGHT)}
        disabled={currentTheme === Theme.LIGHT}
      >
        Light Mode
      </Button>
      <Button
        onClick={() => setTheme(Theme.DARK)}
        disabled={currentTheme === Theme.DARK}
      >
        Dark Mode
      </Button>
    </div>
  );
};
