import React, { useEffect, useState } from "react";
import { Modal, List, Picker, Toast, ImagePicker } from "antd-mobile";
import image from "../../assets/test.jpg";
const Item = List.Item;
const Brief = Item.Brief;
const prompt = Modal.prompt;

const gender = [
  { label: "男", value: "0" },
  { label: "女", value: "1" }
];
// const avatar=[
//   {
//     url:image,
//   }
// ]
function me(props) {
  const [avatar, setAvatar] = useState([
    {
      url: image
    }
  ]);
  return (
    <div>
      <List renderHeader={() => "个人信息"} className="my-list">
        <ImagePicker
          disableDelete
          files={avatar}
          onChange={v => {
            setAvatar([v[v.length - 1]]), console.log(v[-1]);
          }}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={avatar.length < 2}
          accept="image/gif,image/jpeg,image/jpg,image/png"
        />
        <Item
          arrow="horizontal"
          onClick={() =>
            prompt(
              "输入昵称",
              "",
              [
                {
                  text: "关闭",
                  onPress: value => {}
                },
                {
                  text: "确认",
                  onPress: value =>
                    new Promise(resolve => {
                      Toast.info("回传信息", 1);
                      setTimeout(() => {
                        resolve();
                        console.log(`value:${value}`);
                      }, 1000);
                    })
                }
              ],
              "default",
              null,
              ["input your name"]
            )
          }
        >
          修改昵称
          <Brief>sds</Brief>
        </Item>
        <Picker data={gender} cols={1} onChange={v => console.log(v)}>
          <List.Item arrow="horizontal">修改性别</List.Item>
        </Picker>
        <Item>退出登录</Item>
      </List>
    </div>
  );
}

export default React.memo(me);
