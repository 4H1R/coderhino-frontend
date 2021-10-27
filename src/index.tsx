import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";
import Bootstrap from "app/Bootstrap";

const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Bootstrap>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </Bootstrap>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
