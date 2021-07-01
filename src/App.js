import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navigation from "./components/navigation";
import Content from "./components/conten";
import Products from "./components/product";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navigation />
      <div className="container-md">
        <Content />
        <Products />
        <h3 className="text-center my-5">Contact us, by sending a raven</h3>
        <Footer className="my-5" />
      </div>
    </div>
  );
}

export default App;
