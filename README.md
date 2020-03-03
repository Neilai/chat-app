# chat-app

#### 本地使用

```bash
npm i	
npm run dev
```

#### 后端接口

| post |     路径      |         说明         |
| :--: | :-----------: | :------------------: |
| post |    /user/     |         注册         |
| post |  /user/login  |         登录         |
| post | /user/upload  |         上传         |
| get  |   /friends/   | 获取所有朋友聊天记录 |
| get  | /friends/:id  | 获取指定朋友聊天记录 |
| put  | /messages/:id |       标位已读       |
| Put  |    /user/     |       更新信息       |

#### socket接口

|    事件     |       说明        |
| :---------: | :---------------: |
|   Message   |   发送/接受消息   |
|    Apply    | 发送申请/监听申请 |
| deposeApply |     处理申请      |

#### 界面展示

- 登录与注册

  ![](https://github.com/Neilai/chat-app/blob/master/screenshot/1.png)

- 主界面

  ![](https://github.com/Neilai/chat-app/blob/master/screenshot/2.png)

- 添加好友

  ![](https://github.com/Neilai/chat-app/blob/master/screenshot/3.png)

- 个人信息修改

  ![](https://github.com/Neilai/chat-app/blob/master/screenshot/4.png)

- 好友同意

  ![](https://github.com/Neilai/chat-app/blob/master/screenshot/6.png)

- 实时聊天

​      ![](https://github.com/Neilai/chat-app/blob/master/screenshot/5.png)