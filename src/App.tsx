import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Images from "./components/Images";
import Prices from "./components/Prices";
import Suggestions from "./components/Suggestions";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-5 xl:gap-10">
        <Alert />
        <Images />
        <Prices />
        <Suggestions />
      </main>
      <Footer />
    </>
  );
}

export default App;
