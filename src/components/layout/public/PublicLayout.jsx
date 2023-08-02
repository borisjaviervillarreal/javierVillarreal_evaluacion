import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "@mui/material/Container";

const PublicLayout = () => {
  return (
    <>
      {/* Layout */}

      <Header />
      {/* Principal Content*/}
      <div>
        <Container maxWidth="xl">
          <br></br>
          <Outlet />
        </Container>
      </div>
    </>
  );
};

export default PublicLayout;
