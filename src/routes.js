import React from "react";
import {
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
const routes = [
  {
    path: "/",
    exact: true,
    component: <Homepage />,
  },
  {
    path: "/exchanges",
    exact: false,
    component: <Exchanges />,
  },
  {
    path: "/cryptocurrencies",
    exact: false,
    component: <Cryptocurrencies />,
  },
  {
    path: "/crypto/:coinId",
    exact: false,
    component: <CryptoDetails />,
  },
  {
    path: "/news",
    exact: false,
    component: <News />,
  },
];

export default routes;
