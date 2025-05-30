import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { getProductsById } from "../../services/products";


export default function ProductScreen() {

    //pegamdo o que evem como parametro usando o hook useLocalSearchParams = pode pegar um ou um array
    const { id } = useLocalSearchParams();

    //como virá sempre um único e não um array temos que dizer que queremos pegar com uma string
    const idProduct = parseInt(id as string)

    //Pegando o produto pelo id recebido para ter acesso aos seus dados na tela
    const product = getProductsById(idProduct);

    //Se não veio produto, returnamos para a página anterior - programação defensiva
    if(!product) return router.back
    
}

