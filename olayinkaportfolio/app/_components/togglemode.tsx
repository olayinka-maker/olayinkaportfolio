"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="frijole-text text-2xl focus:outline-none focus:ring-0"
      variant="ghost"
      size="icon">
      {isDark ? (
        <Sun className="cursor-pointer" size={50} />
      ) : (
        <Moon className="cursor-pointer" size={50} />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
