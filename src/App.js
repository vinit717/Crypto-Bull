import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./Components/Header";
import Alerts from "./Components/Alert";

const useStyles = makeStyles(() => ({
  App: {
    // backgroundColor: "#14161a",
    background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} exact />
        </Routes>
      </div>
      <Alerts />
    </BrowserRouter>
  );
}

export default App;
