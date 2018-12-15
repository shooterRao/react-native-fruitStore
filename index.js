/** @format */

import { AppRegistry, YellowBox } from 'react-native';
import App from './src/Root';
import { name as appName } from './app.json';

// 关闭远程调式非独立窗口的⚠️
YellowBox.ignoreWarnings(['Remote debugger']);

AppRegistry.registerComponent(appName, () => App);
