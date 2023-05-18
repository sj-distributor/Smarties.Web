import { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "@/pages/home";
import { Login } from "@/pages/login";

import { RouteList } from "./route-list";

export const Router = () => {
  const IsLogin = (component: ReactElement) => {
    if (
      localStorage.getItem("AuthToken") === "" ||
      localStorage.getItem("AuthToken") === null
    ) {
      return <Navigate to="/login" replace={true} />;
    } else {
      return component;
    }
  };

  const routes = RouteList.map((item, index) => {
    return (
      <Route path={item.path} element={IsLogin(item.component)} key={index} />
    );
  });

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/accountmanagement" />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Home />}>{routes}</Route>
    </Routes>
  );
};
