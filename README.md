# chat-app

#### 后端接口

| post |  /user/login  |         说明         |
| :--: | :-----------: | :------------------: |
| post |    /user/     |         注册         |
| post |  /user/login  |         登录         |
| post | /user/upload  |         上传         |
| get  |   /friends/   | 获取所有朋友聊天记录 |
| get  | /friends/:id  | 获取指定朋友聊天记录 |
| put  | /messages/:id |       标位已读       |

#### socket接口

|    事件     |       说明        |
| :---------: | :---------------: |
|   Message   |   发送/接受消息   |
|    Apply    | 发送申请/监听申请 |
| deposeApply |     处理申请      |

