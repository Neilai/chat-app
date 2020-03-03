import React, { useEffect, useState } from "react";
import { Modal, List, Picker, Toast, ImagePicker } from "antd-mobile";
import image from "../../assets/test.jpg";
import { useDispatch, useSelector } from "react-redux";
import { updateRequest } from "@/api/request";
import { getUser } from "@/store/user.redux.js";

const Item = List.Item;
const Brief = Item.Brief;
const prompt = Modal.prompt;

const gender = [
  { label: "男", value: "male" },
  { label: "女", value: "female" }
];

function me(props) {
  const user = useSelector(state => state.get("user").toJS().user);
  console.log(user.avatar);
  const [avatar, setAvatar] = useState([
    {
      url: user.avatar
    }
  ]);
  const dispatch = useDispatch();
  return (
    <div>
      <List renderHeader={() => "个人信息"} className="my-list">
        <ImagePicker
          disableDelete
          files={[{ url: user.avatar }]}
          onChange={v => {
            updateRequest({ avatar: v[v.length - 1].url }).then(res => {
              dispatch(getUser());
              Toast.info("修改成功", 1);
            });
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
                      updateRequest({ username: value })
                        .then(res => {
                          dispatch(getUser());
                          Toast.info("修改成功", 1);
                          resolve();
                        })
                        .catch(err => Toast.info("不能重名", 1));
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
          <Brief>{user.username}</Brief>
        </Item>
        <Picker
          data={gender}
          cols={1}
          onChange={v => {
            updateRequest({ gender: v[0] }).then(res => {
              dispatch(getUser());
              Toast.info("修改成功", 1);
            });
          }}
        >
          <List.Item arrow="horizontal">
            修改性别 <Brief>{user.gender}</Brief>
          </List.Item>
        </Picker>
        <Item>退出登录</Item>
      </List>
    </div>
  );
}

export default React.memo(me);
