import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform, AsyncStorage, Storage
} from 'react-native';
import Colors from "../../constants/Colors";
import Card from '../UI/Card';

const DiaryItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  const fetchData = () => {
    // ToDo::ogarnąć token w storage a nie async
    // let token = AsyncStorage.getItem('userData').then(res => {
    //   return JSON.parse(res);
    // }).then(data => {
    //   return data.token;
    // });
    // ToDo::poprawnie jest przez headers - z geta trzeba usunąć
    const json = fetch('https://myblackmirror.pl/api/v1/data/changelog', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + token
        'Authorization': 'Bearer test'
      })
    }).then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
    });
  }
  fetchData()
  return (
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <Text>Test</Text>

        </TouchableCmp>
      </View>
  );
};


const styles = StyleSheet.create({
  element: {
    height: 200,
    margin: 20,
    marginHorizontal:40,
    // backgroundColor:Colors.secondary
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor:Colors.primary
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    backgroundColor:Colors.tertiary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    // backgroundColor:Colors.primary

  },
  details: {
    alignItems: 'center',
    height: '17%',
    // padding: 10,

  },
  title: {
    justifyContent: 'center',
    alignItems:'center',

    fontFamily: 'Quicksand-bold',
    fontSize: 18,
    marginVertical: 2,
    color: '#f5f5f5',
  },

  actions: {
    // flexDirection: 'row',
    // paddingTop: 16,
    alignItems: 'center',
    height: '23%',
    // paddingHorizontal: 20,
    backgroundColor:Colors.tertiary,
    color: '#f5f5f5',
    justifyContent: 'center',

    alignContent: 'center',
  }
});

export default DiaryItem;
