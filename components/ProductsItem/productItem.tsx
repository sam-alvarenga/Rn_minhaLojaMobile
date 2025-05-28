import { Pressable, Image, Text, View, StyleSheet } from "react-native";
import { Product } from "../../types/product";

type Props = {
    products: Product
}


export default function ProductItem({ products }: Props) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.containerProduct}>
                <Image resizeMode="cover" style={styles.img} source={{ uri: products.image }} />
                <View style={styles.products}>
                    <Text style={styles.title}>{products.title}</Text>
                    <Text style={styles.description}>{products.description}</Text>
                    <Text style={styles.preco}>{products.price}</Text>
                </View>

            </Pressable>
        </View>

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
        color: '#E67A31',
        fontWeight: 'bold'
    },

    description: {
       fontSize: 14,
       color: '#333'
       

    },

    preco: {
        fontSize: 15,
        color: '#E67A31',
        fontWeight: 'bold',
        textAlign: 'right'
    }



});