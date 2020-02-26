import { SearchBar, NavBar, Icon, Button, Card } from "antd-mobile";
import React, { useRef, useEffect } from "react";
import { User } from "./style";

function Search(props) {
  const searchBar = useRef(null);
  useEffect(() => {
    searchBar.current.focus();
  });
  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log("onLeftClick")}
      >
        新的朋友
      </NavBar>{" "}
      <SearchBar placeholder="添加好友" ref={searchBar} />
      <User>
        <Card>
          <Card.Header
            title="This is title"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span>this is extra</span>}
          />
          <Card.Body>
            <div>
            <Button type="primary" size="small" inline style={{float:"right",margin:"0 10px"}}>发送请求</Button>
            </div>
          </Card.Body>
        </Card>
      </User>
    </div>
  );
}
export default React.memo(Search);
