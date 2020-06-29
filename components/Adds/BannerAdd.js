import React from 'react';
import { View, FlatList, Button, Platform, StyleSheet } from 'react-native';

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';

import Adds from "../../constants/Adds";
import Colors from "../../constants/Colors";
const BannerAdd = props => {
    return <View>
        <AdMobBanner
            bannerSize="smartBannerLandscape"
            adUnitID={Adds.bannerAdId}// Test ID, Replace with your-admob-unit-id
            servePersonalizedAds={true}
        />
    </View>;
};

export default BannerAdd



