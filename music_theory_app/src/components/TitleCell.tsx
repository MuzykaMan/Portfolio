import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        flexGrow: 1,
    },
    container: {
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 15,
        marginLeft: 8
    }
})

interface TitleCellProps {
    title: string;
    image?: string;
}

function TitleCell(props: TitleCellProps) {
    return (
        <View style={styles.container}>
            {props.image && (<Image source={{ uri: props.image }} style={styles.image} />) }
            <Text style={styles.title}>{props.title}</Text>
            {props.image && (<View style={{width: 75, height: 75, marginRight: 8}} />) }
        </View>
    )
}

export default TitleCell