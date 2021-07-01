import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import SubscriptionPage from "./pages/SubscriptionPage";
import { GlobalProvider } from "./store";
import "./styles/styles.scss";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#116149",
        contrastText: "#fff",
      },
    },
    overrides: {
      MuiInputBase: {
        input: {
          "&::placeholder": {
            color: "rgb(128, 128, 128)",
            opacity: 1,
          },
        },
      },
    },
  });
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <SubscriptionPage />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
