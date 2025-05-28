import { View, Text, StyleSheet, FlatList } from "react-native";
/* import CategoriesItem from "../../../components/CategoryItem/categoriesitem"; */
/* import { getAllCatergories } from "../../../services/category"; */
import { getAllProducts } from "../../../services/products";
import ProductItem from "../../../components/ProductsItem/productItem";





export default function categories() {

    /*   const categories = getAllCatergories(); */
    const products = getAllProducts();
    return (

        <View>
            {/*     {categories.map((category) => (
                <Text>{`ID: ${category} - NOME: ${category}`}</Text> 

               <CategoriesItem category={category} />
            ))}*/}

            {/* <FlatList
                data={categories} //informando a fonte de dados da flatlist
                renderItem={({ item }) => <CategoriesItem category={item} />} //informando a função que renderizará cada item, estamos usando uma arrow function no caso 
                keyExtractor={id => id.id.toString()} //identificação do index de cada item.
            >
            </FlatList> */}
            <FlatList
                data={products} //informando a fonte de dados da flatlist
                renderItem={({ item }) => <ProductItem products={item} />} //informando a função que renderizará cada item, estamos usando uma arrow function no caso
                keyExtractor={id => id.id.toString()} //identificação do index de cada item.
            >
            </FlatList>
        </View >
    );




}
