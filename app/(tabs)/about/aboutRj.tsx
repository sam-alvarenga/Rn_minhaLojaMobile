import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Branches from "./../../../components/Branches/branches";
import LojaRj from './../../../assets/lojaRj.jpg';


export default function aboutRj() {
    return (
        <Branches image={LojaRj} city="Filial - Rio de Janeiro" description="Localizada no coração do Rio, nossa filial oferece uma variedade de produtos modernos. Aqui você encontra acessórios como sapatos, bolsas e chapéus, além de uma ampla linha de eletrônicos e outros itens que combinam com seu dia a dia." localization={"JukasStores Rio de Janeiro (Zona Sul): Rua Marquês de Abrantes, 000 - Flamengo"}></Branches>
    );
}



