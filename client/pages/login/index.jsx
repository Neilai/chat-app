import React, { useEffect, useState } from "react";
import { List, InputItem, WhiteSpace, Button } from "antd-mobile";
import { createForm } from "rc-form";
import { Container, Logo } from "./style";
import LogoSrc from "./logo.png";
import { LoginRequest } from "@/api/request.js";
import { withRouter, Redirect } from "react-router";
import {useDispatch} from "react-redux"
import {setAuth} from "@/store/user.redux.js"

function Login(props) {
  const [form, setForm] = useState({ username: "", password: "" });
  const { history } = props;
  const submit = () => {
    LoginRequest(form)
      .then(res => {
        window.localStorage.setItem("token", res.token);
        window.location.reload()
        // history.push("/messages");
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {})
  if (localStorage.token) {
    return <Redirect to={{ pathname: "/messages" }} />;
  }
  return (
    <div>
      <Logo src={LogoSrc}></Logo>
      <Container>
        <InputItem
          clear
          placeholder="username"
          value={form.username}
          onChange={v => setForm({ ...form, username: v })}
        >
          用户名
        </InputItem>
        <InputItem
          clear
          placeholder="password"
          onChange={v => setForm({ ...form, password: v })}
          type="password"
        >
          密码
        </InputItem>
        <p>注册账号</p>
        <Button type="primary" onClick={submit}>
          登录
        </Button>
      </Container>
    </div>
  );
}

export default React.memo(Login);
