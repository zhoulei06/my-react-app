/*
 * @Author: your name
 * @Date: 2021-09-05 11:25:40
 * @LastEditTime: 2021-09-05 11:26:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-react-app\src\stores\index.js
 */
import React from 'react';

const context = {};

const req = require.context('.', true, /Store$/);
req.keys().forEach((key) => {
  const name = key.match(/([a-zA-Z0-9].*)$/)[1];
  const Store = req(key).default;
  context[name] = new Store();
});

export const storesContext = React.createContext(context);

export function appStores() {
  return React.useContext(storesContext);
}
