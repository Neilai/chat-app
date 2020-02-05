import React, { useState } from "react";
import renderRoutes from "@/routes/renderRoutes";
import { NavLink } from "react-router-dom"; //利用NavLink组件进行路由跳转
import { useSelector } from "react-redux";
import { TabBar } from "antd-mobile";
import { Bottom, Content, Layout } from "./style";
import Scroll from "../../components/scroll";

function Home(props) {
  const { route } = props;
  const auth = useSelector(state => state.get("chat").toJS());
  const { pathname } = props.location;

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
            title="Life"
            key="Life"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={pathname === "/messages"}
            badge={1}
            onPress={() => {
              props.history.push("/messages");
            }}
            data-seed="logId"
          ></TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="Koubei"
            key="Koubei"
            badge={"new"}
            selected={pathname === "/friends"}
            onPress={() => {
              props.history.push("/friends");
            }}
            data-seed="logId1"
          ></TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="Friend"
            key="Friend"
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
