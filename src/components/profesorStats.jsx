// crear un componente de pregunta con 5 radio buttons numerados del 1 al 5
//

// Path: src\components\questionRadioGroups.jsx

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ProfesorStats({ data }){
    // Create a card component that receives a data object and displays the name and the photo of the subject
    // The card should be clickable and should navigate to the calificacion screen

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Calificacion")}>
            <View style={{flexDirection: "row", alignItems:'flex-start', paddingLeft:10}}>
                <Image source={require("../../assets/icon.png")} style={styles.image}/>
            <View style={{flexDirection: "column"}}>
                <Text style={styles.text}>{data.nombre}</Text>
                <Text style={styles.textProf}>{data.profesor}</Text>
            </View>
            </View>
            <View style={{flexDirection: "row", alignItems:'flex-start', paddingLeft:10}}>
                <FontAwesomeIcon icon={faStar} size={30} color={"#A6B1E1"} />
                <FontAwesomeIcon icon={faStar} size={30} color={"#A6B1E1"} />
                <FontAwesomeIcon icon={faStar} size={30} color={"#A6B1E1"} />
                <FontAwesomeIcon icon={faStar} size={30} color={"#A6B1E1"} />
                <FontAwesomeIcon icon={faStar} size={30} color={"#A6B1E1"} />
            </View>
        </TouchableOpacity>

    );

}
