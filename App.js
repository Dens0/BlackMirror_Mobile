import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import productsReducer from './store/reducers/element';
import MirrorNavigator from './navigation/MirrorNavigator';
import BannerAdd from "./components/Adds/BannerAdd";
import FullAdd from "./components/Adds/FullAdd";
import {View} from "react-native";

const rootReducer = combineReducers({
  products: productsReducer,
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'Quicksand': require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-medium': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-bold': require('./assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-light': require('./assets/fonts/Quicksand-Light.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <Provider store={store}>
            <MirrorNavigator
            />
        <FullAdd/>

    </Provider>

  );



}
// return(
//     <AdMobBanner
//         bannerSize="banner"
//         adUnitID="ca-app-pub-8731014179800764/2334467495" // Test ID, Replace with your-admob-unit-id
//         servePersonalizedAds // true or false
//         onDidFailToReceiveAdWithError={this.bannerError} />
//
// );
