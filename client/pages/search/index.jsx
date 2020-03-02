import { SearchBar, NavBar, Icon, Button, Card } from "antd-mobile";
import React, { useState, useRef, useEffect } from "react";
import { User } from "./style";
import { searchRequest } from "@/api/request";
import { useDispatch, useSelector } from "react-redux";
import { sendApply } from "@/store/chat.redux.js";

function Search(props) {
  const searchBar = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    searchBar.current.focus();
  });
  const [people, setpeople] = useState(null);
  const user = useSelector(state => state.getIn(["user", "user"]));
  const doSearch = v => {
    searchRequest(v).then(res => {
      setpeople(res, v);
    });
  };
  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log("onLeftClick")}
      >
        新的朋友
      </NavBar>{" "}
      <SearchBar placeholder="添加好友" ref={searchBar} onSubmit={doSearch} />
      {people ? (
        <User>
          <Card>
            <Card.Header
              title={people.username}
              thumb={people.avatar}
              thumbStyle={{ width: "60px", height: "60px" }}
              extra={people.gender}
            />
            <Card.Body>
              <div>
                <Button
                  type="primary"
                  size="small"
                  inline
                  style={{ float: "right", margin: "0 10px" }}
                  onClick={() => {
                    console.log(user, people);
                    dispatch(
                      sendApply({
                        from: user,
                        to: people,
                        status: "sending"
                      })
                    );
                    setpeople("")
                  }}
                >
                  发送好友请求
                </Button>
              </div>
            </Card.Body>
          </Card>
        </User>
      ) : null}
    </div>
  );
}
export default React.memo(Search);
