import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../config";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map((route, idx) => (
        <Route path={route.path} Component={route.component} key={idx} />
      ))}
    </Routes>
  );
};

export default AppRouter;
