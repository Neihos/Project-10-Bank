import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <AppRouter />
      <Footer />
    </Provider>
  );
}
