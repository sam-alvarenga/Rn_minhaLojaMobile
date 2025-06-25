import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";



export default function aboutRj() {

    return (
        <View style={styles.containerRj}>
            <Image
                source={require('./../../../assets/LojaRj1.png')}
                style={styles.ImgRj}
                resizeMode='cover'
            />
            <Text style={styles.branchRj}>Filial - Rio de janeiro</Text>
            <Text style={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam deserunt officia quae assumenda quidem beatae libero corporis architecto delectus error quis voluptatem saepe, facilis animi aliquid, optio nam minima!</Text>
        </View>


    );

}

const styles = StyleSheet.create({

    containerRj: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25
    },

    ImgRj: {
        width: 200,
        height: 200
    },

    branchRj: {
        color: '#F05B66',
        fontSize: 20,
        fontWeight: 'bold',
    },

    description: {
        paddingHorizontal: 20
    },




});

