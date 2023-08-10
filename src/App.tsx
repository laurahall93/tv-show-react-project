import { MainBody } from "./components/MainBody";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <MainBody />
      <Footer />
    </>
  );
}

export default App;
