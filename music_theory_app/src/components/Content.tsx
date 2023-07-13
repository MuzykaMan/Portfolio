import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { create } from "react-test-renderer";

interface ContentScreenProps {
    title: string;
    content: string;
}

const style = StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 18,
        textAlign: 'left',
        padding: 5,
    },
})

function DisplayContent(props: ContentScreenProps) {
    return (
        <View>
            <Text style={style.title}> {props.title} </Text>
            <Text style={style.content}> {props.content} </Text>
        </View>
    )
}

export default DisplayContent