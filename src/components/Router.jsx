import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Header } from "./header";
import { Provider } from "react-redux";
import { store } from "../redux";

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<p>Page is not defined</p>} path="*" />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
