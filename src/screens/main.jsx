import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CalificacionButton from "../components/calificacionButton";
import NavBar from "../components/navbar";

export default function Home({ session }) {

    const navigation = useNavigation();
    const [asesorias, setAsesorias] = React.useState({
        "0": {
            materia: "Matematicas",
            profesor: "Medina",
        },
        "1": {
            materia: "Español",
            profesor: "Medina",
        },
    });

    React.useEffect(() => {
        console.log(typeof session.token)
        fetch("http://192.168.0.17:5000/get_asesorias", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": session.token,
                },
                body: JSON.stringify({
                    token: session.token,
                    
                    }),
                })
                .then((response) => response.json())
                .then((json) => {
                    setAsesorias(json);
                    console.log(json);
                })
                .catch((error) => {
                    console.error(error);
                });
    }, []);



    return (
        
        <SafeAreaView style={{flex: 1, paddingTop: 35}} >
            
            <NavBar active={'Home'} />

            <ScrollView>

                <View style={styles.container}>
                    <Text style={styles.textLog}>Asesorias</Text>
                    {Object.keys(asesorias).map((key, index) => (
                        <CalificacionButton data={asesorias[key]} key={index} />
                    ))}
                    
                    
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

