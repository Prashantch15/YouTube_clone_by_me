import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
//import LeftNav from "./components/LeftNav";
import SearchResult from "./components/SearchResult";
//import LeftNavMenuItem from "./components/LeftNavMenuItem";
//import SearchResultVideoCard from "./components/SearchResultVideoCard";
//import VideoCard from "./components/VideoCard";
//import SuggestionVideoCard from "./components/SuggestionVideoCard";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;