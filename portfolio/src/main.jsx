import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";          // ✅ Tailwind MUST be here
import "./styles/globals.css"; // ✅ Fonts

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
