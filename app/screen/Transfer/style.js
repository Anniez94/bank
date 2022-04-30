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
    headerTitleView: {
        marginRight: "39%"
    },
    headerTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#fff",
        letterSpacing: 0.2,
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
    accStatusView: {
        backgroundColor: "rgba(59,136,8, 0.2)",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20
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
        height: "25%"
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
    spending: {
        marginTop: "10%"
    },
    accDetails: {
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        color: "gray",
        letterSpacing: 0.2,
    },
    accDetailsCover: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.8,
        paddingBottom: 10,
        borderBottomColor: "#ccc"
    },
    accDetailsCover2: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
        marginTop: 20,
        alignItems: "center"
    },
    accNumber: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        color: "#212121",
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
        backgroundColor: "#fff",
        height: 120,
        width: "90%",
        elevation: 2,
        borderRadius: 8,
        marginRight: 18,
        marginBottom: 10,
        paddingHorizontal: 10,
        alignSelf: "center",
        paddingTop: 20

    },

    container: {
        height: "100%",
        flex: 1
    },
    innerView: {
        marginTop: -50,
        borderRadius: 20,
        backgroundColor: "#fff",
        height: "100%",
        flex: 1,
        flexGrow: 1
    },
    inputHolder: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 5,
        paddingHorizontal: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        zIndex: 2
    },
    label: {
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        color: "#616161",
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    label2: {
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "400",
        width: "70%"
    },
    form: {
        marginTop: 80,
        paddingHorizontal: 18,
        paddingBottom: 50,
        // height: "100%",

    },
    inputErrHolder: {
        borderColor: "red"
    },
    errView: {
        marginTop: 8,
        zIndex: 9000,
    },
    errText: {
        color: "red",
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        letterSpacing: 0.2,
    },
    btnCover: {
        marginVertical: 20
    },
    dropdown: {
        margin: -7,

    },

    placeholderStyle: {
        color: '#212121',
        fontSize: 14,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        letterSpacing: 0.25,
        paddingLeft: 10,

    },
    selectedTextStyle: {
        color: '#212121',
        fontSize: 14,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        letterSpacing: 0.25,
        paddingLeft: 10
    },
    banks: {
        paddingVertical: 5,
        paddingHorizontal: 18,
        borderWidth: 0.8,
        borderColor: "#eee"
    },
    inputHolder2: {
        width: '100%',
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 18,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 30,
        borderRadius: 5,
        alignSelf: "center"
      },

})