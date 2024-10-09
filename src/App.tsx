import React from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookmarksPage from "./components/Bookmark";
import Toast from "./components/Toast";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <BrowserRouter>
        <Header />
        <main className="relative">
          <Toast />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
