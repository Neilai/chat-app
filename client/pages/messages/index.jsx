import React, { useEffect } from "react";
import { List, Badge } from "antd-mobile";
import { useSelector,useDispatch} from "react-redux";
import {
  doRead
} from "@/store/chat.redux.js"
const Item = List.Item;
const Brief = Item.Brief;
function Messages(props) {
  const friends = useSelector(state => state.getIn(["chat", "friends"]).toJS());
  const unread = useSelector(state => state.getIn(["chat", "unread"]).toJS());
  const dispatch=useDispatch()
  return (
    <List renderHeader={() => "消息"} className="my-list">
      {friends.sort((a,b)=>b.lastTime-a.lastTime).map((v, i) => {
        return (
          <Item
            thumb={v.avatar}
            multipleLine
            onClick={() => {
              dispatch(doRead(v._id))
              props.history.push({ pathname: "/chat", search: `?id=${v._id}` });
            }}
            key={v._id}
            extra={<Badge text={unread[i]} overflowCount={99} />}
          >
            {v.username} <Brief>{v.messages[0].content}</Brief>
          </Item>
        );
      })}
    </List>
  );
}

export default React.memo(Messages);
