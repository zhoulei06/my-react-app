import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

export default () => (
  <Result
    status="500"
    title="500"
    subTitle="抱歉，服务器出错了。"
    extra={
      <Link to="/">
        <Button type="primary">返回首页</Button>
      </Link>
    }
  />
);