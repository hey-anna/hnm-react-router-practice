import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";

// 리다이렉트 - 경로를 튕겨주세요
const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? (
    <ProductDetail />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
