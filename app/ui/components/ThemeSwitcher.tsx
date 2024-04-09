/**
 * ThemeSwitcher component allows the user to switch between light and dark themes.
 *
 * It uses the useTheme hook from next-themes to get the current theme and set a new theme.
 *
 * There is also useState and useEffect used to handle mounting of the component.
 *
 */

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeIcon from "./ThemeIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
      <Button
        isIconOnly
        size="sm"
        aria-label="themes"
        radius="full"      
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      > <ThemeIcon dark={theme === "dark"}/>
      </Button>
    
  );
}
