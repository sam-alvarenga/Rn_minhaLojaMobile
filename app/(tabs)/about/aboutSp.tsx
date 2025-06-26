import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Branches from "./../../../components/Branches/branches";
import LojaSp from './../../../assets/lojaSp.jpg';


export default function aboutRj() {
    return (
       <Branches image={LojaSp} city="Filial - São Paulo" description="Situada no centro agitado de São Paulo, essa unidade da JukasStore é moderna e dinâmica, com grande variedade de produtos modernos. Aqui você encontra acessórios, além de uma ampla linha de eletrônicos e muitos outros itens que combinam com seu estilo." localization={"JukasStores São Paulo: Rua Oscar Freire, 000 - Jardins"}></Branches>
    );
}




