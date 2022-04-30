import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";


const NavHeader = (props) => {
	return (
		<View>
			<StatusBar barStyle="light-content" backgroundColor={'#343a40'}/>
			<SafeAreaView >
				{props.children}
			</SafeAreaView>
		</View>
	)
};

export default NavHeader