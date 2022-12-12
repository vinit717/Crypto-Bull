import React, { Suspense, lazy } from "react";
import { makeStyles } from "@material-ui/core";
// import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CoinPage from "./Pages/CoinPage";
import Header from "./Components/Header";
import Alerts from "./Components/Alert";

const CoinPage = lazy(() => import("./Pages/CoinPage"));
const Homepage = lazy(() => import("./Pages/HomePage"));

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/coins/:id" element={<CoinPage />} exact />
          </Routes>
        </Suspense>
      </div>
      <Alerts />
    </BrowserRouter>
  );
}

export default App;
