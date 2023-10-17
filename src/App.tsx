import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from './theme';
import { NavBar } from "./components/NavBar";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar/>
    </ThemeProvider>
  );
}

export default App;
