import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
  return (
    <div className="flex flex-col min-h-screen h-full">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
