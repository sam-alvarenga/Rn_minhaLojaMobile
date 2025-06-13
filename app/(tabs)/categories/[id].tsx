import React from "react"
import { View, FlatList, StyleSheet } from "react-native"
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCategoryById } from "../../../services/category";
import { getProductsByCategory} from "../../../services/products";
import ProductItem from "../../../components/ProductItem/ProductItem"





export default function Category() {
    const { id } = useLocalSearchParams();
    // console.log(id); - para descobrir o erro da troca do category.id pelo category title
    // Pegando o(s) parametro(s) ou array de parametro que veio da url, por isso usamos {} é objeto
    const idCategory = parseInt(id as string);
    // Convertendo em inteiro, porem como pode vir array temos que fazer cast explicito para que dynamicId seja entendido como string. Sabemos que vira apenas um ID

    const category = getCategoryById(idCategory);
    //pegando os dados da categoria pelo id - O nome será usado dentro da tela para colocar o título
    if (!category) return router.back();
    // caso a categoria esteja vazia, para não dar erro na hora de colocar o nome, é redirecionado para a página anterior

    const products = getProductsByCategory(idCategory);


    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: category.title }} />
            {/* puxando o nome da categoria do objeto categoria */}
            <FlatList
                data={products} //informando a fonte de dados da flatlist
                renderItem={({ item }) => <ProductItem product={item} />} //informando a função que renderizará cada item, estamos usando uma arrow function no caso
                keyExtractor={item => item.id.toString()} //identificação do index de cada item
                style={styles.list}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    list: {
        width: "100%",
        padding: 16,
        fontSize: 12
    }
})