import React, { useState } from "react";
import { List, InputItem, NavBar, Icon, Grid } from "antd-mobile";
import { Bottom, Header, Content } from "./style";
import Chatuser from "../../components/chatuser";
import Scroll from "../../components/scroll";
function Chat(props) {
  const [text, setText] = useState("");
  return (
    <div>
      <Header>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log("onLeftClick")}
        >
          聊天人
        </NavBar>
      </Header>
      <Content>
        <Scroll>
          <div>
            <Chatuser direction={"right"} message={"123456"}></Chatuser>
            <Chatuser direction={"right"} message={"123456"}></Chatuser>
            <Chatuser direction={"right"} message={"123456"}></Chatuser>
            <Chatuser direction={"right"} message={"123456"}></Chatuser>
            <Chatuser direction={"right"} message={"123456"}></Chatuser>
            <Chatuser direction={"right"} message={"123456"}></Chatuser>
            <Chatuser direction={"right"} message={"123456"}></Chatuser>
            <Chatuser direction={"right"} message={"123456"}></Chatuser>
            <Chatuser direction={"right"} message={"123456"}></Chatuser>
            <Chatuser direction={"left"} message={"123456"}></Chatuser>
            <Chatuser direction={"left"} message={"123456"}></Chatuser>
            <Chatuser direction={"left"} message={"123456"}></Chatuser>
            <Chatuser direction={"left"} message={"123456"}></Chatuser>
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
              <span onClick={() => this.handleSubmit()}>发送</span>
            </div>
          }
        ></InputItem>
      </Bottom>
    </div>
  );
}

export default React.memo(Chat);
