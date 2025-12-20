import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
      <Footer />
    </Provider>
  );
}
