import { View, FlatList } from "react-native";
import ProductItem from "../../components/ProductsItem/productItem";
import { getAllProducts } from "../../services/products";

export default function Home() {

    const products = getAllProducts();

    return (

        <View>
            <FlatList
                data={products} //informando a fonte de dados da flatlist
                renderItem={({ item }) => <ProductItem product={item} />} //informando a função que renderizará cada item, estamos usando uma arrow function no caso
                keyExtractor={id => id.id.toString()} //identificação do index de cada item.
            >
            </FlatList>
        </View>
    );




}