import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./DarkContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
