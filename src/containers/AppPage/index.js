import React from "react";
import { Routes, Route } from "react-router-dom";
import AppRoutes from "constants/routes";
import Navbar from "components/Navbar";
import { AppContainer } from "./styles";

export default function App() {
  return (
    <div>
      <Navbar />
      <AppContainer>
        <Routes>
          {AppRoutes.map((route, index) => {
            return (
              <Route path={route.path} key={index} element={route.element} />
            );
          })}
        </Routes>
      </AppContainer>
    </div>
  );
}
