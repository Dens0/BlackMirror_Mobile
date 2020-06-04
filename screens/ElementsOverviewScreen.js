import React from 'react';
import {View, FlatList, Button, Platform, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';
import ElementItem from '../components/shop/ElementItem';
import Colors from '../constants/Colors';

const ElementsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);


    return (
        <View style={styles.screen}>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <ElementItem
                        title={itemData.item.title}
                        image={itemData.item.imageUrl}


                    >
                        <Button
                            color={Colors.secondary}
                            title="KONFIGURACJA"

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

    }
});
export default ElementsOverviewScreen;
