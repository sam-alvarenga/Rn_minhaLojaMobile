import React from "react"
import { View, FlatList, StyleSheet } from "react-native"




export default function Category() {

    return (

        <View style={styles.container}>
            <Stack.Screen options={{ title: category.title }}

            <FlatList
                data={product} //informando a fonte de dados da flatlist
                renderItem={({ item }) => <CategoriesItem category={item} />} //informando a função que renderizará cada item, estamos usando uma arrow function no caso 
                keyExtractor={id => id.id.toString()} //identificação do index de cada item.
            >
            </FlatList>
        </View>
    )




}