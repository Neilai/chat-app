import React, { useEffect } from "react";
import { List } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;

function friends(props) {
  return (
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
  );
}

export default React.memo(friends);
