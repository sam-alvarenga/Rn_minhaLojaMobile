import { Stack } from "expo-router";
import React from "react";



export default function AboutLayout() {

    return (
        <Stack screenOptions={{ headerShown: true}}>
            <Stack.Screen name="aboutMain" options={{ title: "Sobre Nós" }}/>
            <Stack.Screen name="aboutRj" options={{ title: "Filial - Rio de janeiro" }} />
            <Stack.Screen name="aboutSp" options={{ title: "Filial - São Paulo" }} />    
        </Stack>
    )

  
}

