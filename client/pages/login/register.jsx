import React, { useEffect, useState } from "react";
import { List, InputItem, WhiteSpace, Button, Toast } from "antd-mobile";
import { createForm } from "rc-form";
import { Container, Logo } from "./style";
import LogoSrc from "./logo.png";
import { registerRequest } from "@/api/request.js";
import { withRouter, Redirect } from "react-router";
import { useDispatch } from "react-redux";
import { setAuth } from "@/store/user.redux.js";

function Register(props) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    password2: ""
  });
  const { history } = props;
  const submit = () => {
    if (form.password != form.password2) Toast.info("两次密码输入不一致", 1);
    else
      registerRequest({
        username: form.username,
        password: form.password
      }).then(() => {
        Toast.info("注册成功", 1);
        props.history.push("/login");
      });
  };
  useEffect(() => {});
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
        <InputItem
          clear
          placeholder="password"
          onChange={v => setForm({ ...form, password2: v })}
          type="password"
        >
          确认密码
        </InputItem>
        <p
          onClick={() => {
            props.history.push("/login");
          }}
        >
          去往登录
        </p>
        <Button type="primary" onClick={submit}>
          注册
        </Button>
      </Container>
    </div>
  );
}

export default React.memo(Register);
