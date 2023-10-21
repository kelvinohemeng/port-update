import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./AppNew.scss";
import "./globals.scss";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
// import Preloader from "./components/Preloader.jsx";
import Fallback from "./components/Fallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<Fallback />}>
      <App />
    </Suspense>
  </BrowserRouter>
);
