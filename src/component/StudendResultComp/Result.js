import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchResult from "../../pages/SearchResult/SearchResult";
import SearchWithEmail from "../../pages/SearchWithEmail/SearchWithEmail";

const Result = () => {
  return (
    <div>
      <SearchWithEmail />
      {/* <SearchResult /> */}
    </div>
  );
};

export default Result;
