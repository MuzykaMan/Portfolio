import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

interface PageGreetingProps {
    greeting: string
}

const styles = StyleSheet.create({
    greeting:{
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})

function PageGreeting(props: PageGreetingProps) {
    return (
        <View>
            <Text style={styles.greeting}>{props.greeting}</Text>
        </View>
    )

}

export default PageGreeting