import React from 'react';
import {View, FlatList, Button, Platform, StyleSheet} from 'react-native';



import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';

//AD
//ca-app-pub-8731014179800764~6037445767 indentyfikator aplikacji
//ca-app-pub-8731014179800764/4768542227 identyfikator jednoski rreklamowej
//IOS
//ca-app-pub-8731014179800764~9231419466 - indentyfikator aplikacji
//ca-app-pub-8731014179800764/7814681429 - identyfikator jednoski rreklamowej

let bannerAdId = Platform.OS === 'ios =' ? 'ca-app-pub-8731014179800764/7814681429' : 'ca-app-pub-8731014179800764/4768542227';

const FullAdd = props => {


    return <View>
        <PublisherBanner
            bannerSize="smartBannerLandscape"
            adUnitID={bannerAdId}// Test ID, Replace with your-admob-unit-id
            servePersonalizedAds={true}

        />
    </View>;
};



export default FullAdd



