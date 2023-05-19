import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faUser, faBook } from "@fortawesome/free-solid-svg-icons";


const NavBar = ({ active }) => {

    const navigation = useNavigation()

    return (
        <View style={styles.navbar}>
            <View style={styles.containerIcons}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.iconMenu}>
                        <FontAwesomeIcon icon={faHouse} size={30} color={active === 'Home' || active === 'Feed' ? "#A6B1E1" : "#8c8c8c"} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Materias')}>
                    <View style={styles.iconMenu}>
                        <FontAwesomeIcon icon={faBook} size={30} color={active === 'Materias' ? "#A6B1E1" : "#8c8c8c"} />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <View style={styles.iconMenu}>
                        <FontAwesomeIcon icon={faUser} size={30} color={active === 'Profile' ? "#A6B1E1" : "#8c8c8c"} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NavBar;

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "#fff",
        height: 60,
        width: "100%",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 100,
    },
    containerIcons: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
    },
    iconMenu: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    
})