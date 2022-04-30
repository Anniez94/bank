import React, {useEffect} from "react";
import {View, Text, BackHandler} from "react-native";

import { Btn } from "@Component/index";
import styles from "./style";

const Success = (props) => {
  
    const goBack = () => props.navigation.navigate("Home");
    
     const handleBackButton = () => {
        if (props.navigation.isFocused()) {
           goBack()
           return true;
        }
     };
  
     useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButton);
        return () => {
           BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        }
     }, []);

    return (
        <View style={styles.sucContainer}>
            <Text style={[styles.accBal, {textAlign: "center"}]}>Transaction Successful</Text>
            <View style={styles.btnCover}>
            <Btn onPress={goBack} title="Done"/>
            </View>
          
        </View>
    )
};

export default Success;