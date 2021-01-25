import React, {useEffect, useCallback, useReducer, useState} from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    Platform,
    TextInput,
    Image, Switch
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useSelector, useDispatch} from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';
import * as elementsActions from '../../store/actions/elements';
import ElementItem from "../../BlackMirror_Mobile/components/elements/ElementItem";
import Colors from "../../constants/Colors";

const EditElementScreen = props => {

    const elementId = props.navigation.getParam('elementId');
    const editedElement = useSelector(state =>
        // state.elements.availableProducts.find(prod => prod.id === prodId)
        state.elements.availableElements.find(prod => prod.id === elementId)
    );

    // ZMIANY W ZALEŻNOŚCI OD KOLEJNYCH INPUTÓW KTÓRE BYĘDZIEMY WYSYŁAĆ NA SERWER
    const [title, setTitle] = useState(editedElement ? editedElement.title : '')
    const [active, setActive] = useState(editedElement ? editedElement.active : !editedElement.active)
    const [slug, setSlug] = useState(editedElement ? editedElement.slug : '')
    const [timeZone, setTimeZone] = useState(editedElement ? editedElement.config.data.timezone : '')

    // console.log(typeof (editedElement.active))
    // console.log(editedElement.icon)
    const dispatch = useDispatch();


    const changeActiveHandler = useCallback(() => {
        if (editedElement) {
            dispatch(elementsActions.updateElement(elementId,active,slug))
        }
        console.log("zamieniane")
    }, [dispatch,elementId,active,slug])


    useEffect(() => {
        props.navigation.setParams({'submit': changeActiveHandler});
    }, [changeActiveHandler]);
    return (
        <ScrollView>

            <View style={styles.form}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: editedElement.icon}}/>
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>
                        {editedElement.name}
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={slug}
                        onChange={setSlug}
                    />
                </View>
                <View style={styles.switchContainer}>
                    <Text style={{color: 'white'}}>Włącz/Wyłącz</Text>

                    <Switch
                        trackColor={{true: Colors.primary}}
                        style={styles.switch}
                        thumbColor={Colors.light}
                        value={active}
                        onValueChange={setActive}
                    />
                </View>

                <View style={styles.formControl}>
                    <Text style={styles.label}>
                        Time Zone
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={timeZone}
                        onChange={setTimeZone}
                    />
                </View>

            </View>
        </ScrollView>
    )


};
EditElementScreen.navigationOptions = navData => {
    const submitFn = navData.navigation.getParam('submit');
    return {
        headerTitle: navData.navigation.getParam('elementName'),
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Zapisz"
                iconName={
                    Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
                }
                onPress={submitFn}
            />
        </HeaderButtons>

    };
};
const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    fromControl: {
        width: '100%'
    }, label: {
        fontFamily: 'Quicksand',
        marginVertical: 8,
    }, input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    }


});

export default EditElementScreen;
