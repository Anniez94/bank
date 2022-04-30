import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

import styles from "./style"
import { Header, FormikValidator, InputField, Btn } from "@Component/index";
import commafy from "@Helper/commafy";
import { transferSchema } from "@Helper/schema";
import Bank from "./Bank";


const Transfer = (props) => {

    const details = props.route.params?.item;
    const goBack = () => props.navigation.goBack();

    const transferState = {
        amount: "",
        pin: "",
        bank: "",
        accountNumber: ""
    };
    const dismissKeyboard = () => Keyboard.dismiss();

    const submit = (data) => {
        props.navigation.navigate("TransSuccess")
    };

    return (
        <View style={styles.container}>

            <LinearGradient
                colors={['#343a40', '#6f42c1']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0.2, y: 1.9 }}
                style={styles.backgroundImg}
            >
                <ImageBackground source={require("@Asset/image/wave.png")} style={styles.waveImg}>
                    <Header>
                        <View style={styles.mainHeader}>
                            <TouchableOpacity onPress={goBack}>
                                <Icon name="arrow-left" size={18} style={styles.icon} color="#fff" />
                            </TouchableOpacity>

                            <View style={styles.headerTitleView}>
                                <Text style={styles.headerTitle}>Send Money</Text>
                            </View>

                        </View>
                    </Header>

                </ImageBackground>

            </LinearGradient>
            <View style={styles.innerView}>
                <View style={styles.listContainer} >
                    <View style={styles.accDetailsCover}>
                        <Text style={styles.accDetails}>From:</Text>
                        <Text style={styles.accNumber}>{details.number}</Text>
                    </View>

                    <View style={styles.accDetailsCover2}>
                        <View>
                            <Text style={styles.accDetails}>Balance:</Text>
                            <Text style={styles.accBal}>₦{commafy(details.balance)}</Text>
                        </View>
                        <View style={styles.accStatusView}>
                            <Text style={styles.accDetails}>Active</Text>
                        </View>
                    </View>
                </View>

                <ScrollView style={styles.form}>

                    <TouchableWithoutFeedback onPress={dismissKeyboard}>
                        <FormikValidator
                            initialValues={transferState}
                            validationSchema={transferSchema}
                            onSubmit={(values, { setErrors }) => {
                                if(values.amount > details.balance) {
                                    setErrors({amount: "Amount is higher than available balance"})
                                }else{
                                    submit(values)
                                }     
                            }}>
                            {props => (
                                <View>
                                    <View>
                                            <View style={[styles.inputHolder2, props.touched.bank && props.errors.bank ? styles.inputErrHolder : null]}>
                                                <View style={styles.labelView}>
                                                    <Text style={styles.label}>BANK</Text>
                                                </View>
                                                <Bank props={props} />
                                            </View>
                                    
                                        {props.touched.bank && props.errors.bank ? (
                                            <View style={styles.errView}>
                                                <Text style={styles.errText}>{props.errors.bank}</Text>
                                            </View>) : null}
                                    </View>

                                    <View>
                                        <View style={[styles.inputHolder, props.touched.accountNumber && props.errors.accountNumber ? styles.inputErrHolder : null]}>
                                            <View style={styles.labelView}>
                                                <Text style={styles.label}>ACCOUNT NUMBER</Text>
                                            </View>

                                            <InputField
                                                value={props.values.accountNumber}
                                                onBlur={props.handleBlur('accountNumber')}
                                                placeholder="000000900"
                                                placeholderTextColor="#757575"
                                                keyboardType="number-pad"
                                                onChangeText={(val) => {
                                                    props.setFieldValue('accountNumber', val)
                                                    props.setFieldTouched('accountNumber', true, false);

                                                }}
                                                style={styles.label2}
                                                maxLength={10}
                                            />
                                        </View>
                                        {props.touched.accountNumber && props.errors.accountNumber ? (
                                            <View style={styles.errView}>
                                                <Text style={styles.errText}>{props.errors.accountNumber}</Text>
                                            </View>) : null}
                                    </View>

                                    <View>
                                        <View style={[styles.inputHolder, props.touched.amount && props.errors.amount ? styles.inputErrHolder : null]}>
                                            <View style={styles.labelView}>
                                                <Text style={styles.label}>AMOUNT</Text>
                                            </View>

                                            <InputField
                                                value={props.values.amount}
                                                onBlur={props.handleBlur('amount')}
                                                placeholder="2000"
                                                placeholderTextColor="#757575"
                                                keyboardType="number-pad"
                                                onChangeText={(val) => {
                                                    props.setFieldValue('amount', val)
                                                    props.setFieldTouched('amount', true, false);
                                                }}
                                                style={styles.label2}
                                            />
                                        </View>
                                        {props.touched.amount && props.errors.amount ? (
                                            <View style={styles.errView}>
                                                <Text style={styles.errText}>{props.errors.amount}</Text>
                                            </View>) : null}
                                    </View>

                                    <View>
                                        <View style={[styles.inputHolder, props.touched.pin && props.errors.pin ? styles.inputErrHolder : null]}>
                                            <View style={styles.labelView}>
                                                <Text style={styles.label}>4 DIGIT PIN</Text>
                                            </View>

                                            <InputField
                                                value={props.values.pin}
                                                onBlur={props.handleBlur('pin')}
                                                placeholder="****"
                                                placeholderTextColor="#757575"
                                                keyboardType="number-pad"
                                                secureTextEntry={true}
                                                onChangeText={(val) => {
                                                    props.setFieldValue('pin', val)
                                                    props.setFieldTouched('pin', true, false);
                                                }}
                                                style={styles.label2}
                                                maxLength={4}
                                            />

                                        </View>
                                        {props.touched.pin && props.errors.pin ? (
                                            <View style={styles.errView}>
                                                <Text style={styles.errText}>{props.errors.pin}</Text>
                                            </View>) : null}
                                    </View>

                                    <View style={styles.btnCover}>
                                        <Btn title="Transfer" onPress={props.handleSubmit} />
                                    </View>
                                </View>
                            )}

                        </FormikValidator>

                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>


        </View>
    )
};

export default Transfer;