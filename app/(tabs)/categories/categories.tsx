import { View, Text } from "react-native";
import CategoriesItem from "../../../components/CategoryItem/categoriesitem";

export default function categories() {

    return (

        <View>
            <Text>Sou a Categories</Text>
           <CategoriesItem title={"Informática"} /> 
           <CategoriesItem title={"Informática"} /> 
           <CategoriesItem title={"Informática"} /> 
        </View>
    );




}