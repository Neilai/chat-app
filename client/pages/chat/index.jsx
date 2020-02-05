import React, { useState } from "react";
import { List, InputItem, NavBar, Icon, Grid } from "antd-mobile";
import { Bottom } from "./style";
import Chatuser from "../../components/chatuser";

function Chat(props) {
  const [text, setText] = useState("");
  const [showEmoji, setEmoji] = useState(false);
  const emoji = "😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 👍 👎 👊 ✊ 🤘 👌 👈 👉 👆 👇 ✋  🖐 🖖 👋  💪 🖕 ✍️  💅 🖖 💄 💋 👄 👅 👂 👃 👁 👀 "
    .split(" ")
    .filter(v => v)
    .map(v => ({ text: v }));
  return (
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
      <Bottom>
        {showEmoji ? (
          <Grid
            data={emoji}
            columnNum={9}
            carouselMaxRow={4}
            isCarousel={true}
            onClick={el => {
              setText(text + el.text), setEmoji(false);
            }}
          />
        ) : null}
        <InputItem
          placeholder="请输入"
          value={text}
          onChange={v => {
            setText(v);
          }}
          extra={
            <div>
              <span
                style={{ marginRight: 15 }}
                onClick={() => {
                  setEmoji(!showEmoji);
                }}
              >
                😃
              </span>
              <span onClick={() => this.handleSubmit()}>发送</span>
            </div>
          }
        ></InputItem>
      </Bottom>
    </div>
  );
}

export default React.memo(Chat);
