import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./app/routes";
import ErrorBoundary from "./components/system/ErrorBoundary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
        <ErrorBoundary>
            <AppRoutes />
        </ErrorBoundary>
    </HashRouter>
);
