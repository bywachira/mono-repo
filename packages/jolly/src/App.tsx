import React, { useEffect } from "react";
import { Button, defaultTheme, darkTheme } from "@roko/components";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [theme, setTheme] = React.useState(defaultTheme);

  const themeStorage: string | null = localStorage.getItem("theme");

  useEffect(() => {
    localStorage.getItem("theme") && localStorage.getItem("theme") === "dark"
      ? setTheme(darkTheme)
      : setTheme(defaultTheme);
  }, [themeStorage]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Button>jslkdfjs</Button>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
