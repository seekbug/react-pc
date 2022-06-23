//所有模块做统一处理
import React from "react";
import LoginStrore from "./login.Store";
import UserStore from "./user.Store";
import ChannelStore from "./channel.Store";

class RootStore {
  constructor() {
    this.loginStore = new LoginStrore();
    this.userStore = new UserStore();
    this.channelStore = new ChannelStore();
  }
}

const rootStore = new RootStore();
const context = React.createContext(rootStore);

const useStore = () => React.useContext(context);

export { useStore };
