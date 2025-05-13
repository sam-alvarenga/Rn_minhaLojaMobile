import { Stack } from "expo-router";
import React from "react";



export default function CategoriesLayout() {

    return (
        <Stack>
           
            <Stack.Screen name="categories" options={{ title: "Lista de Categorias" }} />
            {/* <Stack.Screen name="[id]" /> */}
            {/* Colocaremos o título desta stack dentro do código da mesma, pois ele será dinâmico não sabemos qual id virá para colocar o título */}
        </Stack>

    );




}