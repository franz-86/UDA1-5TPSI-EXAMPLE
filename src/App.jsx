import { ThemeProvider, createTheme } from "@mui/material/styles";

import NavBar from "./components/NavBar";
import Prodotti from "./pages/Prodotti";

const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#0097A7",
    },
    secondary: {
      main: "#1DE9B6",
    },
    info: {
      main: "#edf2f4",
    },
  },
};

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <Prodotti />
        <div style={{ height: 100 }}></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
