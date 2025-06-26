import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

type Props = {
    city: string,
    description: string,
    localization: string,
    image: object
}
export default function Branches(props: Props) {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.img} />
            <Text style={styles.city}>{props.city}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.localization}>{props.localization}</Text>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width:"100%"
       
    },
    city: {
        fontSize: 26,
        fontWeight: 'bold',
        color: "#E67A31"
    },
    description: {
        paddingHorizontal: 25,
        textAlign: "center",
        fontWeight: "600"        

    },

    localization:{
        fontSize:13,
        textAlign: "center",
        width:"70%"
    },
    
    img: {
        width: '100%',
        height: 380,
       
    },


})