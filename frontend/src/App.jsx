import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import Showbook from "./pages/ShowBook";
import Editbook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<Showbook />} />
      <Route path="/books/edit/:id" element={<Editbook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
