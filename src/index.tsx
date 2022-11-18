import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <h3 style={{ textAlign: "center", marginTop: "20%" }}>Loading...</h3>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);
