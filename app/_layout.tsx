import { StyleSheet } from "react-native";
import React from "react";
import {Stack} from 'expo-router';
 
export default function RootLayout(){
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="index"/>
        </Stack>
    )
}
const styles = StyleSheet.create({
   
})
 