import "./index.css";

import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <ConfigProvider
        locale={zhCN}
        theme={{ token: { colorPrimary: "#2082fd" } }}
      >
        <App />
      </ConfigProvider>
    </React.StrictMode>
  );
}
