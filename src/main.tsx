import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./assets/css/global.css";
import RouterConfig from "./config/Router";
import AuthProvider from "./context/provider/AuthProvider";

import { Toaster } from "sonner";

import {Provider} from "react-redux"
import store from "./config/store";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <Toaster richColors closeButton position="bottom-right" />
        <RouterConfig />
      </Provider>
    </AuthProvider>
  </StrictMode>,
);