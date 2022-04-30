import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        height: "100%",
    },
    logoContainer: {
        paddingTop: 20,
        width: "100%"
    },
    heading: {
        marginTop: Dimensions.get("screen").height / 20
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: "contain"
    },
    view: {
        paddingHorizontal: 18,
    },
    headingText: {
        fontSize: 24,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 32,
        color: "#000",
        letterSpacing: 0.2,
    },
    subheadingText: {
        fontSize: 16,
        fontFamily: "Urbanist-Medium",
        lineHeight: 24,
        color: "#000",
        letterSpacing: 0.2,
        marginTop: 10
    },
    btnView: {
        marginTop: Dimensions.get("screen").height / 20,
        alignItems: "center"
    },
    mainImg: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        transform: [
            { perspective: 150 },
            { translateX: - Dimensions.get('window').width * 0.24 },
            { rotateY: '60deg' },

        ],
    },
    imgLeft: {
        marginLeft: "50%",
        width: "100%"
    }
})