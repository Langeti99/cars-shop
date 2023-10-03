import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Header } from "./header";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<p>Page is not defined</p>} path="*" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
