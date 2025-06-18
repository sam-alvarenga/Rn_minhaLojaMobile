import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { router } from "expo-router";
import GenericButton from '../../components/GenericButton/GenericButton';





export default function About() {

    function Rio() {

        router.navigate('') //navegar para outra de tela (a raiz index) pelo button
    }
    return (

        <View style={styles.container}>
            <Image
                source={require('./../../assets/logoLivro1.jpg')}
                style={styles.ImgBook}
                resizeMode='cover'
            />
            <Text style={styles.title}>Quem Somos</Text>
            <Text style={styles.info} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique at dolor nobis esse? Officiis blanditiis suscipit iure culpa aspernatur. Minima ipsa maxime laboriosam aperiam praesentium, perferendis fugiat repellat? Corrupti, harum.</Text>
            <Text style={styles.branches}>Conheça nossas Filiais em:</Text>
            <View style={styles.btnContainer}>
                <GenericButton text="Rio de Janeiro"
                    textColor="#000"
                    backgroundColor='#fff'
                    function={Rio}
                />
                <GenericButton text="São Paulo"
                    textColor="#000"
                    backgroundColor='#fff'
                    function={Rio}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       

    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 25
    },

    info: {
        fontSize: 15,
        textAlign: 'center',
        margin: 30,
        borderWidth: 1,
    },

    branches: {
        fontWeight: 'bold',
        fontSize: 15,
        borderWidth: 1,
    },


    btnContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        marginVertical: 35,


    },

    ImgBook: {
        width: 180,
        height: 100,
    }
});