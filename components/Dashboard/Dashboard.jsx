import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Platform,
} from "react-native";
import React from "react";


export default function Dashboard(props) {
    const { name, password } = props.route.params;

    return (
        <View style={style.container}>
            <Text style={style.textContainer}>Name: {name}</Text>
            <Text style={style.textContainer}>Password: {password}</Text>

            <TouchableOpacity
                style={style.btn}
                onPress={() => props.navigation.goBack()}
            >
                <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
                    Go back to login screen
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.btn}
                onPress={() => props.navigation.navigate('API')}
            >
                <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
                    API Test Screen
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#DBC4F0",
        height: "60%",
        margin: 20,
        marginTop: 100,
        borderWidth: 5,
        borderColor: "#461959",
        alignItems: "center",
        justifyContent: "center",
    },

    textContainer: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 50,
        textAlign: "center",
        color: "#461959", // #322653
    },

    btn: {
        margin: 20,
        padding: 20,
        borderRadius: 50,
        backgroundColor: "#8062D6",
        elevation: 35,
    },
});