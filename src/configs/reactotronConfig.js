import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
// import { reactotronRedux } from 'reactotron-redux';
// import reacotronSaga from 'reactotron-redux-saga';

import AsyncStorage from '@react-native-async-storage/async-storage';

let scriptHostname;

if (__DEV__) {
  const {scriptURL} = NativeModules.SourceCode;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
  console.log('scriptHostname', scriptHostname);

  const tron = Reactotron.configure({host: scriptHostname})
    .useReactNative()
    //.use(reactotronRedux())
    //.use(reacotronSaga())
    .connect();

  console.tron = tron;

  console.tron.onCustomCommand('show_asyncStorage', () => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        stores.map((result, i, store) => {
          console.tron.log({[store[i][0]]: store[i][1]});
          return true;
        });
      });
    });
  });

  tron.clear();
}
