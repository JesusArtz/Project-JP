import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CalificacionButton from "../components/calificacionButton";
import NavBar from "../components/navbar";
import db from "../../assets/database.json";

export default function Home({ session }) {

    const navigation = useNavigation();



    return (
        
        <SafeAreaView style={{flex: 1, paddingTop: 35}} >
            
            <NavBar active={'Home'} />

            <ScrollView>

                <View style={styles.container}>
                    <Text style={styles.textLog}>Asesorias</Text>
                    <CalificacionButton data={{materia: "Matematicas", Profesor: "Juan Perez"}}/>
                    <CalificacionButton data={{materia: "Fisica", Profesor: "Juan Perez"}}/>
                    
                    
                </View>

            </ScrollView>

            

        </SafeAreaView>
    );
};

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

    
});

