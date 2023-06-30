import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import PageGreeting from "./Greeting";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        height: 100,
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10,
        resizeMode: 'cover',
        borderRadius: 15,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        flexWrap: 'wrap',
    },
    description: {
        fontSize: 14,
        color: '#666',
        flexWrap: 'wrap',
    },
})

interface TitleCellProps {
    title: string;
    image?: string;
    description?: string;
}

function TitleCell(props: TitleCellProps) {
    return (
        <View style={styles.container}>
            {props.image && (<Image source={{ uri: props.image }} style={styles.image} />)}
            <View style={styles.textContainer}>
                <Text style={styles.title} ellipsizeMode="tail">{props.title}</Text>
                <Text style={styles.description} ellipsizeMode="tail">{props.description}</Text>
            </View>
        </View>
    )
}

export default TitleCell