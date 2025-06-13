import { Pressable, Image, Text, View, StyleSheet, } from "react-native";
import { Product } from "../../types/product";
import { Link } from "expo-router";


type Props = {
    product: Product
}


export default function ProductItem({ product }: Props) {
    return (

        <Link href={`/product/ ${product.id}`} style={styles.container} asChild>

            <Pressable style={styles.containerProduct}>
                <Image resizeMode="cover" style={styles.img} source={{ uri: product.image }} />
                <View style={styles.products}>
                    <Text style={[styles.title, styles.destaque]}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={[styles.preco, styles.destaque]}>R${product.price.toFixed(2)}</Text>
                </View>

            </Pressable>

        </Link>

    );

}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },

    containerProduct: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#d3d3d3",

    },

    img: {
        width: 100,
        height: 100,
        borderRadius: 8
    },

    products: {
        width: "80%",
        paddingHorizontal: 20
    },

    title: {
        fontSize: 20,


    },

    description: {
        fontSize: 14,
        color: '#333'


    },

    preco: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'right'
    },

    destaque: {
        fontWeight: 'bold',
        color: '#E67A31',
    }


});