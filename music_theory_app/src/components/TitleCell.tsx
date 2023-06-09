import React from "react"
import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center'
    },
    container: {
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
    }
})

interface TitleCellProps {
    title: string;
}

function TitleCell(props: TitleCellProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default TitleCell