import React, { useEffect } from "react";
import { List, Badge } from "antd-mobile";
import { withRouter } from "react-router";
import { useDispatch, useSelector, connect } from "react-redux";
const Item = List.Item;
const Brief = Item.Brief;

function Friends(props) {
  const friends = useSelector(state => state.getIn(["chat", "friends"]).toJS());
  const applies = useSelector(state => state.getIn(["chat", "apply"]).toJS());

  return (
    <div>
      <List
        renderHeader={() => "通讯录"}
        className="my-list"
        onClick={() => {
          console.log("!");
        }}
      >
        <Item extra={"extra content"} onClick={()=>{props.history.push("/search")}}>添加好友</Item>
        <Item
          extra={"extra content"}
          onClick={()=>{props.history.push("/apply")}}
          extra={<Badge text={applies.length} overflowCount={99} />}
        >
          申请消息
        </Item>
      </List>

      <List renderHeader={() => "朋友列表"} className="my-list">
        {friends.map(v => {
          return (
            <Item thumb={v.avatar} multipleLine onClick={() => {}} key={v._id}>
              {v.username}
            </Item>
          );
        })}
      </List>
    </div>
  );
}

export default React.memo(withRouter(Friends));
