import Header from "./components/common/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepages from "./components/home/Homepages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>{<Route path="/" element={<Homepages />} />}</Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
