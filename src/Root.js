import React from 'react';
import { Provider } from 'mobx-react';
import Navigation from './navigation';
// 获取mobx-store实例
import store from './mobx';

export default () => (
  <Provider rootStore={store}>
    <Navigation />
  </Provider>
);
