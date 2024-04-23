import { ThemeProvider } from "styled-components";
import './styles/fonts.css';
import Header from "./layout/Header";
import theme from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Header />
    </ThemeProvider>
  );
}

export default App;
