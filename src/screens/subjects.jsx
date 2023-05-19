import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/navbar";
import db from "../../assets/database.json";

export default function Materias({ session }){

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex: 1, paddingTop: 35}} >
            <NavBar active={'Materias'} />

            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.textLog}>Materias</Text>
                    <TouchableOpacity style={styles.buttonBackground} onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.buttonText}>Matematicas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBackground} onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.buttonText}>Fisica</Text>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textLog: {
        color: "#000000",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
    container: {
        flex: 1,
        alignItems: "center",
    },
    buttonBackground: {
        backgroundColor: "#fc049c",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 20,
    },

    buttonText: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
    },

})
