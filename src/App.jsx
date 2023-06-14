import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header";
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/Footer/Footer";
import SinglePages from "./components/singlesPages/SinglePages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/singlepage/:id" element={<SinglePages />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
