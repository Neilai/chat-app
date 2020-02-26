import { SearchBar, NavBar, Icon, Button, Card } from "antd-mobile";
import React, { useRef, useEffect } from "react";
import { User } from "./style";

function Apply(props) {

  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log("onLeftClick")}
      >
        新的朋友
      </NavBar>{" "}
      <User>
        <Card>
          <Card.Header
            title="This is title"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span>this is extra</span>}
          />
          <Card.Body>
            <div>
            <Button type="primary" size="small" inline style={{float:"right",margin:"0 10px"}}>同意</Button>
            <Button type="warning" size="small" inline style={{float:"right"}}>拒绝</Button>
            </div>
          </Card.Body>
        </Card>
      </User>
    </div>
  );
}
export default React.memo(Apply);
