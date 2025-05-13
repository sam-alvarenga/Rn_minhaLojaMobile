import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";


type Props = {
    title: string,

}



export default function categoriesItem(prop: Props) {
    return (

       
            <TouchableOpacity  style={styles.container}>
                <Image resizeMode="cover" style={styles.img} source={require('./../../assets/image/0-1000x300.jpg')} />

                <Text style={styles.buttonImg}>{prop.title}</Text>
            </TouchableOpacity>
      
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    img: {
        width: '80%',
        height: 150
    }


});