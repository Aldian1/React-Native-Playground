/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Provider} from 'react-redux'
import configureStore from './Src/configureStore'
import App from './Src/App'

const store = configureStore()

const ReduxApp = () =>(
  <View>
  <Provider store={store}>
    <App/>
    </Provider>
    </View>

)

AppRegistry.registerComponent('BCardScanner', () => ReduxApp);
