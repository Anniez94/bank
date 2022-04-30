import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

// Routes
import Home from "@Screen/Home";
import Login from "@Screen/Login";
import Transfer from "@Screen/Transfer";
import TransSuccess from "@Screen/Transfer/Success";

const RootStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();


const RootStackNavigator = () => {
    return (
        <>
            <RootStack.Group>
                <RootStack.Screen name="Home" component={Home} />
            </RootStack.Group>
            <RootStack.Group>
                <RootStack.Screen name="Transfer" component={Transfer} />
                <RootStack.Screen name="TransSuccess" component={TransSuccess} />
            </RootStack.Group>
        </>
    )
};

const LoginStackNavigator = () => {
    return (
        <LoginStack.Group>
            <LoginStack.Screen name="Login" component={Login} />
        </LoginStack.Group>
    )
};

const StackNavigator = () => {
    const { isAuthenticated} = useSelector((state) => state.auth);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {
                isAuthenticated
                    ?
                    RootStackNavigator()
                    :
                    // RootStackNavigator()
                    LoginStackNavigator()
            }      
        </Stack.Navigator>
    )
};


export default StackNavigator;

