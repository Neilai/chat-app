import { SearchBar, NavBar, Icon, Button, Card } from "antd-mobile";
import React, { useRef, useEffect } from "react";
import { User } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { deposeApply } from "@/store/chat.redux.js"

function Apply(props) {
  const apply = useSelector(state => state.getIn(["chat", "apply"]).toJS());
  const dispatch=useDispatch()
  console.log("apply", apply);
  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => props.history.go(-1)}
      >
        新的朋友
      </NavBar>{" "}
      {apply &&
        apply.map((v,i) => {
          return (
            <User key={v.from._id}>
              <Card>
                <Card.Header
                  title={v.from.username}
                  thumb={v.from.avatar}
                  extra={v.from.gender}
                  thumbStyle={{ width: "60px", height: "60px" }}
                />
                <Card.Body>
                  <div>
                    <Button
                      type="primary"
                      size="small"
                      inline
                      style={{ float: "right", margin: "0 10px" }}
                      onClick={() => {dispatch(deposeApply({...apply[i],status:"accept"},i))}}
                    >
                      同意
                    </Button>
                    <Button
                      type="warning"
                      size="small"
                      inline
                      style={{ float: "right" }}
                    >
                      拒绝
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </User>
          );
        })}
    </div>
  );
}
export default React.memo(Apply);
