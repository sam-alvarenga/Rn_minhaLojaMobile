import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { router } from "expo-router";
import GenericButton from '../../../components/GenericButton/GenericButton';
import FontAwesome from '@expo/vector-icons/FontAwesome';






export default function AboutMain() {

    function navigateRio() {

        router.navigate('/about/aboutRj')
    }

    function navigateSp() {

        router.navigate('/about/aboutSp')
    }
    return (

        <View style={styles.container}>
            <FontAwesome size={130} name="users" style={styles.brandColor}></FontAwesome>
            <View style={styles.titleContainer}>
                <Text style={[styles.title, styles.brandColor]}>Jukas</Text>
                <Text style={styles.title}>Store</Text>
            </View>
            <Text style={[styles.info, styles.font]} >A JukasStores é a sua loja de produtos modernos e sofisticados. Oferecemos uma seleção especial de acessórios além dos mais recentes eletrônicos. Estamos aqui para trazer estilo e tecnologia para seu dia a dia, com lojas no Rio e em São Paulo.</Text>
            <Text style={[styles.branches, styles.font]}>Conheça nossas Filiais em:</Text>
            <View style={styles.btnContainer}>
                <GenericButton text="Rio de Janeiro"
                    textColor="#fff"
                    backgroundColor='#E67A31'
                    function={navigateRio}
                />
                <GenericButton text="São Paulo"
                    textColor="#fff"
                    backgroundColor='#E67A31'
                    function={navigateSp}
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
        gap: 35
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    title: {
        fontSize: 32,
        fontWeight: '900'
    },

    info: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20
    },

    font: {
        fontSize: 16
    },

    branches: {
        fontWeight: 'bold'
    },

    btnContainer: {
        flexDirection: 'row',
    },

    brandColor: {
        color: "#E67A31"
    }
});