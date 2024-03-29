import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
import { SetupIntent } from "@stripe/stripe-react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        width: SIZES.width -44,
        top: SIZES.xxLarge,
        zIndex: 999,
    },
    image: {
        aspectRatio: 1,
        resizeMode: "cover",
    },
    details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    cardRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width,
    },
    cardBtn: {
        width: SIZES.width*0.7,
        backgroundColor: COLORS.black,
        padding: SIZES.small/2,
        borderRadius: SIZES.large,
        marginLeft: 12,
    },
    cardTitle: {
        marginLeft: SIZES.small,
        fontFamily: "bold",
        fontSize: SIZES.medium,
        color: COLORS.lightWhite
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -44,
        top: 20,
    },
    ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -10,
        top: 5,
    },
    rating: {
       top: SIZES.large,
       flexDirection: "row",
       justifyContent: "flex-start",
       alignItems: "center",
       marginHorizontal: SIZES.large,
    },
    descriptionWrapper: {
        marginTop: SIZES.large*2,
        marginHorizontal: SIZES.large,
    },
    description: {
        fontFamily: "medium",
        fontSize: SIZES.large -2,
    },
    descText: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        textAlign: "justify",
        marginBottom: SIZES.small
    },
    location: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        marginHorizontal: 12,
        padding: 5,
        borderRadius: SIZES.large,
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.large,
    },
    price: {
        padding: 10,
        fontFamily: "semibold",
        fontSize: SIZES.large,
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    ratingText: {
        color: COLORS.gray,
        fontFamily: "medium",
        paddingHorizontal: SIZES.xSmall,
    },
    addCard: {
        width: 37,
        height: 37,
        borderRadius: 50,
        margin: SIZES.small,
        backgroundColor: COLORS.black,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default styles