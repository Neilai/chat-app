import React from "react";
import  renderRoutes  from "@/routes/renderRoutes";
import { NavLink } from "react-router-dom"; //利用NavLink组件进行路由跳转
import { useSelector } from "react-redux";
function Home(props) {
  const { route } = props;
  const auth=useSelector(state=>state.get("chat").toJS())
   console.log(auth);
  return (
    <div>
      <NavLink to="/messages" activeClassName="selected">
        <span>消息</span>
      </NavLink>
      <NavLink to="/friends" activeClassName="selected">
        <span>朋友</span>
      </NavLink>
      <NavLink to="/me" activeClassName="selected">
        <span>我</span>
      </NavLink>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default React.memo(Home);
