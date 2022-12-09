// import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "tss-react/mui";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
    color: "gold",
  },
});

const Header = () => {
  const useStyles = makeStyles()((theme) => ({
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));
  const { classes } = useStyles();

  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();

  // console.log(currency);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              className={classes.title}
              variant="h6"
            >
              Crypto Bull
            </Typography>
            <Select
              variant="outlined"
              // className={classes.title}
              style={{
                background: "gold",
                // width: 100,
                height: 40,
                marginLeft: 15,
                color: "gold",
              }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
