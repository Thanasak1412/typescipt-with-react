import { createContext, useState } from "react";

const defaultTheme = "white";

type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>(defaultTheme);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
