import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Navbar } from "./common/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className="fixed top-0 w-full">
            <Navbar />
          </div>
          <div className="mt-[50px] mb-[30px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
