import SubscriptionPage from "./pages/SubscriptionPage";
import { GlobalProvider } from "./store";
import "./styles/styles.scss";

function App() {
  return (
    <GlobalProvider>
      <SubscriptionPage />
    </GlobalProvider>
  );
}

export default App;
