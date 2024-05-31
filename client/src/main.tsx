
import './index.css'
import Providers from './Providers'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/index.css";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
