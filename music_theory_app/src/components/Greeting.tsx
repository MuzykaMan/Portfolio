import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

interface PageGreetingProps {
    greeting: string;
    description: string;
    hasLogo: string;
}

const styles = StyleSheet.create({
    greeting:{
        borderBottomColor: 'black',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
    description:{
        borderBottomWidth: 0.5,
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'italic'
    },
    hasLogo: {
        height: 150,
        width: 150,
        alignSelf: 'center'

    }
})

function PageGreeting(props: PageGreetingProps) {
    return (
        <View>
            <Image style={styles.hasLogo} source={ {uri: props.hasLogo}}/>
            <Text style={styles.greeting}>{props.greeting}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    )

}

export default PageGreeting