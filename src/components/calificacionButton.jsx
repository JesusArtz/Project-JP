import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CalificacionButton({ data }){

    // Create a card component that receives a data object and displays the name and the photo of the subject
    // The card should be clickable and should navigate to the calificacion screen

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Formulario")}>
            <View style={{flexDirection: "row", alignItems:'flex-start', paddingLeft:10}}>
                <Image source={require("../../assets/icon.png")} style={styles.image}/>
            <View style={{flexDirection: "column"}}>
                <Text style={styles.text}>{data.materia}</Text>
                <Text style={styles.textProf}>{data.Profesor}</Text>
            </View>
            </View>
            
        </TouchableOpacity>

    );

};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#e6e6e6",
        padding: 10,
        borderRadius: 5,
        
        width: 350,
        marginBottom: 20,
        flexDirection: "column",
    },
    text: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginBottom: 10,

    },
    textProf: {
        color: "#000000",
        fontSize: 15,
        paddingLeft: 20,
    },

});
