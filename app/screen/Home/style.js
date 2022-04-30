import { StyleSheet, Dimensions, Platform } from "react-native";

export default styles = StyleSheet.create({

    waveImg: {
        width: "100%",
        height: "100%",
    },
    mainHeader: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignItems: 'center',
        alignSelf: "center"
    },
    cardInnerCover: {
        width: '80%',
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: "center"

    },
    walletTitle: {
        fontSize: 28,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 34,
        color: "#fff",
        letterSpacing: 0.2,
        textTransform: 'uppercase'

    },
    accBal: {
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        color: "#000",
        letterSpacing: 0.2
    },
    miniTitle: {
        fontSize: 10,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        color: "#dc3545",
        letterSpacing: 0.2,
        textTransform: 'uppercase'
    },
    miniTitleCover: {
        backgroundColor: "rgba(255,0,0,0.08)",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
        marginBottom: 5
    },
    backgroundImg: {
        height: "40%"
    },
    icon: {
        alignSelf: "center"
    },
    userIcon: {
        borderWidth: 2,
        borderColor: "#fff",
        padding: 5,
        borderRadius: 50
    },
    spending:{
        marginTop: "10%"
    },
    spendingTitle:{
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        color: "gray",
        letterSpacing: 0.2,
    },
    userName: {
        fontFamily: "Urbanist-SemiBold",
        color: "#fff",
    },
    listContainer: {
       position: "absolute",
       top: "-9%",
       paddingHorizontal: 18,
       
    },
    listInnerContainer: {
        backgroundColor: "#fff",
        height: 110,
        width: 130,
        elevation: 2,
        borderRadius: 8,
        marginRight: 18,
       marginBottom: 10,
       paddingHorizontal: 10
    },
    listTransContainer: {
        backgroundColor: "#fff",
        height: 50,
        width: "90%",
        elevation: 2,
        borderRadius: 8,
       marginBottom: 20,
       paddingHorizontal: 10,
       flexDirection: "row",
       justifyContent: "space-between",
       alignItems: "center",
       alignSelf:"center"
     
    },
    container: {
        height: "100%",
        flex: 1
    },
    logo:{
        width: 80,
        height: 50,
        resizeMode: "contain",
        marginTop: "7%"
    },
    innerView: {
        marginTop: -50, 
        borderRadius: 20,
        backgroundColor: "#fff",
        height: "100%",
        flex: 1
    },
    transactionHistory:{
        marginTop: 100,
        paddingHorizontal: 18,
        marginBottom: 10
    }

})