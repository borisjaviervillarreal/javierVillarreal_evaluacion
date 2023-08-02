import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import PublicLayout from "../components/layout/public/PublicLayout";
import Initial from "../components/users/Initial";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Initial />} />
          <Route path="initial" element={<Initial />} />
        </Route>

        <Route
          path="*"
          element={
            <>
              <h1>Error 404</h1>
              <Link to="/">Volver al Inicio</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
