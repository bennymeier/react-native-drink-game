import { AppRegistry } from 'react-native';
import App from './App';
import 'react-native-get-random-values';

AppRegistry.registerComponent('main', () => App);
// Works only in web
if (window.document) {
  AppRegistry.runApplication('main', {
    rootTag: document.getElementById('root'),
  });
}
