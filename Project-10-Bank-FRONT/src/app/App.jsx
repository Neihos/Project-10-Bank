import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <SignIn />
      <Footer />
    </Provider>
  );
}
