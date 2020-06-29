import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from "../../constants/Colors";

const LogoutButton = props => {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.primary,
		paddingVertical: 12,
		paddingHorizontal: 30,
		justifyContent:'center',
		alignItems:'center',

	},
	buttonText: {
		color: Colors.light,
		fontFamily: 'Quicksand-medium',
		fontSize: 18,

	}
});

export default LogoutButton;