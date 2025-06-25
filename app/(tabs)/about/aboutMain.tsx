import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { router } from "expo-router";
import GenericButton from '../../../components/GenericButton/GenericButton';





export default function AboutMain() {

    function rioNavigate() {

        router.navigate('/about/aboutRj')
    }

    function spNavigate() {

        router.navigate('/about/aboutSp')
    }
    return (

        <View style={styles.container}>
            <Image
                source={require('./../../../assets/logoLivro1.jpg')}
                style={styles.ImgBook}
                resizeMode='cover'
            />
            <Text style={styles.title}>Quem Somos</Text>
            <Text style={styles.info} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique at dolor nobis esse? Officiis blanditiis suscipit iure culpa aspernatur. Minima ipsa maxime laboriosam aperiam praesentium, perferendis fugiat repellat? Corrupti, harum.</Text>
            <Text style={styles.branches}>Conheça nossas Filiais em:</Text>
            <View style={styles.btnContainer}>
                <GenericButton text="Rio de Janeiro"
                    textColor="#fff"
                    backgroundColor='#F05B66'
                    function={rioNavigate}
                />
                <GenericButton text="São Paulo"
                    textColor="#fff"
                    backgroundColor='#F05B66'
                    function={spNavigate}
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

    },

    branches: {
        fontWeight: 'bold',
        fontSize: 15,

    },


    btnContainer: {
        flexDirection: 'row',
        marginVertical: 35,


    },

    ImgBook: {
        width: 180,
        height: 100,
    }
});