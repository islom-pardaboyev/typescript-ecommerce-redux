import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.tsx";
import { MainContext } from "./context/MainContext.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MainContext>
      <Provider store={store}>
        <App />
        <ToastContainer theme="colored"/>
      </Provider>
    </MainContext>
  </BrowserRouter>
);
