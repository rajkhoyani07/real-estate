import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-4l41kp24sz3kzk2r.us.auth0.com"
     clientId="cM97O0K8Dt3TUeMRxwfXfn3cRMHM8zYc"
     authorizationParams={{
      redirect_uri: "https://full-stack-real-estate-rosy.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
