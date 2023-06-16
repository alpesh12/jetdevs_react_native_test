/**
 * @format
 */
import { Provider } from 'react-redux';
import { store } from './src/rdx/reducers/store';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { ApiClient } from './src/utils/api/api';

// AppRegistry.registerComponent(appName, () => App);

const ReactApp = () => {
  ApiClient.setDispatch(store.dispatch);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => ReactApp);
