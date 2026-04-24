"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme?: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  disableTransitionOnChange?: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme, disableTransitionOnChange?: boolean) {
  const resolvedTheme = theme === "system" ? getSystemTheme() : theme;
  const root = document.documentElement;
  let transitionStyle: HTMLStyleElement | null = null;

  if (disableTransitionOnChange) {
    transitionStyle = document.createElement("style");
    transitionStyle.appendChild(
      document.createTextNode("*{transition:none!important}"),
    );
    document.head.appendChild(transitionStyle);
  }

  root.classList.toggle("dark", resolvedTheme === "dark");
  root.style.colorScheme = resolvedTheme;

  if (transitionStyle) {
    window.getComputedStyle(document.body);
    document.head.removeChild(transitionStyle);
  }

  return resolvedTheme;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  disableTransitionOnChange,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      const storedTheme = window.localStorage.getItem(storageKey) as Theme | null;
      const initialTheme =
        storedTheme === "light" ||
        storedTheme === "dark" ||
        storedTheme === "system"
          ? storedTheme
          : defaultTheme;

      setThemeState(initialTheme);
      setResolvedTheme(applyTheme(initialTheme, disableTransitionOnChange));
      setMounted(true);
    });
  }, [defaultTheme, disableTransitionOnChange, storageKey]);

  useEffect(() => {
    if (theme !== "system") {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setResolvedTheme(applyTheme("system", disableTransitionOnChange));
    };

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, [disableTransitionOnChange, theme]);

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      window.localStorage.setItem(storageKey, nextTheme);
      setThemeState(nextTheme);
      setResolvedTheme(applyTheme(nextTheme, disableTransitionOnChange));
    },
    [disableTransitionOnChange, storageKey],
  );

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      mounted,
    }),
    [mounted, resolvedTheme, setTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
