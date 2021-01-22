/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Router from './src/Router';
// import Todos from './src(Todo)/Todos';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
