import React, { useState } from "react";
import { List, InputItem, NavBar, Icon, Grid } from "antd-mobile";
import { Bottom, Header, Content } from "./style";
import Chatuser from "../../components/chatuser";
import Scroll from "../../components/scroll";
import { useDispatch, useSelector } from "react-redux";
import {} from "react";
import { sendMessage, doRead } from "../../store/chat.redux";
function Chat(props) {
  const [text, setText] = useState("");
  const id = props.history.location.search.substr(1).split("=")[1];
  const user = useSelector(state => state.get("user").toJS().user);
  const friends = useSelector(state =>
    state
      .getIn(["chat", "friends"])
      .toJS()
      .filter(v => v._id == id)
  );
  const dispatch = useDispatch();
  const submit = () => {
    let msg = {
      from: user._id,
      to: id,
      content: text,
      createdAt: new Date(),
      type: "User"
    };
    dispatch(sendMessage(msg));
    setText("");
  };
  return (
    <div>
      <Header>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            props.history.go(-1), dispatch(doRead(id));
          }}
        >
          {friends[0].username}
        </NavBar>
      </Header>
      <Content>
        <Scroll goBottom>
          <div>
            {friends[0].messages.reverse().map(v => {
              return v.to == id ? (
                <Chatuser
                  direction={"right"}
                  message={v.content}
                  key={v.createdAt}
                  image={user.avatar}
                ></Chatuser>
              ) : (
                <Chatuser
                  direction={"left"}
                  message={v.content}
                  key={v.createdAt}
                  image={friends[0].avatar}
                ></Chatuser>
              );
            })}
          </div>
        </Scroll>
      </Content>

      <Bottom>
        <InputItem
          placeholder="请输入"
          value={text}
          onChange={v => {
            setText(v);
          }}
          extra={
            <div>
              <span onClick={() => submit()}>发送</span>
            </div>
          }
        ></InputItem>
      </Bottom>
    </div>
  );
}

export default React.memo(Chat);
