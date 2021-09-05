/*
 * @Author: your name
 * @Date: 2021-09-05 11:28:10
 * @LastEditTime: 2021-09-05 11:31:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-react-app\src\stores\globalStore.js
 */
import { observable, action } from "mobx";
// import request from '@/services/request';

export default class GlobalStore {
  @observable appTitle = "my-react-app";

  @observable collapsed = false; // 菜单收起展开

  @observable userInfo = {
    // 当前用户信息
    loginName: "test"
  };

  @action.bound toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  @action.bound setData(data = {}) {
    Object.entries(data).forEach((item) => {
      this[item[0]] = item[1];
    });
  }
}
