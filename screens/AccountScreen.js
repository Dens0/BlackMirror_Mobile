import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import Colors from "../constants/Colors";
import BannerAdd from "../components/Adds/BannerAdd";

const AccountScreen = props => {
    return (
        <>
            <BannerAdd/>
        <View style={styles.screen}>

            <Text>KONTA ZEWNĘTRZNE</Text>
        </View>
    </>
            );
};

AccountScreen.navigationOptions = navData => {
    return {
        headerTitle: 'KONTA ZEWNĘTRZNE',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>

        ),

    };
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary
    }
});

export default AccountScreen;
