import Hello from "./Hello";
import "./App.css";
import SearchBox from "./SearchBox";
import Header from "./Header";
import { ThemeProvider } from "./ThemeProvider";

function App() {
  const who = {
    name: "Test",
    friend: "John",
  };

  type RenderMessage = (message?: string) => React.ReactNode;

  const renderMessage: RenderMessage = (message?: string) => (
    <p>Render Message: {message}</p>
  );

  const onSearch = (criteria: string) => console.log("criteria => ", criteria);

  return (
    <ThemeProvider>
      <div className="App">
        <Hello who={who} renderMessage={renderMessage} message="I'm, fine." />
        <SearchBox onSearch={onSearch} />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
