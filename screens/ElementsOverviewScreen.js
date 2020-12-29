import React, {useEffect,useState} from 'react';
import {View, Text, FlatList, Button, Switch, Platform, StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Activity from "../models/activity";
import HeaderButton from '../components/UI/HeaderButton';
import ElementItem from '../components/elements/ElementItem';
import Colors from '../constants/Colors';
import BannerAdd from "../components/Adds/BannerAdd";
import * as SecureStore from "expo-secure-store";
import * as elementActions from '../store/actions/elements'

//AD
//ca-app-pub-8731014179800764~6037445767 indentyfikator aplikacji
//ca-app-pub-8731014179800764/4768542227 identyfikator jednoski reklamowej
//IOS
//ca-app-pub-8731014179800764~9231419466 - indentyfikator aplikacji
//ca-app-pub-8731014179800764/7814681429 - identyfikator jednoski reklamowej

const ElementsOverviewScreen = props => {
    const elements = useSelector(state => state.elements.availableElements);
    const dispach = useDispatch();
    useEffect(() => {
        dispach(elementActions.fetchElements())
    },[dispach])


    return (
        <View style={styles.screen}>
            {/*<BannerAdd/>*/}
            <FlatList
                style={styles.list}
                data={elements}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <ElementItem
                        title={itemData.item.title}
                        image={itemData.item.imageUrl}
                    >
                        <View style={styles.switchContainer}>
                            <Text styles={styles.swText}>Włącz/Wyłącz</Text>
                            <Switch style={styles.switch}/>
                            {/*<Activity/>*/}
                        </View>
                        <Button
                            color={Platform.OS === 'android' ? Colors.secondary : 'white'}
                            title="KONFIGURACJA" onPress={() => {
                            props.navigation.navigate({routeName: itemData.item.description})
                        }}
                        />
                    </ElementItem>
                )}
            />
        </View>
    );
};

ElementsOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Elementy na lustrze',
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
        backgroundColor: Colors.secondary,
        paddingBottom: 30
    },
    list: {
        height: '100%'
    }, switchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: Colors.tretiary,
    }, switch: {
        marginLeft: 20,
        backgroundColor: 'transparent',
    }, swText: {
        color: Colors.light,
        fontSize: 26,

    }
});

export default ElementsOverviewScreen;
