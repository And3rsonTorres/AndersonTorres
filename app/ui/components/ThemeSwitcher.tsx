/**
 * A button component that allows the user to switch between light and dark themes.
 *
 * The `ThemeSwitcher` component uses the `useTheme` hook from the `next-themes` library to
 * get the current theme and provide a way to switch between the light and dark themes.
 *
 * The component renders a button with an icon that changes based on the current theme.
 * Clicking the button will toggle the theme between light and dark.
 */

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeIcon from "../../../public/ThemeIcon";

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
      className="text-white hover:text-gray-700 hover:bg-white dark:hover:text-warning"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {" "}
      <ThemeIcon dark={theme === "dark"} />
    </Button>
  );
}
