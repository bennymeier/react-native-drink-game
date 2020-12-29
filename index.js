import { AppRegistry } from 'react-native';
import App from './App';
import 'react-native-get-random-values';

AppRegistry.registerComponent('main', () => App);
AppRegistry.runApplication('main', {
  rootTag: document.getElementById('root'),
});
