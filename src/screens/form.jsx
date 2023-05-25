import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import QuestionRadioGroups from "../components/questionsRadio";
import NavBar from "../components/navbar";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "../components/provider";

export default function Formulario({route, session }){
    
    const { id } = route.params;
    const { values } = useForm();
    const navigation = useNavigation();
    const send = () => {
        const promedio = Object.values(values).reduce((a, b) => a + b) / 6;
        console.log(promedio);
        fetch("http://192.168.0.17:5000/send_calificacion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": session.token,
            },
            body: JSON.stringify({
                id_asesoria: id,
                calificacion: promedio,
                token: session.token,
            }),
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            alert(json.message);
            navigation.navigate("Home");
        }
        )
        .catch((error) => {
            console.error(error);
        }
        );


    }
    
    useEffect(() => {
        console.log(values)
    }, [values])

    console.log(id)
    console.log(route)


    return (
        <SafeAreaView style={{flex: 1, paddingTop: 35}} >
            

            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.question}>
                        <Text style={styles.questionText}>Contenido de la asesoria</Text>
                        <QuestionRadioGroups context={'contenido'}  />
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.questionText}>Explicación del profesor</Text>
                        <QuestionRadioGroups context={'explicacion'} />
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.questionText}>Atencion del docente</Text>
                        <QuestionRadioGroups context={'atencion'} />
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.questionText}>Tiempo designado a los temas</Text>
                        <QuestionRadioGroups context={'tiempo'} />
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.questionText}>Puntualidad del docente</Text>
                        <QuestionRadioGroups context={'puntualidad'} />
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.questionText}>Cumplimiento del objetivo de la asesoria</Text>
                        <QuestionRadioGroups context={'objetivo'} />
                    </View>

                    <View style={{paddingTop:20}}>
                        <TouchableOpacity style={styles.buttonBackground} onPress={send}>
                            <Text style={styles.buttonText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    question: {
        marginBottom: 20,
    },
    questionText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    buttonBackground: {
        backgroundColor: "#fc049c",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },

})
