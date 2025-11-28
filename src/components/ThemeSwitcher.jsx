"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themes } from "@/lib/themes";

export function ThemeSwitcher({ defaultTheme = "cosmic" }) {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  useEffect(() => {
    const root = document.documentElement;
    const theme = themes[currentTheme];

    if (theme) {
      Object.entries(theme.colors).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
      });
      root.style.setProperty("--radius", theme.radius);
    }
  }, [currentTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/5 border-white/10 hover:bg-white/10"
        >
          <Palette className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-black/90 border-white/10 backdrop-blur-xl"
      >
        {Object.entries(themes).map(([key, theme]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => setCurrentTheme(key)}
            className="text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: theme.colors.primary }}
              />
              {theme.name}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
