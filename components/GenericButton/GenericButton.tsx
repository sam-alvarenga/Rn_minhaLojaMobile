import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';



type Props = {
    text: string;
    textColor: string;
    backgroundColor: string;
    function: () => void


}

export default function GenericButton(props: Props) {

    return (
        <TouchableOpacity onPress={props.function} style={[styles.button, { backgroundColor: props.backgroundColor }]}>
            <Text style={[styles.buttonText, {color: props.textColor }]}>{props.text}</Text>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        width: 150,
        borderRadius: 8,
        alignSelf: 'center',
        margin: 12
    },

    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});