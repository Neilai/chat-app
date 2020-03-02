import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../pages/home";
import Friends from "../pages/friends";
import Login from "../pages/login";
import Messages from "../pages/messages";
import Me from "../pages/me";
import Chat from "../pages/chat";
import Apply from "../pages/apply";
import Search from "../pages/search";
export default [
  { path: "/login", component: Login },
  { path: "/chat", requiresAuth: true, component: Chat },
  { path: "/apply", requiresAuth: true, component: Apply },
  {
    path: "/",
    component: Home,
    requiresAuth: true,
    routes: [
      {
        path: "/",
        exact: true,
        component: Messages
      },
      {
        path: "/friends",
        component: Friends
      },
      {
        path: "/me",
        component: Me
      },
      {
        path: "/messages",
        component: Messages
      },
      {
        path: "/search",
        component: Search
      }
    ]
  }
];
