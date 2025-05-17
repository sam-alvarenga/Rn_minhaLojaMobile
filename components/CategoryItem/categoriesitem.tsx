import { TouchableOpacity, Text, Image, StyleSheet, View, Pressable } from "react-native";
import { Category } from "../../types/category";
import {router} from 'expo-router';

type Props = {
    category: Category
}



export default function categoriesItem({category}: Props) {

    function handleClick() {
        router.push(`/categories/${category.id}`)
    }

    return (

        < TouchableOpacity onPress={handleClick} style={styles.container} >
            <Image resizeMode="cover" style={styles.img} source={{uri: category.cover}} />

            <Text style={styles.buttonText}>{category.title}</Text>
        </TouchableOpacity >

    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '80%',
        height: 150,
        margin: 15,
        backgroundColor: '#000',
        overflow: 'hidden',
        borderRadius: 20,
    },

    img: {
        width: '100%',
        height: '100%',
        margin: 15,
        opacity: 0.3

    },

    buttonText: {
        position: 'absolute',
        color: '#fff',
        fontSize: 25,

    },


});