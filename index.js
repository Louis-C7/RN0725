/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import TabGHDemo from './demo/TabGHDemo'
// import FlashListDemo1 from './demo/FlashListDemo'
import FlashListDemo2 from './demo/FlashListDemo2'

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => TabGHDemo);
// AppRegistry.registerComponent(appName, () => FlashListDemo1);
AppRegistry.registerComponent(appName, () => FlashListDemo2);
