import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Result from "./component/StudendResultComp/Result";
import AddSubsResult from "./pages/AddSubsResult/AddSubsResult";
import Problem from "./pages/ProgramingQ/Problem";
import SearchResult from "./pages/SearchResult/SearchResult";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Result />} />
        <Route path="/addsubsresult" element={<AddSubsResult/>} />
        <Route path="/problem1" element={<maxProfit/>} />
        <Route path="/problem2" element={<Problem />} />
        {/* <Route path="/search-result/:email" element={<SearchResult />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
