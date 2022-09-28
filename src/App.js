import './App.css';
import { ThemeProvider } from "./context/ThemeContext";
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
function App() {

  return (
    <ThemeProvider>
      <Nav />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
