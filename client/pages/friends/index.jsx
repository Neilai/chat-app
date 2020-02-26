import React, { useEffect } from "react";
import { List ,Badge} from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;

function friends(props) {
  return (
    <div>
      <List
        renderHeader={() => "通讯录"}
        className="my-list"
        onClick={() => {
          console.log("!");
        }}
      >
        <Item extra={"extra content"} >添加好友</Item>
        <Item extra={"extra content"}  extra={<Badge text={99} overflowCount={55} />}>申请消息</Item>
      </List>

      <List renderHeader={() => "朋友列表"} className="my-list">
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          onClick={() => {}}
        >
          My wallet
        </Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          onClick={() => {}}
        >
          My wallet
        </Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          onClick={() => {}}
        >
          My wallet
        </Item>
      </List>
    </div>
  );
}

export default React.memo(friends);
