import { ThemeProvider } from "styled-components";
import './styles/fonts.css';
import Header from "./layout/Header";
import SelectLevel from "./components/SelectLevel";
import CardContainer from "./components/CardContainer";
import theme from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Header />
    <SelectLevel />
    <CardContainer />
    </ThemeProvider>
  );
}

export default App;
