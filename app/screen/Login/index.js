import React from "react";
import { View, SafeAreaView, Image, Text, Animated, Easing } from "react-native";
import { useDispatch, } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';

import style from "./style";
import { Btn } from "@Component/index";
import { loginfunc } from "@Store/Auth";


const Login = () => {
    const spinValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )).start()

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg']
    })
    
    const dispatch = useDispatch();
    const googleLogin = async () => await dispatch(loginfunc())

    return (
        <SafeAreaView style={style.body}>
            <View style={style.view}>

                <View style={style.logoContainer}>
                    <Image source={require("@Asset/image/logo.png")} style={style.logo} />
                    <Animated.View style={[{
                        transform: [{ rotate: spin }]
                    }]} >
                        <Icon size={150} name="credit-card" color="#6f42c1" style={style.mainImg}/>
                    </Animated.View>
                    <Animated.View style={[{
                        transform: [{ rotate: spin }]
                    }, style.imgLeft]} >
                        <Icon size={150} name="credit-card" color="#6f42c1" style={style.mainImg}/>
                    </Animated.View>
                </View>

                <View style={style.heading}>
                    <Text style={style.headingText}>Your banking &#38; business in one place</Text>
                    <View>
                        <Text style={style.subheadingText}>One app for managing your banking and business. Quick to sign up and easy to use. Dedicated to helping you succeed.</Text>
                    </View>

                    <View style={style.btnView}>
                        <Btn title="Sign in with Google" onPress={googleLogin}/>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
};

export default Login;