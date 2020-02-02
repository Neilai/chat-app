import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../pages/home";
import Friends from "../pages/friends";
import Login from "../pages/login";
import Messages from "../pages/messages";
import Me from "../pages/me";
export default [
  { path: "/login", component: Login },
  {
    path: "/",
    component: Home,
    routes: [
    //   {
    //     path: "/",
    //     exact: true,
    //     render: () => <Redirect to={"/login"} />
    //   },
      {
        path: "/friends",
        requiresAuth: true,
        component: Friends
      },
      {
        path: "/me",
        requiresAuth: true,
        component: Me
      },
      {
        path: "/messages",
        requiresAuth: true,
        component: Messages
      }
    ]
  },
];
