import React, { useState, useEffect } from "react";
import renderRoutes from "@/routes/renderRoutes";
import { NavLink } from "react-router-dom"; //利用NavLink组件进行路由跳转
import { TabBar } from "antd-mobile";
import { Bottom, Content, Layout } from "./style";
import Scroll from "../../components/scroll";
import {
  getAllMessages,
  getApply,
  listenMessages
} from "@/store/chat.redux.js";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/store/user.redux.js";

function Home(props) {
  const { route } = props;
  const { pathname } = props.location;
  const dispatch = useDispatch();
  const friends = useSelector(state => state.getIn(["chat", "friends"]).toJS());
  const unread= useSelector(state => state.getIn(["chat", "unread"]).toJS());
  useEffect(() => {
    if(!friends.length){
      dispatch(getAllMessages());
      dispatch(getApply());
      dispatch(listenMessages());
      dispatch(getUser());
    }
  }, []);
  return (
    <Layout>
      <Content>
        <Scroll>{renderRoutes(route.routes)}</Scroll>
      </Content>
      <Bottom>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="消息"
            key="messages"
            icon={
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-messages"></use>
              </svg>
            }
            selectedIcon={
              <svg
                className="icon"
                aria-hidden="true"
                style={{ fill: "#5ab6f0" }}
              >
                <use xlinkHref="#icon-messages"></use>
              </svg>
            }
            selected={pathname === "/messages"}
            badge={unread.length&&unread.reduce((acc, val) => acc + val)}
            onPress={() => {
              props.history.push("/messages");
            }}
            data-seed="logId"
          ></TabBar.Item>
          <TabBar.Item
            icon={
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-friends"></use>
              </svg>
            }
            selectedIcon={
              <svg
                className="icon"
                aria-hidden="true"
                style={{ fill: "#5ab6f0" }}
              >
                <use xlinkHref="#icon-friends"></use>
              </svg>
            }
            title="朋友"
            key="friends"
            badge={"1"}
            selected={pathname === "/friends"}
            onPress={() => {
              props.history.push("/friends");
            }}
            data-seed="logId1"
          ></TabBar.Item>
          <TabBar.Item
            icon={
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-me"></use>
              </svg>
            }
            selectedIcon={
              <svg
                className="icon"
                aria-hidden="true"
                style={{ fill: "#5ab6f0" }}
              >
                <use xlinkHref="#icon-me"></use>
              </svg>
            }
            title="我"
            key="me"
            dot
            selected={pathname === "/me"}
            onPress={() => {
              props.history.push("/me");
            }}
          ></TabBar.Item>
        </TabBar>
      </Bottom>
    </Layout>
  );
}

export default React.memo(Home);
