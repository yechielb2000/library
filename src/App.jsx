import { CssBaseline } from "@mui/material";
import Header from "../src/components/app/Header";
import Footer from "../src/components/app/Footer";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
