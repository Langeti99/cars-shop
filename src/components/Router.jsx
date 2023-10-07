import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux";

import { Home } from "./screens/Home";
import { Header } from "./header";
import { Game } from "./screens/Game/Game";
import { Order } from "./order/Order";

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Game />} path="/app/:name" />
            <Route element={<Order />} path="/order" />
            <Route element={<p>Page is not defined</p>} path="*" />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
