import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./style";

const Btn = (props) => {
    return (
        <TouchableOpacity style={props.style === undefined ? styles.btn : props.style} onPress={props.onPress}>
            <Text style={props.styles === undefined ? styles.btnText : props.styles}>{props.title}</Text>
        </TouchableOpacity>
    )
};

export default Btn