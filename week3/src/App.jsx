import { ThemeProvider } from "styled-components";
import './styles/fonts.css';
import Header from "./layout/Header";
import SelectLevel from "./components/SelectLevel";
import theme from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Header />
    <SelectLevel />
    </ThemeProvider>
  );
}

export default App;
