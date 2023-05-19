import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/navbar";

export default function Profile(){
    
    const navigation = useNavigation();

    const historial = [
        {
            materia: "Matematicas",
            profesor: "Medina",
            calificacion: 5,
        },
        {
            materia: "Español",
            profesor: "Medina",
            calificacion: 5,
        },
        {
            materia: "Ingles",
            profesor: "Medina",
            calificacion: 5,
        },
    ]

    return (
        <SafeAreaView style={{flex: 1, paddingTop: 35}} >
            <NavBar active={'Profile'} />

            <ScrollView>
                <View style={styles.container}>
                    <Image source={require("../../assets/icon.png")} style={styles.image}/>
                    <Text style={styles.textLog}>Nombre</Text>
                    <Text style={styles.textLog}>Numero de control</Text>

                    <View style={styles.history}>
                        <Text style={styles.textLog}>Historial de asesorias</Text>
                        <View style={styles.historyContainer}>
                            {historial.map((item, index) => (
                                <View style={styles.historyItem} key={index}>
                                    <Text style={styles.historyText}>{item.materia}</Text>
                                    <Text style={styles.historyText}>{item.profesor}</Text>
                                    <Text style={styles.historyText}>{item.calificacion}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonBackground} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.buttonText}>Cerrar sesión</Text>
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
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginBottom: 10,
    },
    history: {
        marginTop: 20,
        width: 350,
        alignItems: "center",
    },
    historyContainer: {
        backgroundColor: "#e6e6e6",
        padding: 10,
        borderRadius: 5,
        width: 350,
        marginBottom: 20,
        flexDirection: "column",
    },
    historyItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    historyText: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
    },
    buttonBackground: {
        backgroundColor: "#fc049c",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 20,
    },
})
