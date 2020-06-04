import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';
import Colors from "../../constants/Colors";
import Card from '../UI/Card';

const ElementItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.element}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
            </View>

            <View style={styles.actions}>
              {props.children}
            </View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  element: {
    height: 300,
    margin: 20,
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

  },
  image: {
    width: '60%',
    height: '100%',
    resizeMode: 'contain',

    // backgroundColor:Colors.primary

  },
  details: {
    alignItems: 'center',
    height: '17%',
    padding: 10,
    // backgroundColor:Colors.primary,
    // color: '#f5f5f5'
  },
  title: {
    fontFamily: 'Quicksand-bold',
    fontSize: 18,
    marginVertical: 2,
    // color: '#f5f5f5'
  },

  actions: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20,
    backgroundColor:Colors.tertiary,
    color: '#f5f5f5'
  }
});

export default ElementItem;
