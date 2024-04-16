

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeIcon from "../../../public/ThemeIcon";
/**
 * A React component that provides a button to switch between light and dark themes.
 *
 * This component uses the `useTheme` hook from the `next-themes` library to access the current theme and toggle between light and dark modes.
 *
 * The component renders a button with an icon that changes based on the current theme. Clicking the button will switch the theme.
 */

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
