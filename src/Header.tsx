import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const Header = () => {
  const useTheme = () => useContext(ThemeContext);
  const { theme, setTheme } = useTheme()!;

  return (
    <div style={{ backgroundColor: theme }}>
      <select onChange={(e) => setTheme(e.currentTarget.value)}>
        <option value="skyblue">Skyblue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
      </select>
      Hello
    </div>
  );
};

export default Header;
