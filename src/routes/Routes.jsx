import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import Home from "../pages/(public)/Home/Home";
import PageNotFound from "../pages/PageNotFound";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<PageNotFound />} />
  </RouterRoutes>
);

export default Routes;
