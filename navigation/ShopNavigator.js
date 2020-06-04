import React from 'react';
import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation';
import {Platform} from 'react-native';
import {Ionicons, AntDesign, FontAwesome} from '@expo/vector-icons';
import ElementsOverviewScreen from '../screens/ElementsOverviewScreen';
import AccountScreen from "../screens/AccountScreen";


import TestScreen from '../screens/TestScreen'
import InformationScreen from '../screens/InformationsScreen'
import InstructionsScreen from '../screens/InstructionsScreen'
import DiaryScreen from '../screens/DiaryScreen'
import ContactScreen from '../screens/ContactScreen'


import Colors from '../constants/Colors';

const defaultNavOptions = {
    drawerLabel: 'Elementy',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.secondary : ''
    },
    headerTitleStyle: {
        fontFamily: 'Quicksand-medium'
    },
    headerBackTitleStyle: {
        fontFamily: 'Quicksand'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};


// ELEMENTY
const ElementsNavigator = createStackNavigator(
    {
        ElementsOverView: ElementsOverviewScreen,
    },
    {
        navigationOptions: {
             drawerLabel: 'Elementy',
            drawerIcon: drawerConfig => (
                <FontAwesome
                    name={Platform.OS === 'android' ? 'dashboard' : 'dashboard'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
);
//KONTA ZEWNETRZNE
const AccountNavigator = createStackNavigator(
    {
        Account: AccountScreen,
        // EditProduct: EditProductScreen
    },
    {
        navigationOptions: {
            drawerLabel: 'Konta Zewnętrzne',
            drawerIcon: drawerConfig => (
                <FontAwesome
                    name={Platform.OS === 'android' ? 'user-circle-o' : 'user-circle-o'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
);
//TEST API
const TestNavigator = createStackNavigator(
    {
       Test:TestScreen
    },
    {
        navigationOptions: {
            drawerLabel: 'Test API',
            drawerIcon: drawerConfig => (
                <FontAwesome
                    name={Platform.OS === 'android' ? 'cogs' : 'cogs'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }

);


//INSTRUKCJA
const InstructionNavigator = createStackNavigator(
    {
        Instruction: InstructionsScreen
    },
    {
        navigationOptions: {
            drawerLabel:'Instrukcje',
            drawerIcon: drawerConfig => (
                <FontAwesome
                    name={Platform.OS === 'android' ? 'book' : 'book'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
);


//INFRORMACJE
const InfoNavigator = createStackNavigator(
    {
        Information: InformationScreen
    },
    {
        navigationOptions: {
            drawerLabel: 'Informacje',
            drawerIcon: drawerConfig => (
                <FontAwesome
                    name={Platform.OS === 'android' ? 'info-circle' : 'info-circle'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
);
//Dziennik zmian
const DairyNavigator = createStackNavigator(
    {
        Dairy: DiaryScreen
    },
    {
        navigationOptions: {
            drawerLabel: 'Dziennik zmian',

            drawerIcon: drawerConfig => (
                <FontAwesome
                    name={Platform.OS === 'android' ? 'tasks' : 'tasks'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
);
//Kontakt
const ContactNavigator = createStackNavigator(
    {
        Contact: ContactScreen
    },
    {
        navigationOptions: {
            drawerLabel: 'Kontakt',

            drawerIcon: drawerConfig => (
                <FontAwesome
                    name={Platform.OS === 'android' ? 'envelope-o' : 'envelope-o'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
    }
);




//GLOWNA NAWIGACJA
const ShopNavigator = createDrawerNavigator(
    {

        Products: ElementsNavigator,
        Account: AccountNavigator,
        TestScreen: TestNavigator,
        Instruction: InstructionNavigator,
        Informations: InfoNavigator,
        Diary: DairyNavigator,
        Contact: ContactNavigator,


    },
    {
        // drawerPosition: "right",
        // backBehavior: "order",
        overlayColor: Colors.secondary,

        lazy: false,
        drawerType:"front" ,
        drawerBackgroundColor: Colors.tertiary,
        contentOptions: {
            activeTintColor: Colors.light,
            activeBackgroundColor: Colors.primary,
            inactiveTintColor: Colors.light,
            labelStyle: {fontFamily: 'Quicksand',}

        }
    }
);

export default createAppContainer(ShopNavigator);
