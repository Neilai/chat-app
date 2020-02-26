import React, { useEffect } from "react";
import { List, InputItem, WhiteSpace, Button } from "antd-mobile";
import { createForm } from "rc-form";
import { Container, Logo } from "./style";
import LogoSrc from "./logo.png";
function login(props) {
  return (
    <div>
      <Logo src={LogoSrc}></Logo>
      <Container>
        <InputItem
          clear
          placeholder="auto focus"
          // ref={el => (this.autoFocusInst = el)}
        >
          用户名
        </InputItem>
        <InputItem
          clear
          placeholder="click the button below to focus"
          // ref={el => (this.inputRef = el)}
        >
          密码
        </InputItem>
        <p>注册账号</p>
        <Button type="primary">登录</Button>
      </Container>
    </div>
  );
}

export default React.memo(login);
