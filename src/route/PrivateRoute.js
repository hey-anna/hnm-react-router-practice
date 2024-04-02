import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// 리다이렉트 - 경로를 튕겨주세요
// const PrivateRoute = ({ authenticate }) => {
const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
