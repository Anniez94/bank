import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, ImageBackground } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from "react-redux";

import styles from "./style"
import { Header } from "@Component/index";
import Data from "./data";
import commafy from "@Helper/commafy";
import { logoutfunc } from "@Store/Auth"


const Home = (props) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const redirectToTransferScreen = (item) => props.navigation.navigate("Transfer", {item});
    const googleLogout = async () => await dispatch(logoutfunc())

    const ListView = ({ item }) => (
        <TouchableOpacity style={styles.listInnerContainer} onPress={() => redirectToTransferScreen(item)}>
            <View style={styles.listContainerImageView}>
                <Image source={require("@Asset/image/logo.png")} style={styles.logo} />
            </View>
            <View >
                <View>
                    <Text style={styles.spendingTitle}>{item.number}</Text>
                </View>
                <View >
                    <Text style={styles.accBal}>₦{commafy(item.balance)}</Text>
                </View>

            </View>
        </TouchableOpacity>
    );

    const TransactionView = ({ item }) => (
        <TouchableOpacity style={styles.listTransContainer}>
                <View>
                    <Text style={styles.spendingTitle}>{item.type}</Text>
                </View>
                <View>
                    <Text style={styles.spendingTitle}>{item.description}</Text>
                </View>
                <View>
                    <Text style={styles.accBal}>₦{commafy(item.amount)}</Text>
                </View>

        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>

            <LinearGradient
                colors={['#343a40', '#6f42c1']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0.2, y: 1.7 }}
                style={styles.backgroundImg}
            >
                <ImageBackground source={require("@Asset/image/wave.png")} style={styles.waveImg}>
                    <Header>
                        <View style={styles.mainHeader}>
                            <TouchableOpacity style={styles.userIcon}>
                                <Icon name="user" size={18} style={styles.icon} color="#fff" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={googleLogout}>
                                <Icon name="log-out" size={18} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </Header>

                    <View style={styles.cardInnerCover}>
                        <View style={styles.miniTitleCover}>
                            <Text style={styles.miniTitle}>Total Balance</Text>
                        </View>

                        <Text style={styles.walletTitle}>₦{commafy(Data.total)}</Text>

                        <View style={styles.spending}>
                            <Text style={styles.spendingTitle}>Hi <Text style={styles.userName}>{user?.givenName}</Text>, you have spent <Text style={styles.userName}>₦{commafy(200000)}</Text> this April</Text>
                        </View>
                    </View>
                </ImageBackground>

            </LinearGradient>

            <View style={styles.innerView}>

                <View style={styles.listContainer}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={Data.account}
                        keyExtractor={item => item.id}
                        renderItem={ListView}
                    />
                </View>
                <View style={styles.transactionHistory}>
                    <Text style={styles.accBal}>Transaction History</Text>
                    </View>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Data.transactions}
                    keyExtractor={item => item.id}
                    renderItem={TransactionView}
                />

            </View>

        </View>
    )
};

export default Home;